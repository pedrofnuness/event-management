import "reflect-metadata";
import "./database"
import express from "express";
import config from "../config"

const app = express();

const port = config.SERVER_PORT || 4000

app.listen(port, ()=> console.log(`Server is running on port ${port}!`))