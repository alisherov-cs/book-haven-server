import * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../models";
import { type PrismaClient } from "./class";
export type * from '../models';
export type DMMF = typeof runtime.DMMF;
export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>;
export declare const PrismaClientKnownRequestError: typeof runtime.PrismaClientKnownRequestError;
export type PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError;
export declare const PrismaClientUnknownRequestError: typeof runtime.PrismaClientUnknownRequestError;
export type PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError;
export declare const PrismaClientRustPanicError: typeof runtime.PrismaClientRustPanicError;
export type PrismaClientRustPanicError = runtime.PrismaClientRustPanicError;
export declare const PrismaClientInitializationError: typeof runtime.PrismaClientInitializationError;
export type PrismaClientInitializationError = runtime.PrismaClientInitializationError;
export declare const PrismaClientValidationError: typeof runtime.PrismaClientValidationError;
export type PrismaClientValidationError = runtime.PrismaClientValidationError;
export declare const sql: typeof runtime.sqltag;
export declare const empty: runtime.Sql;
export declare const join: typeof runtime.join;
export declare const raw: typeof runtime.raw;
export declare const Sql: typeof runtime.Sql;
export type Sql = runtime.Sql;
export declare const Decimal: typeof runtime.Decimal;
export type Decimal = runtime.Decimal;
export type DecimalJsLike = runtime.DecimalJsLike;
export type Metrics = runtime.Metrics;
export type Metric<T> = runtime.Metric<T>;
export type MetricHistogram = runtime.MetricHistogram;
export type MetricHistogramBucket = runtime.MetricHistogramBucket;
export type Extension = runtime.Types.Extensions.UserArgs;
export declare const getExtensionContext: typeof runtime.Extensions.getExtensionContext;
export type Args<T, F extends runtime.Operation> = runtime.Types.Public.Args<T, F>;
export type Payload<T, F extends runtime.Operation = never> = runtime.Types.Public.Payload<T, F>;
export type Result<T, A, F extends runtime.Operation> = runtime.Types.Public.Result<T, A, F>;
export type Exact<A, W> = runtime.Types.Public.Exact<A, W>;
export type PrismaVersion = {
    client: string;
    engine: string;
};
export declare const prismaVersion: PrismaVersion;
export type Bytes = runtime.Bytes;
export type JsonObject = runtime.JsonObject;
export type JsonArray = runtime.JsonArray;
export type JsonValue = runtime.JsonValue;
export type InputJsonObject = runtime.InputJsonObject;
export type InputJsonArray = runtime.InputJsonArray;
export type InputJsonValue = runtime.InputJsonValue;
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
type SelectAndInclude = {
    select: any;
    include: any;
};
type SelectAndOmit = {
    select: any;
    omit: any;
};
type Prisma__Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
export type Enumerable<T> = T | Array<T>;
export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
};
export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & (T extends SelectAndInclude ? 'Please either choose `select` or `include`.' : T extends SelectAndOmit ? 'Please either choose `select` or `omit`.' : {});
export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
} & K;
type Without<T, U> = {
    [P in Exclude<keyof T, keyof U>]?: never;
};
export type XOR<T, U> = T extends object ? U extends object ? (Without<T, U> & U) | (Without<U, T> & T) : U : T;
type IsObject<T extends any> = T extends Array<any> ? False : T extends Date ? False : T extends Uint8Array ? False : T extends BigInt ? False : T extends object ? True : False;
export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T;
type __Either<O extends object, K extends Key> = Omit<O, K> & {
    [P in K]: Prisma__Pick<O, P & keyof O>;
}[K];
type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>;
type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>;
type _Either<O extends object, K extends Key, strict extends Boolean> = {
    1: EitherStrict<O, K>;
    0: EitherLoose<O, K>;
}[strict];
export type Either<O extends object, K extends Key, strict extends Boolean = 1> = O extends unknown ? _Either<O, K, strict> : never;
export type Union = any;
export type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K];
} & {};
export type IntersectOf<U extends Union> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;
export type Overwrite<O extends object, O1 extends object> = {
    [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
} & {};
type _Merge<U extends object> = IntersectOf<Overwrite<U, {
    [K in keyof U]-?: At<U, K>;
}>>;
type Key = string | number | symbol;
type AtStrict<O extends object, K extends Key> = O[K & keyof O];
type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
    1: AtStrict<O, K>;
    0: AtLoose<O, K>;
}[strict];
export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
} & {};
export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
} & {};
type _Record<K extends keyof any, T> = {
    [P in K]: T;
};
type NoExpand<T> = T extends unknown ? T : never;
export type AtLeast<O extends object, K extends string> = NoExpand<O extends unknown ? (K extends keyof O ? {
    [P in K]: O[P];
} & O : O) | {
    [P in keyof O as P extends K ? P : never]-?: O[P];
} & O : never>;
type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;
export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;
export type Boolean = True | False;
export type True = 1;
export type False = 0;
export type Not<B extends Boolean> = {
    0: 1;
    1: 0;
}[B];
export type Extends<A1 extends any, A2 extends any> = [A1] extends [never] ? 0 : A1 extends A2 ? 1 : 0;
export type Has<U extends Union, U1 extends Union> = Not<Extends<Exclude<U1, U>, U1>>;
export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
        0: 0;
        1: 1;
    };
    1: {
        0: 1;
        1: 1;
    };
}[B1][B2];
export type Keys<U extends Union> = U extends unknown ? keyof U : never;
export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O ? O[P] : never;
} : never;
type FieldPaths<T, U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>> = IsObject<T> extends True ? U : T;
export type GetHavingFields<T> = {
    [K in keyof T]: Or<Or<Extends<'OR', K>, Extends<'AND', K>>, Extends<'NOT', K>> extends True ? T[K] extends infer TK ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never> : never : {} extends FieldPaths<T[K]> ? never : K;
}[keyof T];
type _TupleToUnion<T> = T extends (infer E)[] ? E : never;
type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>;
export type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T;
export type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>;
export type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T;
export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>;
type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>;
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
export interface TypeMapCb<GlobalOmitOptions = {}> extends runtime.Types.Utils.Fn<{
    extArgs: runtime.Types.Extensions.InternalArgs;
}, runtime.Types.Utils.Record<string, any>> {
    returns: TypeMap<this['params']['extArgs'], GlobalOmitOptions>;
}
export type TypeMap<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
        omit: GlobalOmitOptions;
    };
    meta: {
        modelProps: "user" | "cart" | "wishlist" | "set" | "friend" | "ganer" | "author" | "review" | "book";
        txIsolationLevel: TransactionIsolationLevel;
    };
    model: {
        User: {
            payload: Prisma.$UserPayload<ExtArgs>;
            fields: Prisma.UserFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.UserFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findFirst: {
                    args: Prisma.UserFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                findMany: {
                    args: Prisma.UserFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                create: {
                    args: Prisma.UserCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                createMany: {
                    args: Prisma.UserCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                delete: {
                    args: Prisma.UserDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                update: {
                    args: Prisma.UserUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                deleteMany: {
                    args: Prisma.UserDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.UserUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>[];
                };
                upsert: {
                    args: Prisma.UserUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$UserPayload>;
                };
                aggregate: {
                    args: Prisma.UserAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateUser>;
                };
                groupBy: {
                    args: Prisma.UserGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserGroupByOutputType>[];
                };
                count: {
                    args: Prisma.UserCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.UserCountAggregateOutputType> | number;
                };
            };
        };
        Cart: {
            payload: Prisma.$CartPayload<ExtArgs>;
            fields: Prisma.CartFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.CartFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.CartFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findFirst: {
                    args: Prisma.CartFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.CartFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                findMany: {
                    args: Prisma.CartFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                create: {
                    args: Prisma.CartCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                createMany: {
                    args: Prisma.CartCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.CartCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                delete: {
                    args: Prisma.CartDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                update: {
                    args: Prisma.CartUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                deleteMany: {
                    args: Prisma.CartDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.CartUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.CartUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>[];
                };
                upsert: {
                    args: Prisma.CartUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$CartPayload>;
                };
                aggregate: {
                    args: Prisma.CartAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateCart>;
                };
                groupBy: {
                    args: Prisma.CartGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartGroupByOutputType>[];
                };
                count: {
                    args: Prisma.CartCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.CartCountAggregateOutputType> | number;
                };
            };
        };
        Wishlist: {
            payload: Prisma.$WishlistPayload<ExtArgs>;
            fields: Prisma.WishlistFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.WishlistFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.WishlistFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>;
                };
                findFirst: {
                    args: Prisma.WishlistFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.WishlistFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>;
                };
                findMany: {
                    args: Prisma.WishlistFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>[];
                };
                create: {
                    args: Prisma.WishlistCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>;
                };
                createMany: {
                    args: Prisma.WishlistCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.WishlistCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>[];
                };
                delete: {
                    args: Prisma.WishlistDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>;
                };
                update: {
                    args: Prisma.WishlistUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>;
                };
                deleteMany: {
                    args: Prisma.WishlistDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.WishlistUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.WishlistUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>[];
                };
                upsert: {
                    args: Prisma.WishlistUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$WishlistPayload>;
                };
                aggregate: {
                    args: Prisma.WishlistAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateWishlist>;
                };
                groupBy: {
                    args: Prisma.WishlistGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistGroupByOutputType>[];
                };
                count: {
                    args: Prisma.WishlistCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.WishlistCountAggregateOutputType> | number;
                };
            };
        };
        Set: {
            payload: Prisma.$SetPayload<ExtArgs>;
            fields: Prisma.SetFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.SetFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.SetFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>;
                };
                findFirst: {
                    args: Prisma.SetFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.SetFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>;
                };
                findMany: {
                    args: Prisma.SetFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>[];
                };
                create: {
                    args: Prisma.SetCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>;
                };
                createMany: {
                    args: Prisma.SetCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.SetCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>[];
                };
                delete: {
                    args: Prisma.SetDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>;
                };
                update: {
                    args: Prisma.SetUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>;
                };
                deleteMany: {
                    args: Prisma.SetDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.SetUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.SetUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>[];
                };
                upsert: {
                    args: Prisma.SetUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$SetPayload>;
                };
                aggregate: {
                    args: Prisma.SetAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateSet>;
                };
                groupBy: {
                    args: Prisma.SetGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SetGroupByOutputType>[];
                };
                count: {
                    args: Prisma.SetCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.SetCountAggregateOutputType> | number;
                };
            };
        };
        Friend: {
            payload: Prisma.$FriendPayload<ExtArgs>;
            fields: Prisma.FriendFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.FriendFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.FriendFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>;
                };
                findFirst: {
                    args: Prisma.FriendFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.FriendFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>;
                };
                findMany: {
                    args: Prisma.FriendFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>[];
                };
                create: {
                    args: Prisma.FriendCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>;
                };
                createMany: {
                    args: Prisma.FriendCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.FriendCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>[];
                };
                delete: {
                    args: Prisma.FriendDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>;
                };
                update: {
                    args: Prisma.FriendUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>;
                };
                deleteMany: {
                    args: Prisma.FriendDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.FriendUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.FriendUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>[];
                };
                upsert: {
                    args: Prisma.FriendUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$FriendPayload>;
                };
                aggregate: {
                    args: Prisma.FriendAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateFriend>;
                };
                groupBy: {
                    args: Prisma.FriendGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FriendGroupByOutputType>[];
                };
                count: {
                    args: Prisma.FriendCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.FriendCountAggregateOutputType> | number;
                };
            };
        };
        Ganer: {
            payload: Prisma.$GanerPayload<ExtArgs>;
            fields: Prisma.GanerFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.GanerFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.GanerFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>;
                };
                findFirst: {
                    args: Prisma.GanerFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.GanerFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>;
                };
                findMany: {
                    args: Prisma.GanerFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>[];
                };
                create: {
                    args: Prisma.GanerCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>;
                };
                createMany: {
                    args: Prisma.GanerCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.GanerCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>[];
                };
                delete: {
                    args: Prisma.GanerDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>;
                };
                update: {
                    args: Prisma.GanerUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>;
                };
                deleteMany: {
                    args: Prisma.GanerDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.GanerUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.GanerUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>[];
                };
                upsert: {
                    args: Prisma.GanerUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$GanerPayload>;
                };
                aggregate: {
                    args: Prisma.GanerAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateGaner>;
                };
                groupBy: {
                    args: Prisma.GanerGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GanerGroupByOutputType>[];
                };
                count: {
                    args: Prisma.GanerCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.GanerCountAggregateOutputType> | number;
                };
            };
        };
        Author: {
            payload: Prisma.$AuthorPayload<ExtArgs>;
            fields: Prisma.AuthorFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.AuthorFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.AuthorFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>;
                };
                findFirst: {
                    args: Prisma.AuthorFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.AuthorFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>;
                };
                findMany: {
                    args: Prisma.AuthorFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>[];
                };
                create: {
                    args: Prisma.AuthorCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>;
                };
                createMany: {
                    args: Prisma.AuthorCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.AuthorCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>[];
                };
                delete: {
                    args: Prisma.AuthorDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>;
                };
                update: {
                    args: Prisma.AuthorUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>;
                };
                deleteMany: {
                    args: Prisma.AuthorDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.AuthorUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.AuthorUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>[];
                };
                upsert: {
                    args: Prisma.AuthorUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$AuthorPayload>;
                };
                aggregate: {
                    args: Prisma.AuthorAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateAuthor>;
                };
                groupBy: {
                    args: Prisma.AuthorGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthorGroupByOutputType>[];
                };
                count: {
                    args: Prisma.AuthorCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AuthorCountAggregateOutputType> | number;
                };
            };
        };
        Review: {
            payload: Prisma.$ReviewPayload<ExtArgs>;
            fields: Prisma.ReviewFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.ReviewFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findFirst: {
                    args: Prisma.ReviewFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                findMany: {
                    args: Prisma.ReviewFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                create: {
                    args: Prisma.ReviewCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                createMany: {
                    args: Prisma.ReviewCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                delete: {
                    args: Prisma.ReviewDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                update: {
                    args: Prisma.ReviewUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                deleteMany: {
                    args: Prisma.ReviewDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.ReviewUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>[];
                };
                upsert: {
                    args: Prisma.ReviewUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$ReviewPayload>;
                };
                aggregate: {
                    args: Prisma.ReviewAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateReview>;
                };
                groupBy: {
                    args: Prisma.ReviewGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewGroupByOutputType>[];
                };
                count: {
                    args: Prisma.ReviewCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.ReviewCountAggregateOutputType> | number;
                };
            };
        };
        Book: {
            payload: Prisma.$BookPayload<ExtArgs>;
            fields: Prisma.BookFieldRefs;
            operations: {
                findUnique: {
                    args: Prisma.BookFindUniqueArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload> | null;
                };
                findUniqueOrThrow: {
                    args: Prisma.BookFindUniqueOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                findFirst: {
                    args: Prisma.BookFindFirstArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload> | null;
                };
                findFirstOrThrow: {
                    args: Prisma.BookFindFirstOrThrowArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                findMany: {
                    args: Prisma.BookFindManyArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                create: {
                    args: Prisma.BookCreateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                createMany: {
                    args: Prisma.BookCreateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                createManyAndReturn: {
                    args: Prisma.BookCreateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                delete: {
                    args: Prisma.BookDeleteArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                update: {
                    args: Prisma.BookUpdateArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                deleteMany: {
                    args: Prisma.BookDeleteManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateMany: {
                    args: Prisma.BookUpdateManyArgs<ExtArgs>;
                    result: BatchPayload;
                };
                updateManyAndReturn: {
                    args: Prisma.BookUpdateManyAndReturnArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>[];
                };
                upsert: {
                    args: Prisma.BookUpsertArgs<ExtArgs>;
                    result: runtime.Types.Utils.PayloadToResult<Prisma.$BookPayload>;
                };
                aggregate: {
                    args: Prisma.BookAggregateArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.AggregateBook>;
                };
                groupBy: {
                    args: Prisma.BookGroupByArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookGroupByOutputType>[];
                };
                count: {
                    args: Prisma.BookCountArgs<ExtArgs>;
                    result: runtime.Types.Utils.Optional<Prisma.BookCountAggregateOutputType> | number;
                };
            };
        };
    };
} & {
    other: {
        payload: any;
        operations: {
            $executeRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $executeRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
            $queryRaw: {
                args: [query: TemplateStringsArray | Sql, ...values: any[]];
                result: any;
            };
            $queryRawUnsafe: {
                args: [query: string, ...values: any[]];
                result: any;
            };
        };
    };
};
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
export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>;
export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>;
export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>;
export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>;
export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>;
export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>;
export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>;
export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>;
export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>;
export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>;
export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>;
export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>;
export type BatchPayload = {
    count: number;
};
export type Datasource = {
    url?: string;
};
export type Datasources = {
    db?: Datasource;
};
export declare const defineExtension: runtime.Types.Extensions.ExtendsHook<"define", TypeMapCb, runtime.Types.Extensions.DefaultArgs>;
export type DefaultPrismaClient = PrismaClient;
export type ErrorFormat = 'pretty' | 'colorless' | 'minimal';
export interface PrismaClientOptions {
    datasources?: Datasources;
    datasourceUrl?: string;
    errorFormat?: ErrorFormat;
    log?: (LogLevel | LogDefinition)[];
    transactionOptions?: {
        maxWait?: number;
        timeout?: number;
        isolationLevel?: TransactionIsolationLevel;
    };
    adapter?: runtime.SqlDriverAdapterFactory | null;
    omit?: GlobalOmitConfig;
}
export type GlobalOmitConfig = {
    user?: Prisma.UserOmit;
    cart?: Prisma.CartOmit;
    wishlist?: Prisma.WishlistOmit;
    set?: Prisma.SetOmit;
    friend?: Prisma.FriendOmit;
    ganer?: Prisma.GanerOmit;
    author?: Prisma.AuthorOmit;
    review?: Prisma.ReviewOmit;
    book?: Prisma.BookOmit;
};
export type LogLevel = 'info' | 'query' | 'warn' | 'error';
export type LogDefinition = {
    level: LogLevel;
    emit: 'stdout' | 'event';
};
export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;
export type GetLogType<T> = CheckIsLogLevel<T extends LogDefinition ? T['level'] : T>;
export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition> ? GetLogType<T[number]> : never;
export type QueryEvent = {
    timestamp: Date;
    query: string;
    params: string;
    duration: number;
    target: string;
};
export type LogEvent = {
    timestamp: Date;
    message: string;
    target: string;
};
export type PrismaAction = 'findUnique' | 'findUniqueOrThrow' | 'findMany' | 'findFirst' | 'findFirstOrThrow' | 'create' | 'createMany' | 'createManyAndReturn' | 'update' | 'updateMany' | 'updateManyAndReturn' | 'upsert' | 'delete' | 'deleteMany' | 'executeRaw' | 'queryRaw' | 'aggregate' | 'count' | 'runCommandRaw' | 'findRaw' | 'groupBy';
export type TransactionClient = Omit<DefaultPrismaClient, runtime.ITXClientDenyList>;
