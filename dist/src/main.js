"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv_1 = require("dotenv");
const path_1 = require("path");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    app.enableCors({
        origin: ['http://localhost:5173'],
    });
    app.useStaticAssets((0, path_1.join)(process.cwd(), 'uploads'), {
        prefix: '/uploads',
    });
    (0, dotenv_1.config)();
    await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map