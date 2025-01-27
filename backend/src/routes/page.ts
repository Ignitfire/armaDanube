import express from 'express';
import {savePage, getPage, getPageNames, deletePage, updatePage} from '../controllers/page';

export default (router: express.Router) => {
    // @ts-ignore
    router.post('/page', savePage);
    // @ts-ignore
    router.get('/page', getPage);
    // @ts-ignore
    router.get('/page/names', getPageNames);
    // @ts-ignore
    router.delete('/page', deletePage);
    // @ts-ignore
    router.put('/page', updatePage);
};