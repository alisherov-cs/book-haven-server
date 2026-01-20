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
exports.BooksController = void 0;
const common_1 = require("@nestjs/common");
const books_service_1 = require("./books.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const role_guard_1 = require("../auth/guards/role.guard");
const user_dto_1 = require("../auth/dto/user.dto");
const review_dto_1 = require("./dto/review.dto");
const wishlist_dto_1 = require("./dto/wishlist.dto");
let BooksController = class BooksController {
    constructor(booksService) {
        this.booksService = booksService;
    }
    create(createBookDto) {
        return this.booksService.create(createBookDto);
    }
    findAll(page = 1, limit = 10, search, authors, ganers, ratings, priceFrom = 0, priceTo = 1000) {
        return this.booksService.findAll({ page: +page, limit: +limit }, {
            authors,
            ganers,
            ratings,
            priceFrom,
            priceTo,
        }, search);
    }
    async getAllWishlists(page = 1, limit = 10, req) {
        return await this.booksService.getAllWishlists(req.user, {
            page: +page,
            limit: +limit,
        });
    }
    async removeAllFromWishlist(req, removeDto) {
        return await this.booksService.removeAllFromWishlist(req.user, removeDto);
    }
    async getAllCarts(page = 1, limit = 10, req) {
        return await this.booksService.getAllCarts(req.user, {
            page: +page,
            limit: +limit,
        });
    }
    async removeAllFromCart(req, removeDto) {
        return await this.booksService.removeAllFromCart(req.user, removeDto);
    }
    findOne(id) {
        return this.booksService.findOne(id);
    }
    getReviews(id, page = 1, limit = 10) {
        return this.booksService.getReviews(id, { page: +page, limit: +limit });
    }
    addReview(req, id, addReviewDto) {
        return this.booksService.addReview(id, addReviewDto, req.user);
    }
    async getCart(id, req) {
        return await this.booksService.getCart(id, req.user);
    }
    async addToCart(id, req) {
        return await this.booksService.addToCart(id, req.user);
    }
    async removeFromCart(id, req) {
        return await this.booksService.removeFromCart(id, req.user);
    }
    async incrementCart(id, req) {
        return await this.booksService.incrementCart(id, req.user);
    }
    async decrementCart(id, req) {
        return await this.booksService.decrementCart(id, req.user);
    }
    async getWishlist(id, req) {
        return await this.booksService.getWishlist(id, req.user);
    }
    async addToWishlist(id, req) {
        return await this.booksService.addToWishlist(id, req.user);
    }
    async removeFromWishlist(id, req) {
        return await this.booksService.removeFromWishlist(id, req.user);
    }
    update(id, updateBookDto) {
        return this.booksService.update(id, updateBookDto);
    }
    async delete(id) {
        return await this.booksService.delete(id);
    }
};
exports.BooksController = BooksController;
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Query)('search')),
    __param(3, (0, common_1.Query)('authors', new common_1.DefaultValuePipe([]), new common_1.ParseArrayPipe({ items: String, separator: ',' }))),
    __param(4, (0, common_1.Query)('ganers', new common_1.DefaultValuePipe([]), new common_1.ParseArrayPipe({ items: String, separator: ',' }))),
    __param(5, (0, common_1.Query)('ratings', new common_1.DefaultValuePipe([]), new common_1.ParseArrayPipe({ items: String, separator: ',' }))),
    __param(6, (0, common_1.Query)('priceFrom', new common_1.DefaultValuePipe(0), new common_1.ParseIntPipe())),
    __param(7, (0, common_1.Query)('priceTo', new common_1.DefaultValuePipe(1000), new common_1.ParseIntPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, String, Array, Array, Array, Object, Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findAll", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('wishlist'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getAllWishlists", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('wishlist/remove'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, wishlist_dto_1.RemoveAllFromWishlistDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "removeAllFromWishlist", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)('cart'),
    __param(0, (0, common_1.Query)('page')),
    __param(1, (0, common_1.Query)('limit')),
    __param(2, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getAllCarts", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('cart/remove'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, wishlist_dto_1.RemoveAllFromWishlistDto]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "removeAllFromCart", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(':id/review'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Query)('page')),
    __param(2, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, Object]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "getReviews", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/review'),
    __param(0, (0, common_1.Request)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, review_dto_1.AddReviewDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "addReview", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id/cart'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getCart", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/cart'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "addToCart", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id/cart'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "removeFromCart", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/cart/increment'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "incrementCart", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/cart/decrement'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "decrementCart", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Get)(':id/wishlist'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "getWishlist", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)(':id/wishlist'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "addToWishlist", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)(':id/wishlist'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Request)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "removeFromWishlist", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", void 0)
], BooksController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard, role_guard_1.RolesGuard),
    (0, role_guard_1.Roles)(user_dto_1.Role.admin),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BooksController.prototype, "delete", null);
exports.BooksController = BooksController = __decorate([
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [books_service_1.BooksService])
], BooksController);
//# sourceMappingURL=books.controller.js.map