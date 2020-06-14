import { Entity, PrimaryGeneratedColumn, Column } from 'https://denolib.com/denolib/typeorm/mod.ts';

@Entity()
export class Product {

    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column("text")
    name: string;

    @Column("text")
    libelle: string;
}