import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import Task from "./Task";
import User from "./User";

@Entity()
export default class Project {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToOne(_ => User, user => user.project)
    @JoinColumn({ name: "user_id" })
    user: User;

    @OneToMany(_ => Task, task => task.project)
    @JoinColumn({ name: "project_id" })
    task: Task;
};
