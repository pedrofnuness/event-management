import { Repository } from 'typeorm';
import { AppDataSource } from '../../data-source';
import EventInterface from '../common/interfaces/Event.interface';
import { Event } from '../entities/Event';
import { Host } from '../entities/Host';

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

  async getEvents(): Promise<Event[]> {
    try {
      const events = await this.eventRepository.find({
        relations: ["host"]
      });

      return events;
    } catch (err) {
      throw new Error(`Failed to get events: ${err}`)
    }
  }
}
