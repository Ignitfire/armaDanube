import express from "express";
import {get, merge} from "lodash";

import {getUserBySessionToken} from "../models/user";

export const isOwner = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    try{
        const {id} = req.params;
        const currentUserId = get(req, 'identity._id') as unknown as string; //TODO didn't understan why we needed theunknown here

        if(!currentUserId){
            console.log("Missing current user");
            return res.sendStatus(403);
        }

        if(currentUserId.toString() !== id.toString()){
            console.log("User is not the owner");
            return res.sendStatus(403);
        }

        return next();

    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const isAuthenticated = async (req: express.Request, res: express.Response, next: express.NextFunction ) => {
    try{
        const sessionToken = req.cookies['ARMADANUBE-AUTH'];

        if(!sessionToken){
            console.log("missing session token");
            return res.sendStatus(403);
        }

        const existingUser = await getUserBySessionToken(sessionToken);

        if(!existingUser){
            console.log("User not found");
            return res.sendStatus(403);
        }

        merge(req, {identity: existingUser});

        return next();


    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}