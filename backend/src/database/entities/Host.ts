import { Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from "uuid";

@Entity('hosts')
export class Host {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'varchar'})
  name: string;

  @Column({ type: 'varchar' })
  description: string;

  @Column({ type: 'varchar' })
  avatar: string;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}