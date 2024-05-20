//import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';


import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';
import { Equipo } from 'src/equipo/entities/equipo.entity';// Ajusta la ruta de importación según tu estructura de archivos

@Entity()
export class OrdenServicio {

    @PrimaryGeneratedColumn()
    id_orden_servicio: number;

    @Column({ nullable: false })
    fecha_de_ingreso: Date;

    @Column({ length: 200, nullable: false })
    presupuesto: string;

    @Column({ nullable: false })
    monto_total: number;

    @Column({ nullable: false })
    anticipo: number;

    @Column({ length: 50, nullable: false })
    nombre_Cliente: string;

    @Column()
    id_equipo: string;

    @OneToOne(() => Equipo)
    @JoinColumn({ name: 'id_equipo' })
    equipo: Equipo;
    
}
