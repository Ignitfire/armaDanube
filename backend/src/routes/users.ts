import express from 'express';

import {deleteUser, getAllUsers, updateUser} from "../controllers/user";
import {isAuthenticated, isOwner} from "../middlewares";

export default (router: express.Router) => {
    // @ts-ignore
    router.get('/users', isAuthenticated, getAllUsers);
    // @ts-ignore
    router.delete('/users/:id', isAuthenticated, isOwner, deleteUser);
    // @ts-ignore
    router.patch('/users/:id', isAuthenticated, isOwner, updateUser);
};