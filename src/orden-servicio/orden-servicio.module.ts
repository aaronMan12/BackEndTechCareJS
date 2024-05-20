import { Module } from '@nestjs/common';
import { OrdenServicioService } from './orden-servicio.service';
import { OrdenServicioController } from './orden-servicio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrdenServicio } from './entities/orden-servicio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([OrdenServicio])],
  controllers: [OrdenServicioController],
  providers: [OrdenServicioService],
})
export class OrdenServicioModule {}
