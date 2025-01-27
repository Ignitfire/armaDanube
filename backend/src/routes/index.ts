import express from "express";

const router = express.Router();

import authentication from "./authentication";
import users from "./users";
import page from "./page";

export default (): express.Router => {
    authentication(router);
    users(router);
    page(router);
    return router;
}