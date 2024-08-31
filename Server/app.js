import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json());
app.use(express.urlencoded({extended: true, limit: "16kb"}))
app.use(express.static("public"))


import propertyRouter from './routes/properties.routes.js';
app.use("/api/v1", propertyRouter);

export {app}