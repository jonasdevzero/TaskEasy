import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import Project from './Project';
import Step from './Step';

@Entity()
export default class Task {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    user_id: number;

    @Column()
    project_id: null | number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    created_at: Date;

    @Column()
    completed: boolean;

    @Column()
    completed_at: Date;

    @ManyToOne(_ => Project, project => project.task, { cascade: ["update", "remove"] })
    @JoinColumn({ name: "project_id" })
    project: Project;

    @OneToMany(_ => Step, step => step.task)
    @JoinColumn({ name: "task_id" })
    step: Step;
};
