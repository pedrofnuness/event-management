import { HostInterface } from './Host.interface';
import { SpeakerInterface } from './Speaker.interface';

export interface EventInterface {
  id: string;
  title: string;
  status: string;
  date: Date;
  host: HostInterface;
  speakers: SpeakerInterface[];
}