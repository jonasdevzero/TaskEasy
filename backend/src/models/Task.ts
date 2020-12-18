import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import User from "./User";

@Entity()
export default class Task {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @ManyToOne(_ => User, user => user.task)
    @JoinColumn({ name: "user_id" })
    user: User;
};
