export declare enum EstadoEnum {
    RECIBIDO = "RECIBIDO",
    EN_BODEGA = "EN_BODEGA",
    DESPACHADO = "DESPACHADO",
    ENTREGADO = "ENTREGADO"
}
export declare class Envio {
    id_envio: number;
    destinatario: string;
    remitente: string;
    contenido: string;
    fecha_envio: Date;
    estado: EstadoEnum;
}
