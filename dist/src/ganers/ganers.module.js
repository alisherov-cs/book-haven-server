"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GanersModule = void 0;
const common_1 = require("@nestjs/common");
const ganers_service_1 = require("./ganers.service");
const ganers_controller_1 = require("./ganers.controller");
let GanersModule = class GanersModule {
};
exports.GanersModule = GanersModule;
exports.GanersModule = GanersModule = __decorate([
    (0, common_1.Module)({
        controllers: [ganers_controller_1.GanersController],
        providers: [ganers_service_1.GanersService],
    })
], GanersModule);
//# sourceMappingURL=ganers.module.js.map