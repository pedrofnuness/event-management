import { Router } from 'express';
import { HostController } from './controllers/HostController';
import { EventController } from './controllers/EventController';
import { SSEController } from './controllers/SSEController';

const routes = Router();

const hostController = new HostController();
const eventController = new EventController();

routes.post('/event', eventController.createEvent);
routes.get('/events', eventController.fetchEvents);
routes.get('/hosts', hostController.fetchHosts);
routes.get('/sse', SSEController.connect);

export { routes };