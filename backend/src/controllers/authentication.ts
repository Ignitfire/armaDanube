import express from "express";

import {createUser, getUserByEmail} from "../models/user";
import {random, authentication} from "../utils/crypto";

export const login = async (req: express.Request, res: express.Response)=> {
    try{
        const {email, password} = req.body;

        if(!email || !password){
            console.log("Missing required fields");
            return res.sendStatus(400);
        }

        console.log("Checking for existing user");
        const user = await getUserByEmail(email).select('+authentication.salt +authentication.password'); // the + parts permits us to get access to authentication and salt where we shouldn't be able too normally

        if(!user ){
            console.log("User not found");
            return res.sendStatus(404);
        }

        if(!user.authentication){ //! added this to part to fix "authentication mught be undefined. Check if no worries.
            console.log("User has no authentication");
            return res.sendStatus(403);
        }

        console.log("Checking password");
        const expectedHash = authentication(user.authentication.salt, password);

        if(user.authentication.password !== expectedHash){
            console.log("Incorrect password");
            return res.sendStatus(403);
        }
        const salt = random();
        user.authentication.sessionToken = authentication(salt, user._id.toString());
        await user.save();

        res.cookie('ARMADANUBE-AUTH', user.authentication.sessionToken,
            {
                domain: 'localhost',
                path: '/',
            });

        console.log("User logged in successfully");
        return res.status(200).json(user).end();

        } catch (error) {
            console.log(error);
            return res.sendStatus(408);
    }
}

export const register = async (req: express.Request, res: express.Response)=> {
    try{
        const {email, password, firstname, lastname} = req.body;

        if(!email || !password || !firstname || !lastname){
            console.log("Missing required fields");
            return res.sendStatus(400);
        }

        console.log("Checking for existing user");
        const existingUser = await getUserByEmail(email);

        if(existingUser){
            console.log("User already exists");
            return res.sendStatus(409);
        }

        console.log("Creating new user");
        const salt = random();
        const user = await createUser({
            email,
            firstname,
            lastname,
            authentication: {
                salt,
                password: authentication(salt, password),
            }
        });

        console.log("User created successfully");
        return res.status(200).json(user).end();

    } catch (error) {
        console.log(error);
        return res.sendStatus(408);
    }
}