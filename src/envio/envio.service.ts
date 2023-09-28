import { Inject, Injectable } from '@nestjs/common';
import { CreateEnvioDto } from './dto/create-envio.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Envio } from './entities/envio.entity';
import { Repository } from 'typeorm';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class EnvioService {
  constructor(
    @InjectRepository(Envio) private readonly envioRepository: Repository<Envio>,
    @Inject('rabbit-mq-module') private readonly client: ClientProxy
  ) {}

  create(createEnvioDto: CreateEnvioDto) {
    const envio = new Envio()
    envio.destinatario = createEnvioDto.destinatario
    envio.remitente  = createEnvioDto.remitente
    envio.contenido = createEnvioDto.contenido
    envio.estado = createEnvioDto.estado
    envio.fecha_envio = new Date(createEnvioDto.fecha_envio)
    
    this.client.send("EnvioCreado", { message: "El envío se ha creado correctamente" }).subscribe();
    return this.envioRepository.save(envio);
  }

  findAll() {
    return this.envioRepository.find();
  }
}
