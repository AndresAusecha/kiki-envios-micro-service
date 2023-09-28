"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const envio_module_1 = require("./envio/envio.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(envio_module_1.EnvioModule);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map