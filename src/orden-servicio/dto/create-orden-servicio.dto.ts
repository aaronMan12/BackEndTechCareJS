import { IsDate, IsNotEmpty, IsNumber, IsString, isNotEmpty, isNumber } from "class-validator";
import { isNullOrUndefined } from "util";

export class CreateOrdenServicioDto {
    @IsNotEmpty()
    fecha_de_ingreso: Date;

    @IsString() @IsNotEmpty()
    presupuesto: string;

    @IsNumber() @IsNotEmpty()
    monto_total: number;

    @IsNumber() @IsNotEmpty()
    anticipo: number;

    @IsString() @IsNotEmpty()
    nombre_Cliente: string;

    @IsString() @IsNotEmpty()
    id_equipo: string;
}
