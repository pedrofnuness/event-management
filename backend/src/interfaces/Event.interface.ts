import Speaker from './Speaker.interface';

export default interface EventInterface {
  title: string;
  date: Date;
  host_id?: string;
  speakers: Speaker[];
};