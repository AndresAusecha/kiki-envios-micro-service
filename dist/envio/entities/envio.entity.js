"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Envio = exports.EstadoEnum = void 0;
const typeorm_1 = require("typeorm");
var EstadoEnum;
(function (EstadoEnum) {
    EstadoEnum["RECIBIDO"] = "RECIBIDO";
    EstadoEnum["EN_BODEGA"] = "EN_BODEGA";
    EstadoEnum["DESPACHADO"] = "DESPACHADO";
    EstadoEnum["ENTREGADO"] = "ENTREGADO";
})(EstadoEnum || (exports.EstadoEnum = EstadoEnum = {}));
let Envio = class Envio {
};
exports.Envio = Envio;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Envio.prototype, "id_envio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int4' }),
    __metadata("design:type", String)
], Envio.prototype, "destinatario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int4' }),
    __metadata("design:type", String)
], Envio.prototype, "remitente", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 140 }),
    __metadata("design:type", String)
], Envio.prototype, "contenido", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", Date)
], Envio.prototype, "fecha_envio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'enum', enum: EstadoEnum, default: EstadoEnum.RECIBIDO }),
    __metadata("design:type", String)
], Envio.prototype, "estado", void 0);
exports.Envio = Envio = __decorate([
    (0, typeorm_1.Entity)()
], Envio);
//# sourceMappingURL=envio.entity.js.map