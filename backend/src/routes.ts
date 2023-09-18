import { Router } from 'express';
import { HostController } from './controllers/HostController';

const routes = Router();

const hostController = new HostController();

// routes.post('/event', new EventController().create);
routes.get('/hosts', hostController.fetchHosts);

export { routes };