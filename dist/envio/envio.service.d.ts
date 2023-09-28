import { CreateEnvioDto } from './dto/create-envio.dto';
import { Envio } from './entities/envio.entity';
import { Repository } from 'typeorm';
export declare class EnvioService {
    private readonly envioRepository;
    constructor(envioRepository: Repository<Envio>);
    create(createEnvioDto: CreateEnvioDto): Promise<Envio>;
    findAll(): Promise<Envio[]>;
}
