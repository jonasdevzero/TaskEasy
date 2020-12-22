import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from "typeorm";
import Task from "./Task";

@Entity()
export default class Project {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    user_id: number;

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

    @OneToMany(_ => Task, task => task.project)
    @JoinColumn({ name: "project_id" })
    task: Task;
};
