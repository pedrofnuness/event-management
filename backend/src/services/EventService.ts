import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import EventInterface from '../interfaces/Event.interface';
import { Event } from '../entities/Event';
import { Host } from '../entities/Host';

interface EventWithStatus extends Event {
  status: string;
}

export class EventService {
  private eventRepository: Repository<Event>;
  private hostRepository: Repository<Host>;

  constructor() {
    this.eventRepository = AppDataSource.getRepository(Event);
    this.hostRepository = AppDataSource.getRepository(Host);
  }

  async createEvent(eventData: EventInterface): Promise<Event | Error> {
    try {
      const hostEntity = await this.hostRepository.findOneBy({ id: eventData.host_id});
      
      if (!hostEntity) {
        return new Error("Host does not exist!");
      }

      const newEvent = this.eventRepository.create(eventData);
      const createdEvent = await this.eventRepository.save(newEvent);

      return createdEvent;
    } catch (err) {
      throw new Error(`Failed to create event: ${err}`,)
    }
  }

  async getEvents(): Promise<EventWithStatus[]> {
    try {
      const events = await this.eventRepository.find({
        relations: ["host"]
      });

      const currentDate = new Date();
      events.forEach((event) => {
        if (event.date) {
          if (event.date > currentDate) {
            event.status = 'upcoming';
          } else {
            event.status = 'past';
          }
        } else {
          event.status = 'draft';
        }
      });

      return events;
    } catch (err) {
      throw new Error(`Failed to get events: ${err}`)
    }
  }
}
