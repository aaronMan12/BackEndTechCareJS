import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateOrdenServicioDto } from './dto/create-orden-servicio.dto';
import { UpdateOrdenServicioDto } from './dto/update-orden-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenServicio } from './entities/orden-servicio.entity';
import { Repository } from 'typeorm';
import { response } from 'express';
import { count } from 'console';

@Injectable()
export class OrdenServicioService {
  constructor(
    @InjectRepository(OrdenServicio)
    private ordenServicioRepository: Repository<OrdenServicio>
  ) {
    
  }

  async create(createOrdenServicioDto: CreateOrdenServicioDto) {
    try {
      const nuevaOrdenServicio = await this.ordenServicioRepository.save(createOrdenServicioDto);
      return nuevaOrdenServicio;
    } catch (error) {
      console.error('Error al crear la orden de servicio:', error);
      throw new InternalServerErrorException('No se pudo crear la orden de servicio');
    }
  }


  async ordenes_activas() {
    return await this.ordenServicioRepository.find({where: {estado:"activa"}});
  }

  async existe(id: number) {
    return await this.ordenServicioRepository.exists({where: {id_orden_servicio:id}});
  }

  findAll() {
    return `This action returns all ordenServicio`;
  }

  async findOne(id: number) {
    const busqueda_orde_de_servicio = this.ordenServicioRepository.findOne({where: {id_orden_servicio:id},
      select: ["id_orden_servicio","nombre_Cliente", "presupuesto", "anticipo", "monto_total"
      ]});

      if (busqueda_orde_de_servicio != null){
        return await busqueda_orde_de_servicio
      }

      return busqueda_orde_de_servicio
      
  }

  async update(updateOrdenServicioDto: UpdateOrdenServicioDto) {
    const { id_orden_servicio, ...updateData } = updateOrdenServicioDto;
    await this.ordenServicioRepository.update(
      { id_orden_servicio },
      updateData,
    );
    return this.ordenServicioRepository.findOne({ where: { id_orden_servicio } });
  }

  remove(id: number) {
    return `This action removes a #${id} ordenServicio`;
  }
}
