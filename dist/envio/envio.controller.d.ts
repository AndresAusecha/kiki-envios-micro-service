import { EnvioService } from './envio.service';
import { CreateEnvioDto } from './dto/create-envio.dto';
export declare class EnvioController {
    private readonly envioService;
    constructor(envioService: EnvioService);
    create(createEnvioDto: CreateEnvioDto): Promise<import("./entities/envio.entity").Envio>;
    findAll(): Promise<import("./entities/envio.entity").Envio[]>;
}
