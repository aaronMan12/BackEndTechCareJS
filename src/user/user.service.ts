import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private userRepository:Repository<User>
  ) {

  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  async findAll() {
    return  await this.userRepository.find();
  }

  async loging(nombre: string, contrasena: string) {
    let loging = await this.userRepository.findOne({where: {nombre: nombre, contrasena: contrasena},
        select: ["nombre", "roll"]
    });
    if (loging == null) {
      return false;
    }
    return loging;
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
