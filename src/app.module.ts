import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { OrdenServicioModule } from './orden-servicio/orden-servicio.module';
import { OrdenServicio } from './orden-servicio/entities/orden-servicio.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'tcuser',
      password: 'QWERTY',
      database: 'techcare',
      entities: [User,OrdenServicio],
      synchronize: true,
    }),
    UserModule,
    OrdenServicioModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
