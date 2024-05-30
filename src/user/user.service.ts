import { HttpException, Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { response } from 'express';
import { STATUS_CODES } from 'http';
import { logingAuthDto } from './dto/loing-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>,
    private jwtService: JwtService
  ) {

  }

  async create(createUserDto: CreateUserDto) {
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return  await this.userRepository.find();
  }

  async loging(userObjectLoging: logingAuthDto) {
    const { nombre, contrasena} = userObjectLoging;
    const findUser = await this.userRepository.findOne({where: {nombre: nombre, contrasena: contrasena}});
    if (!findUser) throw new HttpException('USER_NOT_FOUT', 404);

    const payload = {id_user: findUser.id_user, nombre: findUser.nombre}
    const token = await this.jwtService.sign(payload)

    const data = {
      user: findUser,
      token
    };
    return data;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
