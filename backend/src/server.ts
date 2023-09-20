import "reflect-metadata";
import "./database"
import cors from "cors";
import express from "express";
import config from "../config"
import { routes } from './routes';

const app = express();

app.use(cors());
app.use(express.json())
app.use(express.static('public'));
app.use(routes);

const port = config.SERVER_PORT || 4000

app.listen(port, ()=> console.log(`Server is running on port ${port}!`))