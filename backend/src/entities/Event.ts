import { 
  Column, 
  CreateDateColumn, 
  Entity, 
  JoinColumn, 
  ManyToOne, 
  PrimaryColumn 
} from 'typeorm';
import { v4 as uuid } from "uuid";
import { Host } from './Host';
import { EventStatus } from '../common/EventStatus.enum';
import Speaker from '../common/Speaker.interface';


@Entity("events")
export class Event {
  @PrimaryColumn({ type: 'uuid' })
  id: string;

  @Column({ type: 'varchar'})
  title: string;

  @Column({ type: 'enum', enum: EventStatus, default: EventStatus.DRAFT })
  status: EventStatus;

  @Column({ type: 'timestamp' })
  date: Date;

  @Column({ type: 'uuid' })
  host_id: string;

  @ManyToOne(() => Host)
  @JoinColumn({ name: 'host_id' })
  host: Host;

  @Column({ type: 'jsonb' })
  speakers: Speaker[];

  @CreateDateColumn({ type: 'timestamp', default: 'now()' })
  created_at: Date;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
};