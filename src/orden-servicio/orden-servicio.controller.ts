import { Controller, Get, Post, Body, Patch, Param, Delete, Put} from '@nestjs/common';
import { OrdenServicioService } from './orden-servicio.service';
import { CreateOrdenServicioDto } from './dto/create-orden-servicio.dto';
import { UpdateOrdenServicioDto } from './dto/update-orden-servicio.dto';

@Controller('/api/orden_servicio/')
export class OrdenServicioController {
  constructor(private readonly ordenServicioService: OrdenServicioService) {}

  @Post()
  create(@Body() createOrdenServicioDto: CreateOrdenServicioDto) {
    return this.ordenServicioService.create(createOrdenServicioDto);
  }

  @Post('nuevaordendeservicio')
  async nuevaOrdenDeServicio(@Body() createOrdenServicioDto: CreateOrdenServicioDto) {
    return await this.ordenServicioService.create(createOrdenServicioDto);
  }

  @Get('existe/:id')
  async existe(@Param('id') id: number) {
    return await this.ordenServicioService.existe(id);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    return await this.ordenServicioService.findOne(id);
  }

  @Get()
  async ordenes_activas(){
    return await this.ordenServicioService.ordenes_activas()
  }

  @Put()
  async update( @Body() updateOrdenServicioDto: UpdateOrdenServicioDto) {
    return await this.ordenServicioService.update(updateOrdenServicioDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ordenServicioService.remove(+id);
  }
}
