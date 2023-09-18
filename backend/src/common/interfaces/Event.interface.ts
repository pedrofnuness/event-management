import { EventStatus } from '../enum/EventStatus.enum';
import Speaker from './Speaker.interface';

export default interface EventInterface {
  title: string;
  status: EventStatus;
  date: Date;
  host_id: string;
  speakers: Speaker[];
};