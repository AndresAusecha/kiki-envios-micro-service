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
exports.CreateEnvioDto = void 0;
const class_validator_1 = require("class-validator");
const envio_entity_1 = require("../entities/envio.entity");
class CreateEnvioDto {
}
exports.CreateEnvioDto = CreateEnvioDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEnvioDto.prototype, "destinatario", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateEnvioDto.prototype, "remitente", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MaxLength)(140),
    __metadata("design:type", String)
], CreateEnvioDto.prototype, "contenido", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Date)
], CreateEnvioDto.prototype, "fecha_envio", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(envio_entity_1.EstadoEnum),
    __metadata("design:type", String)
], CreateEnvioDto.prototype, "estado", void 0);
//# sourceMappingURL=create-envio.dto.js.map