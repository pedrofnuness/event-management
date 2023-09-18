import { Router } from 'express';
import { HostController } from './controllers/HostController';
import { EventController } from './controllers/EventController';

const routes = Router();

const hostController = new HostController();
const eventController = new EventController();

routes.post('/event', eventController.createEvent);
routes.get('/events', eventController.fetchEvents);
routes.get('/hosts', hostController.fetchHosts);

export { routes };