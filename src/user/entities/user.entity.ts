import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id_user: number ;

    @Column()
    nombre: string;

    @Column()
    contrasena : string;

    @Column() 
    roll: string;
}
