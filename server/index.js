import express, { json, urlencoded } from "express";
import cors from 'cors';
import upload from 'express-fileupload';



var app = express();  
app.use(json({limit: '50mb'}));
app.use(urlencoded({ extended: false , limit: '50mb'} ));
app.use(cors());
app.use(upload());


app.get('/user', async (req, res) => {
    res.status(200).json({
      message: "data",
      data: "data"
    })
});

// import { router } from "./routes/index";
// app.use("/v1", router);

export default app
