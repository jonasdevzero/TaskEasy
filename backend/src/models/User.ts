import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import Project from './Project';
import Task from "./Task";

@Entity()
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    coin: number;

    @Column()
    created_at: Date;

    @OneToMany(_ => Task, task => task.user)
    @JoinColumn({ name: "user_id" })
    task: Task;

    @OneToMany(_ => Project, project => project.user)
    @JoinColumn({ name: "user_id" })
    project: Project;
};
