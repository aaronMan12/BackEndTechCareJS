import { IsNotEmpty, IsString, Length } from "class-validator";

export class logingAuthDto{
    @IsString() @IsNotEmpty()
    nombre: string;

    @IsString() @Length(8) @IsNotEmpty()
    contrasena: string;

}