import { PartialType } from '@nestjs/mapped-types';
import { CreateOrdenServicioDto } from './create-orden-servicio.dto';
import { IsNotEmpty, IsNumber, IsString, MAX, Min } from 'class-validator';

export class UpdateOrdenServicioDto extends PartialType(CreateOrdenServicioDto) {
    @IsNumber()
    @IsNotEmpty()
    id_orden_servicio: number

    @IsString() @IsNotEmpty()
    estado: string;
    
    @IsString() @IsNotEmpty()
    acciones_realizadas: String

    @IsString() @IsNotEmpty()
    recomendaciones: String

    @IsString() @IsNotEmpty()
    observaciones: String
}
