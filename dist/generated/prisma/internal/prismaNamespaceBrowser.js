"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NullsOrder = exports.QueryMode = exports.SortOrder = exports.BookScalarFieldEnum = exports.ReviewScalarFieldEnum = exports.AuthorScalarFieldEnum = exports.GanerScalarFieldEnum = exports.FriendScalarFieldEnum = exports.SetScalarFieldEnum = exports.WishlistScalarFieldEnum = exports.CartScalarFieldEnum = exports.UserScalarFieldEnum = exports.TransactionIsolationLevel = exports.ModelName = exports.AnyNull = exports.JsonNull = exports.DbNull = exports.NullTypes = exports.Decimal = void 0;
const runtime = require("@prisma/client/runtime/index-browser");
exports.Decimal = runtime.Decimal;
exports.NullTypes = {
    DbNull: runtime.objectEnumValues.classes.DbNull,
    JsonNull: runtime.objectEnumValues.classes.JsonNull,
    AnyNull: runtime.objectEnumValues.classes.AnyNull,
};
exports.DbNull = runtime.objectEnumValues.instances.DbNull;
exports.JsonNull = runtime.objectEnumValues.instances.JsonNull;
exports.AnyNull = runtime.objectEnumValues.instances.AnyNull;
exports.ModelName = {
    User: 'User',
    Cart: 'Cart',
    Wishlist: 'Wishlist',
    Set: 'Set',
    Friend: 'Friend',
    Ganer: 'Ganer',
    Author: 'Author',
    Review: 'Review',
    Book: 'Book'
};
exports.TransactionIsolationLevel = runtime.makeStrictEnum({
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
});
exports.UserScalarFieldEnum = {
    id: 'id',
    username: 'username',
    password: 'password',
    avatar: 'avatar',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.CartScalarFieldEnum = {
    id: 'id',
    qnt: 'qnt',
    userId: 'userId',
    bookId: 'bookId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.WishlistScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    bookId: 'bookId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SetScalarFieldEnum = {
    id: 'id',
    title: 'title',
    userId: 'userId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.FriendScalarFieldEnum = {
    id: 'id',
    userId: 'userId',
    friendId: 'friendId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.GanerScalarFieldEnum = {
    id: 'id',
    name: 'name',
    slug: 'slug',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.AuthorScalarFieldEnum = {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.ReviewScalarFieldEnum = {
    id: 'id',
    title: 'title',
    description: 'description',
    rating: 'rating',
    authorId: 'authorId',
    bookId: 'bookId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.BookScalarFieldEnum = {
    id: 'id',
    image: 'image',
    name: 'name',
    description: 'description',
    rating: 'rating',
    price: 'price',
    discount: 'discount',
    ganerId: 'ganerId',
    authorId: 'authorId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
};
exports.SortOrder = {
    asc: 'asc',
    desc: 'desc'
};
exports.QueryMode = {
    default: 'default',
    insensitive: 'insensitive'
};
exports.NullsOrder = {
    first: 'first',
    last: 'last'
};
//# sourceMappingURL=prismaNamespaceBrowser.js.map