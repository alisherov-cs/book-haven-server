import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type WishlistModel = runtime.Types.Result.DefaultSelection<Prisma.$WishlistPayload>;
export type AggregateWishlist = {
    _count: WishlistCountAggregateOutputType | null;
    _min: WishlistMinAggregateOutputType | null;
    _max: WishlistMaxAggregateOutputType | null;
};
export type WishlistMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bookId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WishlistMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    bookId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type WishlistCountAggregateOutputType = {
    id: number;
    userId: number;
    bookId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type WishlistMinAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WishlistMaxAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type WishlistCountAggregateInputType = {
    id?: true;
    userId?: true;
    bookId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type WishlistAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistWhereInput;
    orderBy?: Prisma.WishlistOrderByWithRelationInput | Prisma.WishlistOrderByWithRelationInput[];
    cursor?: Prisma.WishlistWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | WishlistCountAggregateInputType;
    _min?: WishlistMinAggregateInputType;
    _max?: WishlistMaxAggregateInputType;
};
export type GetWishlistAggregateType<T extends WishlistAggregateArgs> = {
    [P in keyof T & keyof AggregateWishlist]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateWishlist[P]> : Prisma.GetScalarType<T[P], AggregateWishlist[P]>;
};
export type WishlistGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistWhereInput;
    orderBy?: Prisma.WishlistOrderByWithAggregationInput | Prisma.WishlistOrderByWithAggregationInput[];
    by: Prisma.WishlistScalarFieldEnum[] | Prisma.WishlistScalarFieldEnum;
    having?: Prisma.WishlistScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: WishlistCountAggregateInputType | true;
    _min?: WishlistMinAggregateInputType;
    _max?: WishlistMaxAggregateInputType;
};
export type WishlistGroupByOutputType = {
    id: string;
    userId: string;
    bookId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: WishlistCountAggregateOutputType | null;
    _min: WishlistMinAggregateOutputType | null;
    _max: WishlistMaxAggregateOutputType | null;
};
type GetWishlistGroupByPayload<T extends WishlistGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<WishlistGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof WishlistGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], WishlistGroupByOutputType[P]> : Prisma.GetScalarType<T[P], WishlistGroupByOutputType[P]>;
}>>;
export type WishlistWhereInput = {
    AND?: Prisma.WishlistWhereInput | Prisma.WishlistWhereInput[];
    OR?: Prisma.WishlistWhereInput[];
    NOT?: Prisma.WishlistWhereInput | Prisma.WishlistWhereInput[];
    id?: Prisma.StringFilter<"Wishlist"> | string;
    userId?: Prisma.StringFilter<"Wishlist"> | string;
    bookId?: Prisma.StringFilter<"Wishlist"> | string;
    createdAt?: Prisma.DateTimeFilter<"Wishlist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Wishlist"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
};
export type WishlistOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    book?: Prisma.BookOrderByWithRelationInput;
};
export type WishlistWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_bookId?: Prisma.WishlistUserIdBookIdCompoundUniqueInput;
    AND?: Prisma.WishlistWhereInput | Prisma.WishlistWhereInput[];
    OR?: Prisma.WishlistWhereInput[];
    NOT?: Prisma.WishlistWhereInput | Prisma.WishlistWhereInput[];
    userId?: Prisma.StringFilter<"Wishlist"> | string;
    bookId?: Prisma.StringFilter<"Wishlist"> | string;
    createdAt?: Prisma.DateTimeFilter<"Wishlist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Wishlist"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    book?: Prisma.XOR<Prisma.BookScalarRelationFilter, Prisma.BookWhereInput>;
}, "id" | "userId_bookId">;
export type WishlistOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.WishlistCountOrderByAggregateInput;
    _max?: Prisma.WishlistMaxOrderByAggregateInput;
    _min?: Prisma.WishlistMinOrderByAggregateInput;
};
export type WishlistScalarWhereWithAggregatesInput = {
    AND?: Prisma.WishlistScalarWhereWithAggregatesInput | Prisma.WishlistScalarWhereWithAggregatesInput[];
    OR?: Prisma.WishlistScalarWhereWithAggregatesInput[];
    NOT?: Prisma.WishlistScalarWhereWithAggregatesInput | Prisma.WishlistScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Wishlist"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Wishlist"> | string;
    bookId?: Prisma.StringWithAggregatesFilter<"Wishlist"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Wishlist"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Wishlist"> | Date | string;
};
export type WishlistCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWishlistInput;
    book: Prisma.BookCreateNestedOneWithoutWishlistInput;
};
export type WishlistUncheckedCreateInput = {
    id?: string;
    userId: string;
    bookId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WishlistUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWishlistNestedInput;
    book?: Prisma.BookUpdateOneRequiredWithoutWishlistNestedInput;
};
export type WishlistUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistCreateManyInput = {
    id?: string;
    userId: string;
    bookId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WishlistUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistListRelationFilter = {
    every?: Prisma.WishlistWhereInput;
    some?: Prisma.WishlistWhereInput;
    none?: Prisma.WishlistWhereInput;
};
export type WishlistOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type WishlistUserIdBookIdCompoundUniqueInput = {
    userId: string;
    bookId: string;
};
export type WishlistCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WishlistMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WishlistMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    bookId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type WishlistCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutUserInput, Prisma.WishlistUncheckedCreateWithoutUserInput> | Prisma.WishlistCreateWithoutUserInput[] | Prisma.WishlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutUserInput | Prisma.WishlistCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WishlistCreateManyUserInputEnvelope;
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
};
export type WishlistUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutUserInput, Prisma.WishlistUncheckedCreateWithoutUserInput> | Prisma.WishlistCreateWithoutUserInput[] | Prisma.WishlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutUserInput | Prisma.WishlistCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.WishlistCreateManyUserInputEnvelope;
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
};
export type WishlistUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutUserInput, Prisma.WishlistUncheckedCreateWithoutUserInput> | Prisma.WishlistCreateWithoutUserInput[] | Prisma.WishlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutUserInput | Prisma.WishlistCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WishlistUpsertWithWhereUniqueWithoutUserInput | Prisma.WishlistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WishlistCreateManyUserInputEnvelope;
    set?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    disconnect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    delete?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    update?: Prisma.WishlistUpdateWithWhereUniqueWithoutUserInput | Prisma.WishlistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WishlistUpdateManyWithWhereWithoutUserInput | Prisma.WishlistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WishlistScalarWhereInput | Prisma.WishlistScalarWhereInput[];
};
export type WishlistUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutUserInput, Prisma.WishlistUncheckedCreateWithoutUserInput> | Prisma.WishlistCreateWithoutUserInput[] | Prisma.WishlistUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutUserInput | Prisma.WishlistCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.WishlistUpsertWithWhereUniqueWithoutUserInput | Prisma.WishlistUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.WishlistCreateManyUserInputEnvelope;
    set?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    disconnect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    delete?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    update?: Prisma.WishlistUpdateWithWhereUniqueWithoutUserInput | Prisma.WishlistUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.WishlistUpdateManyWithWhereWithoutUserInput | Prisma.WishlistUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.WishlistScalarWhereInput | Prisma.WishlistScalarWhereInput[];
};
export type WishlistCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutBookInput, Prisma.WishlistUncheckedCreateWithoutBookInput> | Prisma.WishlistCreateWithoutBookInput[] | Prisma.WishlistUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutBookInput | Prisma.WishlistCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.WishlistCreateManyBookInputEnvelope;
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
};
export type WishlistUncheckedCreateNestedManyWithoutBookInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutBookInput, Prisma.WishlistUncheckedCreateWithoutBookInput> | Prisma.WishlistCreateWithoutBookInput[] | Prisma.WishlistUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutBookInput | Prisma.WishlistCreateOrConnectWithoutBookInput[];
    createMany?: Prisma.WishlistCreateManyBookInputEnvelope;
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
};
export type WishlistUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutBookInput, Prisma.WishlistUncheckedCreateWithoutBookInput> | Prisma.WishlistCreateWithoutBookInput[] | Prisma.WishlistUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutBookInput | Prisma.WishlistCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.WishlistUpsertWithWhereUniqueWithoutBookInput | Prisma.WishlistUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.WishlistCreateManyBookInputEnvelope;
    set?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    disconnect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    delete?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    update?: Prisma.WishlistUpdateWithWhereUniqueWithoutBookInput | Prisma.WishlistUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.WishlistUpdateManyWithWhereWithoutBookInput | Prisma.WishlistUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.WishlistScalarWhereInput | Prisma.WishlistScalarWhereInput[];
};
export type WishlistUncheckedUpdateManyWithoutBookNestedInput = {
    create?: Prisma.XOR<Prisma.WishlistCreateWithoutBookInput, Prisma.WishlistUncheckedCreateWithoutBookInput> | Prisma.WishlistCreateWithoutBookInput[] | Prisma.WishlistUncheckedCreateWithoutBookInput[];
    connectOrCreate?: Prisma.WishlistCreateOrConnectWithoutBookInput | Prisma.WishlistCreateOrConnectWithoutBookInput[];
    upsert?: Prisma.WishlistUpsertWithWhereUniqueWithoutBookInput | Prisma.WishlistUpsertWithWhereUniqueWithoutBookInput[];
    createMany?: Prisma.WishlistCreateManyBookInputEnvelope;
    set?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    disconnect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    delete?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    connect?: Prisma.WishlistWhereUniqueInput | Prisma.WishlistWhereUniqueInput[];
    update?: Prisma.WishlistUpdateWithWhereUniqueWithoutBookInput | Prisma.WishlistUpdateWithWhereUniqueWithoutBookInput[];
    updateMany?: Prisma.WishlistUpdateManyWithWhereWithoutBookInput | Prisma.WishlistUpdateManyWithWhereWithoutBookInput[];
    deleteMany?: Prisma.WishlistScalarWhereInput | Prisma.WishlistScalarWhereInput[];
};
export type WishlistCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    book: Prisma.BookCreateNestedOneWithoutWishlistInput;
};
export type WishlistUncheckedCreateWithoutUserInput = {
    id?: string;
    bookId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WishlistCreateOrConnectWithoutUserInput = {
    where: Prisma.WishlistWhereUniqueInput;
    create: Prisma.XOR<Prisma.WishlistCreateWithoutUserInput, Prisma.WishlistUncheckedCreateWithoutUserInput>;
};
export type WishlistCreateManyUserInputEnvelope = {
    data: Prisma.WishlistCreateManyUserInput | Prisma.WishlistCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type WishlistUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.WishlistWhereUniqueInput;
    update: Prisma.XOR<Prisma.WishlistUpdateWithoutUserInput, Prisma.WishlistUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.WishlistCreateWithoutUserInput, Prisma.WishlistUncheckedCreateWithoutUserInput>;
};
export type WishlistUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.WishlistWhereUniqueInput;
    data: Prisma.XOR<Prisma.WishlistUpdateWithoutUserInput, Prisma.WishlistUncheckedUpdateWithoutUserInput>;
};
export type WishlistUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.WishlistScalarWhereInput;
    data: Prisma.XOR<Prisma.WishlistUpdateManyMutationInput, Prisma.WishlistUncheckedUpdateManyWithoutUserInput>;
};
export type WishlistScalarWhereInput = {
    AND?: Prisma.WishlistScalarWhereInput | Prisma.WishlistScalarWhereInput[];
    OR?: Prisma.WishlistScalarWhereInput[];
    NOT?: Prisma.WishlistScalarWhereInput | Prisma.WishlistScalarWhereInput[];
    id?: Prisma.StringFilter<"Wishlist"> | string;
    userId?: Prisma.StringFilter<"Wishlist"> | string;
    bookId?: Prisma.StringFilter<"Wishlist"> | string;
    createdAt?: Prisma.DateTimeFilter<"Wishlist"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Wishlist"> | Date | string;
};
export type WishlistCreateWithoutBookInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutWishlistInput;
};
export type WishlistUncheckedCreateWithoutBookInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WishlistCreateOrConnectWithoutBookInput = {
    where: Prisma.WishlistWhereUniqueInput;
    create: Prisma.XOR<Prisma.WishlistCreateWithoutBookInput, Prisma.WishlistUncheckedCreateWithoutBookInput>;
};
export type WishlistCreateManyBookInputEnvelope = {
    data: Prisma.WishlistCreateManyBookInput | Prisma.WishlistCreateManyBookInput[];
    skipDuplicates?: boolean;
};
export type WishlistUpsertWithWhereUniqueWithoutBookInput = {
    where: Prisma.WishlistWhereUniqueInput;
    update: Prisma.XOR<Prisma.WishlistUpdateWithoutBookInput, Prisma.WishlistUncheckedUpdateWithoutBookInput>;
    create: Prisma.XOR<Prisma.WishlistCreateWithoutBookInput, Prisma.WishlistUncheckedCreateWithoutBookInput>;
};
export type WishlistUpdateWithWhereUniqueWithoutBookInput = {
    where: Prisma.WishlistWhereUniqueInput;
    data: Prisma.XOR<Prisma.WishlistUpdateWithoutBookInput, Prisma.WishlistUncheckedUpdateWithoutBookInput>;
};
export type WishlistUpdateManyWithWhereWithoutBookInput = {
    where: Prisma.WishlistScalarWhereInput;
    data: Prisma.XOR<Prisma.WishlistUpdateManyMutationInput, Prisma.WishlistUncheckedUpdateManyWithoutBookInput>;
};
export type WishlistCreateManyUserInput = {
    id?: string;
    bookId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WishlistUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    book?: Prisma.BookUpdateOneRequiredWithoutWishlistNestedInput;
};
export type WishlistUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    bookId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistCreateManyBookInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type WishlistUpdateWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutWishlistNestedInput;
};
export type WishlistUncheckedUpdateWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistUncheckedUpdateManyWithoutBookInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type WishlistSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist"]>;
export type WishlistSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist"]>;
export type WishlistSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["wishlist"]>;
export type WishlistSelectScalar = {
    id?: boolean;
    userId?: boolean;
    bookId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type WishlistOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "bookId" | "createdAt" | "updatedAt", ExtArgs["result"]["wishlist"]>;
export type WishlistInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type WishlistIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type WishlistIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    book?: boolean | Prisma.BookDefaultArgs<ExtArgs>;
};
export type $WishlistPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Wishlist";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        book: Prisma.$BookPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        bookId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["wishlist"]>;
    composites: {};
};
export type WishlistGetPayload<S extends boolean | null | undefined | WishlistDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$WishlistPayload, S>;
export type WishlistCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<WishlistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: WishlistCountAggregateInputType | true;
};
export interface WishlistDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Wishlist'];
        meta: {
            name: 'Wishlist';
        };
    };
    findUnique<T extends WishlistFindUniqueArgs>(args: Prisma.SelectSubset<T, WishlistFindUniqueArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends WishlistFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, WishlistFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends WishlistFindFirstArgs>(args?: Prisma.SelectSubset<T, WishlistFindFirstArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends WishlistFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, WishlistFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends WishlistFindManyArgs>(args?: Prisma.SelectSubset<T, WishlistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends WishlistCreateArgs>(args: Prisma.SelectSubset<T, WishlistCreateArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends WishlistCreateManyArgs>(args?: Prisma.SelectSubset<T, WishlistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends WishlistCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, WishlistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends WishlistDeleteArgs>(args: Prisma.SelectSubset<T, WishlistDeleteArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends WishlistUpdateArgs>(args: Prisma.SelectSubset<T, WishlistUpdateArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends WishlistDeleteManyArgs>(args?: Prisma.SelectSubset<T, WishlistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends WishlistUpdateManyArgs>(args: Prisma.SelectSubset<T, WishlistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends WishlistUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, WishlistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends WishlistUpsertArgs>(args: Prisma.SelectSubset<T, WishlistUpsertArgs<ExtArgs>>): Prisma.Prisma__WishlistClient<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends WishlistCountArgs>(args?: Prisma.Subset<T, WishlistCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], WishlistCountAggregateOutputType> : number>;
    aggregate<T extends WishlistAggregateArgs>(args: Prisma.Subset<T, WishlistAggregateArgs>): Prisma.PrismaPromise<GetWishlistAggregateType<T>>;
    groupBy<T extends WishlistGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: WishlistGroupByArgs['orderBy'];
    } : {
        orderBy?: WishlistGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, WishlistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWishlistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: WishlistFieldRefs;
}
export interface Prisma__WishlistClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    book<T extends Prisma.BookDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.BookDefaultArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface WishlistFieldRefs {
    readonly id: Prisma.FieldRef<"Wishlist", 'String'>;
    readonly userId: Prisma.FieldRef<"Wishlist", 'String'>;
    readonly bookId: Prisma.FieldRef<"Wishlist", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Wishlist", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Wishlist", 'DateTime'>;
}
export type WishlistFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where: Prisma.WishlistWhereUniqueInput;
};
export type WishlistFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where: Prisma.WishlistWhereUniqueInput;
};
export type WishlistFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where?: Prisma.WishlistWhereInput;
    orderBy?: Prisma.WishlistOrderByWithRelationInput | Prisma.WishlistOrderByWithRelationInput[];
    cursor?: Prisma.WishlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistScalarFieldEnum | Prisma.WishlistScalarFieldEnum[];
};
export type WishlistFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where?: Prisma.WishlistWhereInput;
    orderBy?: Prisma.WishlistOrderByWithRelationInput | Prisma.WishlistOrderByWithRelationInput[];
    cursor?: Prisma.WishlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistScalarFieldEnum | Prisma.WishlistScalarFieldEnum[];
};
export type WishlistFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where?: Prisma.WishlistWhereInput;
    orderBy?: Prisma.WishlistOrderByWithRelationInput | Prisma.WishlistOrderByWithRelationInput[];
    cursor?: Prisma.WishlistWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.WishlistScalarFieldEnum | Prisma.WishlistScalarFieldEnum[];
};
export type WishlistCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WishlistCreateInput, Prisma.WishlistUncheckedCreateInput>;
};
export type WishlistCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.WishlistCreateManyInput | Prisma.WishlistCreateManyInput[];
    skipDuplicates?: boolean;
};
export type WishlistCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    data: Prisma.WishlistCreateManyInput | Prisma.WishlistCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.WishlistIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type WishlistUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WishlistUpdateInput, Prisma.WishlistUncheckedUpdateInput>;
    where: Prisma.WishlistWhereUniqueInput;
};
export type WishlistUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.WishlistUpdateManyMutationInput, Prisma.WishlistUncheckedUpdateManyInput>;
    where?: Prisma.WishlistWhereInput;
    limit?: number;
};
export type WishlistUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.WishlistUpdateManyMutationInput, Prisma.WishlistUncheckedUpdateManyInput>;
    where?: Prisma.WishlistWhereInput;
    limit?: number;
    include?: Prisma.WishlistIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type WishlistUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where: Prisma.WishlistWhereUniqueInput;
    create: Prisma.XOR<Prisma.WishlistCreateInput, Prisma.WishlistUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.WishlistUpdateInput, Prisma.WishlistUncheckedUpdateInput>;
};
export type WishlistDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
    where: Prisma.WishlistWhereUniqueInput;
};
export type WishlistDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistWhereInput;
    limit?: number;
};
export type WishlistDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.WishlistSelect<ExtArgs> | null;
    omit?: Prisma.WishlistOmit<ExtArgs> | null;
    include?: Prisma.WishlistInclude<ExtArgs> | null;
};
export {};
