import { EstadoEnum } from '../entities/envio.entity';
export declare class CreateEnvioDto {
    destinatario: string;
    remitente: string;
    contenido: string;
    fecha_envio: Date;
    estado: EstadoEnum;
}
