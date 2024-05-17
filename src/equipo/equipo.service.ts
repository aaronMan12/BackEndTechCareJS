import { Injectable } from '@nestjs/common';
import { CreateEquipoDto } from './dto/create-equipo.dto';
import { UpdateEquipoDto } from './dto/update-equipo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Equipo } from './entities/equipo.entity';

@Injectable()
export class EquipoService {
  constructor(
    @InjectRepository(Equipo)
    private equipoRepository: Repository<Equipo>
  ){}
  
  async create(createEquipoDto: CreateEquipoDto) {
    //const partialEquipo: Partial<Equipo> = createEquipoDto;
    return await this.equipoRepository.save(createEquipoDto);
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
