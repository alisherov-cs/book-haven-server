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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GanersController = void 0;
const common_1 = require("@nestjs/common");
const ganers_service_1 = require("./ganers.service");
const create_dto_1 = require("./dto/create.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const role_guard_1 = require("../auth/guards/role.guard");
const user_dto_1 = require("../auth/dto/user.dto");
const update_dto_1 = require("./dto/update.dto");
let GanersController = class GanersController {
    constructor(ganersService) {
        this.ganersService = ganersService;
    }
    async create(createGanerDto) {
        return await this.ganersService.create(createGanerDto);
    }
    async findAllGaners(page = 1, limit = 10) {
        return await this.ganersService.findAllGaners({
            page: +page,
            limit: +limit,
        });
    }
    async findAll(defaultId, page = 1, limit = 10) {
        return await this.ganersService.findAll({ page: +page, limit: +limit }, defaultId);
    }
    async findOne(id) {
        return await this.ganersService.findOne(id);
    }
    async update(id, updateGanerDto) {
        return await this.ganersService.update(id, updateGanerDto);
    }
    async delete(id) {
        return await this.ganersService.delete(id);
    }
};
exports.GanersController = GanersController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Post)(''),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_dto_1.CreateGanerDto]),
    __metadata("design:returntype", Promise)
], GanersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], GanersController.prototype, "findAllGaners", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Query)('defaultId')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], GanersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GanersController.prototype, "findOne", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_dto_1.UpdateGanerDto]),
    __metadata("design:returntype", Promise)
], GanersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], GanersController.prototype, "delete", null);
exports.GanersController = GanersController = __decorate([
    (0, common_1.Controller)('ganers'),
    __metadata("design:paramtypes", [ganers_service_1.GanersService])
], GanersController);
//# sourceMappingURL=ganers.controller.js.map