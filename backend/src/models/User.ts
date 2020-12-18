import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
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
    coin: string;

    @Column()
    created_at: Date;

    @OneToMany(_ => Task, task => task.user, { cascade: ["remove", "update"] })
    @JoinColumn({ name: "user_id" })
    task: Task;
};
