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
exports.AuthorsController = void 0;
const common_1 = require("@nestjs/common");
const authors_service_1 = require("./authors.service");
const create_author_dto_1 = require("./dto/create-author.dto");
const update_author_dto_1 = require("./dto/update-author.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const role_guard_1 = require("../auth/guards/role.guard");
const user_dto_1 = require("../auth/dto/user.dto");
let AuthorsController = class AuthorsController {
    constructor(authorsService) {
        this.authorsService = authorsService;
    }
    async create(createAuthorDto) {
        return await this.authorsService.create(createAuthorDto);
    }
    async findAll(page = 1, limit = 10) {
        return await this.authorsService.findAll({ page: +page, limit: +limit });
    }
    async findAllAuthors(page = 1, limit = 10, search) {
        return await this.authorsService.findAllAuthors({
            page: +page,
            limit: +limit,
        }, search);
    }
    async findOne(id) {
        return await this.authorsService.findOne(id);
    }
    async findAuthorBooks(id, page = 1, limit = 10) {
        return await this.authorsService.findAuthorBooks(id, {
            page: +page,
            limit: +limit,
        });
    }
    async update(id, updateAuthorDto) {
        return await this.authorsService.update(id, updateAuthorDto);
    }
    async delete(id) {
        return await this.authorsService.delete(id);
    }
};
exports.AuthorsController = AuthorsController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_author_dto_1.CreateAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('all'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "findAllAuthors", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/books'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "findAuthorBooks", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_author_dto_1.UpdateAuthorDto]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthorsController.prototype, "delete", null);
exports.AuthorsController = AuthorsController = __decorate([
    (0, common_1.Controller)('authors'),
    __metadata("design:paramtypes", [authors_service_1.AuthorsService])
], AuthorsController);
//# sourceMappingURL=authors.controller.js.map