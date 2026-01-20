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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("./users.service");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const createSet_dto_1 = require("./dto/createSet.dto");
const addSet_dto_1 = require("./dto/addSet.dto");
const removeSet_dto_1 = require("./dto/removeSet.dto");
const profileEdit_dto_1 = require("./dto/profileEdit.dto");
let UsersController = class UsersController {
    constructor(usersService) {
        this.usersService = usersService;
    }
    async findAll(page = 1, limit = 10) {
        return await this.usersService.findAll({ page: +page, limit: +limit });
    }
    async findAllWishlists(id, page = 1, limit = 10) {
        return await this.usersService.findAllWishlists(id, {
            page: +page,
            limit: +limit,
        });
    }
    async findAllToFollow(req, page = 1, limit = 10) {
        return await this.usersService.findAllToFollow(req.user, {
            page: +page,
            limit: +limit,
        });
    }
    async getAllFriends(req, page = 1, limit = 10, search) {
        return await this.usersService.getAllFriends(req.user, {
            page: +page,
            limit: +limit,
        }, search);
    }
    async followUser(id, req) {
        return await this.usersService.followUser(req.user, id);
    }
    async unFollowUser(id, req) {
        return await this.usersService.unFollowUser(req.user, id);
    }
    async getAllSets(req, page = 1, limit = 10) {
        return await this.usersService.getAllSets(req.user, {
            page: +page,
            limit: +limit,
        });
    }
    async createSet(req, setDto) {
        return await this.usersService.createSet(req.user, setDto);
    }
    async getSet(id, page = 1, limit = 10) {
        return await this.usersService.getSet(id, {
            page: +page,
            limit: +limit,
        });
    }
    async addBookToSet(req, addSetDto) {
        return await this.usersService.addSet(req.user, addSetDto);
    }
    async removeBookFromSet(req, removeSetDto) {
        return await this.usersService.removeSet(req.user, removeSetDto);
    }
    async editProfile(req, profileEditDto) {
        return await this.usersService.editProfile(req.user, profileEditDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id/wishlist'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllWishlists", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('allToFollow'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "findAllToFollow", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('friends'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Query)('search')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllFriends", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/follow'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "followUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id/unfollow'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "unFollowUser", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('sets'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getAllSets", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('sets'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, createSet_dto_1.CreateSetDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "createSet", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('sets/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Query)('limit', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getSet", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('sets/add'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, addSet_dto_1.AddSetDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "addBookToSet", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('sets/remove'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, removeSet_dto_1.RemoveFromSetDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "removeBookFromSet", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('profile/update'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, profileEdit_dto_1.ProfileEditDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "editProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map