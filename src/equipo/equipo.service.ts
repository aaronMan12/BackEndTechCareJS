import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';
import { response } from 'express';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private equipoRepository: Repository<Equipo>
  ){}
  
  async create(createEquipoDto: CreateEquipoDto) {
    const noSerie = createEquipoDto.numero_de_serie;
    const nuevoEquipo = this.equipoRepository.save(createEquipoDto);
   
    if (nuevoEquipo != null) {
      
      return (await nuevoEquipo).numero_de_serie
    }else{
      return response.status(400).json({message: 'Error al crear el equipo'})
    }
    
  }

  findAll() {
    return `This action returns all equipo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} equipo`;
  }

  update(id: number, updateEquipoDto: UpdateEquipoDto) {
    return `This action updates a #${id} equipo`;
  }

  remove(id: number) {
    return `This action removes a #${id} equipo`;
  }
}
