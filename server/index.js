import express, { json, urlencoded } from "express";
import cors from 'cors';
import upload from 'express-fileupload';
const multer = require('multer')
const path = require('path')

require("./config/db"); //Load database configuration values
var app = express();  
app.use(json({limit: '50mb'}));
app.use(urlencoded({ extended: false , limit: '50mb'} ));
app.use(cors());
app.use(upload());
const multerMid = multer({
    storage: multer.memoryStorage(),
    limits: {
        // no larger than 5mb.
        fileSize: 5 * 1024 * 1024,
    },
})
app.use(multerMid.single('file'))



import { router } from "./routes/index";
app.use("/v1", router);

export default app
