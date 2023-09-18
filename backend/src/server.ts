import "reflect-metadata";
import "./database"
import express from "express";
import config from "../config"
import { routes } from './routes';

const app = express();

app.use(express.json())
app.use(routes);

const port = config.SERVER_PORT || 4000

app.listen(port, ()=> console.log(`Server is running on port ${port}!`))