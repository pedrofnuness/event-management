import { HostInterface } from './Host.interface';
import { SpeakerInterface } from './Speaker.interface';
import { EVENT_STATUS } from '@/app/common/eventStatus';

export interface EventInterface {
  id: string;
  title: string;
  status: keyof typeof EVENT_STATUS;
  date?: string;
  host: HostInterface;
  speakers: SpeakerInterface[];
  created_at: Date;
}