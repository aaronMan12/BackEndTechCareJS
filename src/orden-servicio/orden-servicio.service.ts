import { Injectable } from '@nestjs/common';
import { CreateOrdenServicioDto } from './dto/create-orden-servicio.dto';
import { UpdateOrdenServicioDto } from './dto/update-orden-servicio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { OrdenServicio } from './entities/orden-servicio.entity';
import { Repository } from 'typeorm';
import { response } from 'express';

@Injectable()
export class OrdenServicioService {
  constructor(
    @InjectRepository(OrdenServicio)
    private ordenServicioRepository: Repository<OrdenServicio>
  ) {
    
  }

  async create(createOrdenServicioDto: CreateOrdenServicioDto) {
    const nuevaOrdenServicio = this.ordenServicioRepository.create(createOrdenServicioDto);
    if (nuevaOrdenServicio!=null) {
    return await nuevaOrdenServicio;
  }else{
    return response.status(404).json({message:"No se pudo crear la orden de servicio"});
  }
  }

  findAll() {
    return `This action returns all ordenServicio`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ordenServicio`;
  }

  update(id: number, updateOrdenServicioDto: UpdateOrdenServicioDto) {
    return `This action updates a #${id} ordenServicio`;
  }

  remove(id: number) {
    return `This action removes a #${id} ordenServicio`;
  }
}
