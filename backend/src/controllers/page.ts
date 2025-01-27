// backend/src/controllers/page.ts
import express from 'express';
import { PageModel } from '../models/page';

export const savePage = async (req: express.Request, res: express.Response) => {
    try {
        const { name, html } = req.body;
        const page = new PageModel({ name, html });
        await page.save();
        return res.status(200).json(page);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getPage = async (req: express.Request, res: express.Response) => {
    try {
        const { name } = req.query;
        const page = await PageModel.findOne({ name });
        if (!page) {
            return res.sendStatus(404);
        }
        return res.status(200).json(page);
    } catch (error) {
        console.log(error);
        return res.sendStatus(400);
    }
};

export const getPageNames = async (req: express.Request, res: express.Response) => {
    try{
        const names = await PageModel.find().select('name');
        return res.status(200).json(names);
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}

export const deletePage = async (req: express.Request, res: express.Response) => {
    try{
        const { name } = req.query;
        const deletionResult = await PageModel.deleteOne({ name });
        return res.status(200).json(deletionResult);
    } catch (error){
        console.log(error);
        return res.sendStatus(400);
    }
}