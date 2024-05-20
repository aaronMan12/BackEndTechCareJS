import { ColdObservable } from 'rxjs/internal/testing/ColdObservable';
import {Entity, Column, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm';
@Entity()

export class Equipo {
    @PrimaryColumn({length: 50, nullable: false})
    numero_de_serie: string;
    
    @Column({length: 50, nullable: false})
    marca: string;
  
    @Column({length: 50, nullable: false})
    modelo: string;
  
    @Column({type: 'enum', enum: ['escritorio', 'laptop', 'consola'], nullable: false})
    tipo_de_dispositivo: String;

    @Column({length: 250, nullable: false})
    estado_fisico: string;

    @Column({nullable: false})
    cargador: Boolean;
}
