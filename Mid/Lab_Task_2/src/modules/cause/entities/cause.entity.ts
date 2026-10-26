import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity('causes')
export class Cause {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
 
  @Column({ unique: true })
  name!: string;
}