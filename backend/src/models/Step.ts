import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from "typeorm";
import Task from "./Task";

@Entity("step")
export default class Step {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    description: string;

    @Column()
    completed: boolean;

    @Column()
    completed_at: Date;

    @ManyToOne(_ => Task, task => task.step, { cascade: ["remove", "update"] })
    @JoinColumn({ name: "task_id" })
    task: Task;
};
