import express from "express";
import mongoose from 'mongoose';
import auth from './routes/auth';
import bodyParser from 'body-parser';
import User from './Model/User';
import dotenv from 'dotenv';

import path from "path";

dotenv.config();

const app = express();
app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/books", { useMongoClient: true });


app.use("/api/auth", auth);
app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(8080, () => {
    console.log(`Server started on port 8080`);
});


