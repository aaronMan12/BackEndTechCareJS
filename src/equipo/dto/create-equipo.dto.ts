import { IsBoolean, IsNotEmpty, IsString } from "class-validator";

export class CreateEquipoDto {
    @IsString() @IsNotEmpty()
    numero_de_serie: string;

    @IsString() @IsNotEmpty()
    marca: string;   

    @IsString() @IsNotEmpty()
    modelo: string;

    @IsString() @IsNotEmpty()
    tipo_de_dispositivo: String;

    @IsString() @IsNotEmpty()
    estado_fisico: string;

    @IsBoolean() @IsNotEmpty()
    cargador: Boolean
}
