import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;
};
