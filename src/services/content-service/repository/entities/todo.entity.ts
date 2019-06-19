import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class TodoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  label: string;

  @Column('text')
  description: string;

  @Column('timestamptz')
  createdOn: Date;

  @Column('text')
  createdBy: string;

  @Column('boolean')
  isComplete: boolean;
}
