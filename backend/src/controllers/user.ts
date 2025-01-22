import express from "express";

import {deleteUserById, getUserById, getUsers, UserModel} from "../models/user";

export const getAllUsers = async (req: express.Request, res: express.Response)=> {
    try {
        const users = await getUsers();
        return res.status(200).json(users);
    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deleteUser = async (req: express.Request, res: express.Response)=> {
    try {
        const {id} = req.params;
        const deletedUser = await deleteUserById(id);

        return res.status(200).json(deletedUser);
    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }

}

//TODO for now the method is only use to change lastname. Update to update al fields afterwards.
export const updateUser = async (req: express.Request, res: express.Response)=> {
    try {
        const {id} = req.params;
        const {lastname} = req.body;

        if(!lastname){
            console.log("Missing required fields");
            return res.sendStatus(400);
        }

        const user = await getUserById(id);

        user!.lastname = lastname;
        await user!.save();

        return res.status(200).json(user).end();
    } catch(error){
        console.log(error);
        return res.sendStatus(400);
    }
}