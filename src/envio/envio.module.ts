import { Module } from '@nestjs/common';
import { EnvioService } from './envio.service';
import { EnvioController } from './envio.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envio } from './entities/envio.entity';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'kiki-db',
      port: 5432,
      password: 'postgres_password',
      username: 'postgres',
      entities: [Envio],
      database: 'postgres',
      synchronize: true,
      logging: true,
    }), 
    TypeOrmModule.forFeature([Envio]),
    ClientsModule.register([
    {
      name: 'rabbit-mq-module',
      transport: Transport.RMQ,
      options: {
        urls: [
          'amqp://guest:guest@rabbitmq:5672',
        ],
        queue: 'rabbit-mq-kiki',
      },
    },
    ]),
  ],
  controllers: [EnvioController],
  providers: [EnvioService],
})
export class EnvioModule {}
