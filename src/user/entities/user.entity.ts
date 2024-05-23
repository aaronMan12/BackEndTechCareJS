import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()

export class User {
    @PrimaryGeneratedColumn()
    id_user: number ;

    @Column({length: 50, nullable: false})
    nombre: string;

    @Column({
        length: 8, nullable: true})
    contrasena : string  ;

    @Column({type: 'enum', 
            enum: ['admin', 'tecnico'],
            nullable: false}) 
    roll: string;
}
