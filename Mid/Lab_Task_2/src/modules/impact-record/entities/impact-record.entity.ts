import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
 
@Entity('impact_records')
export class ImpactRecord {
  @PrimaryGeneratedColumn('uuid')
  id!: string;
 
  @Column()
  title!: string;
 
  @Column()
  sourceType!: string;
 
  @Column({ default: 'Active' })
  status!: string;
 
  @Column({ default: 'Private' })
  visibility!: string;
}