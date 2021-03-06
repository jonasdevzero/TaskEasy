import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity("user")
export default class User {
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column()
    name: string;

    @Column()
    username: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    image: string;

    @Column()
    coin: number;

    @Column()
    created_at: string;

    @Column()
    modified_at: string;
};
