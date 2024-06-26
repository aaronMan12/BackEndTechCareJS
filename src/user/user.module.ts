import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './entities/jwt.constants';


@Module({
  imports: [TypeOrmModule.forFeature([User]),

  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  }),
],
  
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
