import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import Project from './Project';
import Step from './Step';
import User from "./User";

@Entity()
export default class Task {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column()
    created_at: Date;

    @Column()
    completed_at: Date;

    @ManyToOne(_ => User, user => user.task)
    @JoinColumn({ name: "user_id" })
    user: User;

    @ManyToOne(_ => Project, project => project.task)
    @JoinColumn({ name: "project_id" })
    project: Project;

    @OneToMany(_ => Step, step => step.task)
    @JoinColumn({ name: "task_id" })
    step: Step;
};
