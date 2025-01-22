import express from "express";

import {login, register} from "../controllers/authentication";

export default (router: express.Router) => {
    // @ts-ignore
    // TODO: fix the error to remove the ts-ignore
    router.post('/auth/register', register);
    // @ts-ignore
    router.post('/auth/login', login);
}