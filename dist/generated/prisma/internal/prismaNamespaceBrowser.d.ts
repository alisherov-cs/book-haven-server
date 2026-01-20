import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models';
export type * from './prismaNamespace';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.objectEnumValues.instances.AnyNull);
};
export declare const DbNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const JsonNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const AnyNull: {
    "__#private@#private": any;
    _getNamespace(): string;
    _getName(): string;
    toString(): string;
};
export declare const ModelName: {
    readonly User: "User";
    readonly Cart: "Cart";
    readonly Wishlist: "Wishlist";
    readonly Set: "Set";
    readonly Friend: "Friend";
    readonly Ganer: "Ganer";
    readonly Author: "Author";
    readonly Review: "Review";
    readonly Book: "Book";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly username: "username";
    readonly password: "password";
    readonly avatar: "avatar";
    readonly role: "role";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const CartScalarFieldEnum: {
    readonly id: "id";
    readonly qnt: "qnt";
    readonly userId: "userId";
    readonly bookId: "bookId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type CartScalarFieldEnum = (typeof CartScalarFieldEnum)[keyof typeof CartScalarFieldEnum];
export declare const WishlistScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly bookId: "bookId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type WishlistScalarFieldEnum = (typeof WishlistScalarFieldEnum)[keyof typeof WishlistScalarFieldEnum];
export declare const SetScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly userId: "userId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type SetScalarFieldEnum = (typeof SetScalarFieldEnum)[keyof typeof SetScalarFieldEnum];
export declare const FriendScalarFieldEnum: {
    readonly id: "id";
    readonly userId: "userId";
    readonly friendId: "friendId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type FriendScalarFieldEnum = (typeof FriendScalarFieldEnum)[keyof typeof FriendScalarFieldEnum];
export declare const GanerScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly slug: "slug";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type GanerScalarFieldEnum = (typeof GanerScalarFieldEnum)[keyof typeof GanerScalarFieldEnum];
export declare const AuthorScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type AuthorScalarFieldEnum = (typeof AuthorScalarFieldEnum)[keyof typeof AuthorScalarFieldEnum];
export declare const ReviewScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly description: "description";
    readonly rating: "rating";
    readonly authorId: "authorId";
    readonly bookId: "bookId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum];
export declare const BookScalarFieldEnum: {
    readonly id: "id";
    readonly image: "image";
    readonly name: "name";
    readonly description: "description";
    readonly rating: "rating";
    readonly price: "price";
    readonly discount: "discount";
    readonly ganerId: "ganerId";
    readonly authorId: "authorId";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type BookScalarFieldEnum = (typeof BookScalarFieldEnum)[keyof typeof BookScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
