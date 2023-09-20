import { Request, Response } from 'express';
import { EventService } from '../services/EventService';
import EventInterface from '../interfaces/Event.interface';
import eventBodyValidator from '../helpers/eventBodyValidator';
import { speakersMock } from '../mocks/speakers.mock';
import { SSEController } from './SSEController';

export class EventController {
  async createEvent(req: Request, res: Response): Promise<void> {
    const eventData: EventInterface = req.body;

    const bodyErrors = eventBodyValidator(eventData);
    if (bodyErrors.length) {
      res.status(400).json({ error: bodyErrors })
      return;
    };

    const eventService = new EventService();

    try {
      const createdEvent = await eventService.createEvent({
        ...eventData,
        speakers: speakersMock,
        date: new Date(eventData.date) || null
      });

      if (createdEvent instanceof Error) {
        res.status(400).json({ error: createdEvent.message });
      }

      SSEController.sendUpdate(createdEvent);

      res.status(200).json(createdEvent);
    }catch (err) {
      console.error(err)
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }

  async fetchEvents(req: Request, res: Response): Promise<void> {
    const eventService = new EventService();

    try {
      const events = await eventService.getEvents();
      res.status(200).json(events);
    } catch (error) {
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }
}