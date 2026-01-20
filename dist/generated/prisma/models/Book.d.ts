import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type BookModel = runtime.Types.Result.DefaultSelection<Prisma.$BookPayload>;
export type AggregateBook = {
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
export type BookAvgAggregateOutputType = {
    rating: number | null;
    price: runtime.Decimal | null;
    discount: number | null;
};
export type BookSumAggregateOutputType = {
    rating: number | null;
    price: runtime.Decimal | null;
    discount: number | null;
};
export type BookMinAggregateOutputType = {
    id: string | null;
    image: string | null;
    name: string | null;
    description: string | null;
    rating: number | null;
    price: runtime.Decimal | null;
    discount: number | null;
    ganerId: string | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookMaxAggregateOutputType = {
    id: string | null;
    image: string | null;
    name: string | null;
    description: string | null;
    rating: number | null;
    price: runtime.Decimal | null;
    discount: number | null;
    ganerId: string | null;
    authorId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type BookCountAggregateOutputType = {
    id: number;
    image: number;
    name: number;
    description: number;
    rating: number;
    price: number;
    discount: number;
    ganerId: number;
    authorId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type BookAvgAggregateInputType = {
    rating?: true;
    price?: true;
    discount?: true;
};
export type BookSumAggregateInputType = {
    rating?: true;
    price?: true;
    discount?: true;
};
export type BookMinAggregateInputType = {
    id?: true;
    image?: true;
    name?: true;
    description?: true;
    rating?: true;
    price?: true;
    discount?: true;
    ganerId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookMaxAggregateInputType = {
    id?: true;
    image?: true;
    name?: true;
    description?: true;
    rating?: true;
    price?: true;
    discount?: true;
    ganerId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type BookCountAggregateInputType = {
    id?: true;
    image?: true;
    name?: true;
    description?: true;
    rating?: true;
    price?: true;
    discount?: true;
    ganerId?: true;
    authorId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type BookAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | BookCountAggregateInputType;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type GetBookAggregateType<T extends BookAggregateArgs> = {
    [P in keyof T & keyof AggregateBook]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateBook[P]> : Prisma.GetScalarType<T[P], AggregateBook[P]>;
};
export type BookGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithAggregationInput | Prisma.BookOrderByWithAggregationInput[];
    by: Prisma.BookScalarFieldEnum[] | Prisma.BookScalarFieldEnum;
    having?: Prisma.BookScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: BookCountAggregateInputType | true;
    _avg?: BookAvgAggregateInputType;
    _sum?: BookSumAggregateInputType;
    _min?: BookMinAggregateInputType;
    _max?: BookMaxAggregateInputType;
};
export type BookGroupByOutputType = {
    id: string;
    image: string;
    name: string;
    description: string;
    rating: number;
    price: runtime.Decimal;
    discount: number | null;
    ganerId: string;
    authorId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: BookCountAggregateOutputType | null;
    _avg: BookAvgAggregateOutputType | null;
    _sum: BookSumAggregateOutputType | null;
    _min: BookMinAggregateOutputType | null;
    _max: BookMaxAggregateOutputType | null;
};
type GetBookGroupByPayload<T extends BookGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<BookGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof BookGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]> : Prisma.GetScalarType<T[P], BookGroupByOutputType[P]>;
}>>;
export type BookWhereInput = {
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    id?: Prisma.StringFilter<"Book"> | string;
    image?: Prisma.StringFilter<"Book"> | string;
    name?: Prisma.StringFilter<"Book"> | string;
    description?: Prisma.StringFilter<"Book"> | string;
    rating?: Prisma.IntFilter<"Book"> | number;
    price?: Prisma.DecimalFilter<"Book"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.IntNullableFilter<"Book"> | number | null;
    ganerId?: Prisma.StringFilter<"Book"> | string;
    authorId?: Prisma.StringFilter<"Book"> | string;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    ganer?: Prisma.XOR<Prisma.GanerScalarRelationFilter, Prisma.GanerWhereInput>;
    author?: Prisma.XOR<Prisma.AuthorScalarRelationFilter, Prisma.AuthorWhereInput>;
    reviews?: Prisma.ReviewListRelationFilter;
    cart?: Prisma.CartListRelationFilter;
    wishlist?: Prisma.WishlistListRelationFilter;
    sets?: Prisma.SetListRelationFilter;
};
export type BookOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    ganerId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    ganer?: Prisma.GanerOrderByWithRelationInput;
    author?: Prisma.AuthorOrderByWithRelationInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    cart?: Prisma.CartOrderByRelationAggregateInput;
    wishlist?: Prisma.WishlistOrderByRelationAggregateInput;
    sets?: Prisma.SetOrderByRelationAggregateInput;
};
export type BookWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    OR?: Prisma.BookWhereInput[];
    NOT?: Prisma.BookWhereInput | Prisma.BookWhereInput[];
    image?: Prisma.StringFilter<"Book"> | string;
    name?: Prisma.StringFilter<"Book"> | string;
    description?: Prisma.StringFilter<"Book"> | string;
    rating?: Prisma.IntFilter<"Book"> | number;
    price?: Prisma.DecimalFilter<"Book"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.IntNullableFilter<"Book"> | number | null;
    ganerId?: Prisma.StringFilter<"Book"> | string;
    authorId?: Prisma.StringFilter<"Book"> | string;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    ganer?: Prisma.XOR<Prisma.GanerScalarRelationFilter, Prisma.GanerWhereInput>;
    author?: Prisma.XOR<Prisma.AuthorScalarRelationFilter, Prisma.AuthorWhereInput>;
    reviews?: Prisma.ReviewListRelationFilter;
    cart?: Prisma.CartListRelationFilter;
    wishlist?: Prisma.WishlistListRelationFilter;
    sets?: Prisma.SetListRelationFilter;
}, "id">;
export type BookOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrderInput | Prisma.SortOrder;
    ganerId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.BookCountOrderByAggregateInput;
    _avg?: Prisma.BookAvgOrderByAggregateInput;
    _max?: Prisma.BookMaxOrderByAggregateInput;
    _min?: Prisma.BookMinOrderByAggregateInput;
    _sum?: Prisma.BookSumOrderByAggregateInput;
};
export type BookScalarWhereWithAggregatesInput = {
    AND?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    OR?: Prisma.BookScalarWhereWithAggregatesInput[];
    NOT?: Prisma.BookScalarWhereWithAggregatesInput | Prisma.BookScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    image?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    description?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    rating?: Prisma.IntWithAggregatesFilter<"Book"> | number;
    price?: Prisma.DecimalWithAggregatesFilter<"Book"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.IntNullableWithAggregatesFilter<"Book"> | number | null;
    ganerId?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    authorId?: Prisma.StringWithAggregatesFilter<"Book"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Book"> | Date | string;
};
export type BookCreateInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ganer: Prisma.GanerCreateNestedOneWithoutBooksInput;
    author: Prisma.AuthorCreateNestedOneWithoutBooksInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetCreateNestedManyWithoutBooksInput;
};
export type BookUncheckedCreateInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutBooksInput;
};
export type BookUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ganer?: Prisma.GanerUpdateOneRequiredWithoutBooksNestedInput;
    author?: Prisma.AuthorUpdateOneRequiredWithoutBooksNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutBooksNestedInput;
};
export type BookCreateManyInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookScalarRelationFilter = {
    is?: Prisma.BookWhereInput;
    isNot?: Prisma.BookWhereInput;
};
export type BookListRelationFilter = {
    every?: Prisma.BookWhereInput;
    some?: Prisma.BookWhereInput;
    none?: Prisma.BookWhereInput;
};
export type BookOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type BookCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    ganerId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookAvgOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
};
export type BookMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    ganerId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    rating?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
    ganerId?: Prisma.SortOrder;
    authorId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type BookSumOrderByAggregateInput = {
    rating?: Prisma.SortOrder;
    price?: Prisma.SortOrder;
    discount?: Prisma.SortOrder;
};
export type BookCreateNestedOneWithoutCartInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCartInput, Prisma.BookUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCartInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutCartInput, Prisma.BookUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutCartInput;
    upsert?: Prisma.BookUpsertWithoutCartInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutCartInput, Prisma.BookUpdateWithoutCartInput>, Prisma.BookUncheckedUpdateWithoutCartInput>;
};
export type BookCreateNestedOneWithoutWishlistInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutWishlistInput, Prisma.BookUncheckedCreateWithoutWishlistInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutWishlistInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutWishlistInput, Prisma.BookUncheckedCreateWithoutWishlistInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutWishlistInput;
    upsert?: Prisma.BookUpsertWithoutWishlistInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutWishlistInput, Prisma.BookUpdateWithoutWishlistInput>, Prisma.BookUncheckedUpdateWithoutWishlistInput>;
};
export type BookCreateNestedManyWithoutSetsInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSetsInput, Prisma.BookUncheckedCreateWithoutSetsInput> | Prisma.BookCreateWithoutSetsInput[] | Prisma.BookUncheckedCreateWithoutSetsInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSetsInput | Prisma.BookCreateOrConnectWithoutSetsInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutSetsInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSetsInput, Prisma.BookUncheckedCreateWithoutSetsInput> | Prisma.BookCreateWithoutSetsInput[] | Prisma.BookUncheckedCreateWithoutSetsInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSetsInput | Prisma.BookCreateOrConnectWithoutSetsInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutSetsNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSetsInput, Prisma.BookUncheckedCreateWithoutSetsInput> | Prisma.BookCreateWithoutSetsInput[] | Prisma.BookUncheckedCreateWithoutSetsInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSetsInput | Prisma.BookCreateOrConnectWithoutSetsInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutSetsInput | Prisma.BookUpsertWithWhereUniqueWithoutSetsInput[];
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutSetsInput | Prisma.BookUpdateWithWhereUniqueWithoutSetsInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutSetsInput | Prisma.BookUpdateManyWithWhereWithoutSetsInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutSetsNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutSetsInput, Prisma.BookUncheckedCreateWithoutSetsInput> | Prisma.BookCreateWithoutSetsInput[] | Prisma.BookUncheckedCreateWithoutSetsInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutSetsInput | Prisma.BookCreateOrConnectWithoutSetsInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutSetsInput | Prisma.BookUpsertWithWhereUniqueWithoutSetsInput[];
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutSetsInput | Prisma.BookUpdateWithWhereUniqueWithoutSetsInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutSetsInput | Prisma.BookUpdateManyWithWhereWithoutSetsInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreateNestedManyWithoutGanerInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGanerInput, Prisma.BookUncheckedCreateWithoutGanerInput> | Prisma.BookCreateWithoutGanerInput[] | Prisma.BookUncheckedCreateWithoutGanerInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGanerInput | Prisma.BookCreateOrConnectWithoutGanerInput[];
    createMany?: Prisma.BookCreateManyGanerInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutGanerInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGanerInput, Prisma.BookUncheckedCreateWithoutGanerInput> | Prisma.BookCreateWithoutGanerInput[] | Prisma.BookUncheckedCreateWithoutGanerInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGanerInput | Prisma.BookCreateOrConnectWithoutGanerInput[];
    createMany?: Prisma.BookCreateManyGanerInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutGanerNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGanerInput, Prisma.BookUncheckedCreateWithoutGanerInput> | Prisma.BookCreateWithoutGanerInput[] | Prisma.BookUncheckedCreateWithoutGanerInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGanerInput | Prisma.BookCreateOrConnectWithoutGanerInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutGanerInput | Prisma.BookUpsertWithWhereUniqueWithoutGanerInput[];
    createMany?: Prisma.BookCreateManyGanerInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutGanerInput | Prisma.BookUpdateWithWhereUniqueWithoutGanerInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutGanerInput | Prisma.BookUpdateManyWithWhereWithoutGanerInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutGanerNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutGanerInput, Prisma.BookUncheckedCreateWithoutGanerInput> | Prisma.BookCreateWithoutGanerInput[] | Prisma.BookUncheckedCreateWithoutGanerInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutGanerInput | Prisma.BookCreateOrConnectWithoutGanerInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutGanerInput | Prisma.BookUpsertWithWhereUniqueWithoutGanerInput[];
    createMany?: Prisma.BookCreateManyGanerInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutGanerInput | Prisma.BookUpdateWithWhereUniqueWithoutGanerInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutGanerInput | Prisma.BookUpdateManyWithWhereWithoutGanerInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorInput, Prisma.BookUncheckedCreateWithoutAuthorInput> | Prisma.BookCreateWithoutAuthorInput[] | Prisma.BookUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorInput | Prisma.BookCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BookCreateManyAuthorInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUncheckedCreateNestedManyWithoutAuthorInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorInput, Prisma.BookUncheckedCreateWithoutAuthorInput> | Prisma.BookCreateWithoutAuthorInput[] | Prisma.BookUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorInput | Prisma.BookCreateOrConnectWithoutAuthorInput[];
    createMany?: Prisma.BookCreateManyAuthorInputEnvelope;
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
};
export type BookUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorInput, Prisma.BookUncheckedCreateWithoutAuthorInput> | Prisma.BookCreateWithoutAuthorInput[] | Prisma.BookUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorInput | Prisma.BookCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BookUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BookCreateManyAuthorInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BookUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutAuthorInput | Prisma.BookUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookUncheckedUpdateManyWithoutAuthorNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutAuthorInput, Prisma.BookUncheckedCreateWithoutAuthorInput> | Prisma.BookCreateWithoutAuthorInput[] | Prisma.BookUncheckedCreateWithoutAuthorInput[];
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutAuthorInput | Prisma.BookCreateOrConnectWithoutAuthorInput[];
    upsert?: Prisma.BookUpsertWithWhereUniqueWithoutAuthorInput | Prisma.BookUpsertWithWhereUniqueWithoutAuthorInput[];
    createMany?: Prisma.BookCreateManyAuthorInputEnvelope;
    set?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    disconnect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    delete?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    connect?: Prisma.BookWhereUniqueInput | Prisma.BookWhereUniqueInput[];
    update?: Prisma.BookUpdateWithWhereUniqueWithoutAuthorInput | Prisma.BookUpdateWithWhereUniqueWithoutAuthorInput[];
    updateMany?: Prisma.BookUpdateManyWithWhereWithoutAuthorInput | Prisma.BookUpdateManyWithWhereWithoutAuthorInput[];
    deleteMany?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
};
export type BookCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.BookWhereUniqueInput;
};
export type BookUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.BookCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.BookUpsertWithoutReviewsInput;
    connect?: Prisma.BookWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.BookUpdateToOneWithWhereWithoutReviewsInput, Prisma.BookUpdateWithoutReviewsInput>, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
};
export type DecimalFieldUpdateOperationsInput = {
    set?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    increment?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    decrement?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    multiply?: runtime.Decimal | runtime.DecimalJsLike | number | string;
    divide?: runtime.Decimal | runtime.DecimalJsLike | number | string;
};
export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type BookCreateWithoutCartInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ganer: Prisma.GanerCreateNestedOneWithoutBooksInput;
    author: Prisma.AuthorCreateNestedOneWithoutBooksInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetCreateNestedManyWithoutBooksInput;
};
export type BookUncheckedCreateWithoutCartInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutBooksInput;
};
export type BookCreateOrConnectWithoutCartInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutCartInput, Prisma.BookUncheckedCreateWithoutCartInput>;
};
export type BookUpsertWithoutCartInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutCartInput, Prisma.BookUncheckedUpdateWithoutCartInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutCartInput, Prisma.BookUncheckedCreateWithoutCartInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutCartInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutCartInput, Prisma.BookUncheckedUpdateWithoutCartInput>;
};
export type BookUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ganer?: Prisma.GanerUpdateOneRequiredWithoutBooksNestedInput;
    author?: Prisma.AuthorUpdateOneRequiredWithoutBooksNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutBooksNestedInput;
};
export type BookCreateWithoutWishlistInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ganer: Prisma.GanerCreateNestedOneWithoutBooksInput;
    author: Prisma.AuthorCreateNestedOneWithoutBooksInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetCreateNestedManyWithoutBooksInput;
};
export type BookUncheckedCreateWithoutWishlistInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutBooksInput;
};
export type BookCreateOrConnectWithoutWishlistInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutWishlistInput, Prisma.BookUncheckedCreateWithoutWishlistInput>;
};
export type BookUpsertWithoutWishlistInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutWishlistInput, Prisma.BookUncheckedUpdateWithoutWishlistInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutWishlistInput, Prisma.BookUncheckedCreateWithoutWishlistInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutWishlistInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutWishlistInput, Prisma.BookUncheckedUpdateWithoutWishlistInput>;
};
export type BookUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ganer?: Prisma.GanerUpdateOneRequiredWithoutBooksNestedInput;
    author?: Prisma.AuthorUpdateOneRequiredWithoutBooksNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutBooksNestedInput;
};
export type BookCreateWithoutSetsInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ganer: Prisma.GanerCreateNestedOneWithoutBooksInput;
    author: Prisma.AuthorCreateNestedOneWithoutBooksInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutBookInput;
};
export type BookUncheckedCreateWithoutSetsInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutBookInput;
};
export type BookCreateOrConnectWithoutSetsInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutSetsInput, Prisma.BookUncheckedCreateWithoutSetsInput>;
};
export type BookUpsertWithWhereUniqueWithoutSetsInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutSetsInput, Prisma.BookUncheckedUpdateWithoutSetsInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutSetsInput, Prisma.BookUncheckedCreateWithoutSetsInput>;
};
export type BookUpdateWithWhereUniqueWithoutSetsInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutSetsInput, Prisma.BookUncheckedUpdateWithoutSetsInput>;
};
export type BookUpdateManyWithWhereWithoutSetsInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutSetsInput>;
};
export type BookScalarWhereInput = {
    AND?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    OR?: Prisma.BookScalarWhereInput[];
    NOT?: Prisma.BookScalarWhereInput | Prisma.BookScalarWhereInput[];
    id?: Prisma.StringFilter<"Book"> | string;
    image?: Prisma.StringFilter<"Book"> | string;
    name?: Prisma.StringFilter<"Book"> | string;
    description?: Prisma.StringFilter<"Book"> | string;
    rating?: Prisma.IntFilter<"Book"> | number;
    price?: Prisma.DecimalFilter<"Book"> | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.IntNullableFilter<"Book"> | number | null;
    ganerId?: Prisma.StringFilter<"Book"> | string;
    authorId?: Prisma.StringFilter<"Book"> | string;
    createdAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Book"> | Date | string;
};
export type BookCreateWithoutGanerInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    author: Prisma.AuthorCreateNestedOneWithoutBooksInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetCreateNestedManyWithoutBooksInput;
};
export type BookUncheckedCreateWithoutGanerInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutBooksInput;
};
export type BookCreateOrConnectWithoutGanerInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutGanerInput, Prisma.BookUncheckedCreateWithoutGanerInput>;
};
export type BookCreateManyGanerInputEnvelope = {
    data: Prisma.BookCreateManyGanerInput | Prisma.BookCreateManyGanerInput[];
    skipDuplicates?: boolean;
};
export type BookUpsertWithWhereUniqueWithoutGanerInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutGanerInput, Prisma.BookUncheckedUpdateWithoutGanerInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutGanerInput, Prisma.BookUncheckedCreateWithoutGanerInput>;
};
export type BookUpdateWithWhereUniqueWithoutGanerInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutGanerInput, Prisma.BookUncheckedUpdateWithoutGanerInput>;
};
export type BookUpdateManyWithWhereWithoutGanerInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutGanerInput>;
};
export type BookCreateWithoutAuthorInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ganer: Prisma.GanerCreateNestedOneWithoutBooksInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetCreateNestedManyWithoutBooksInput;
};
export type BookUncheckedCreateWithoutAuthorInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutBookInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutBooksInput;
};
export type BookCreateOrConnectWithoutAuthorInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutAuthorInput, Prisma.BookUncheckedCreateWithoutAuthorInput>;
};
export type BookCreateManyAuthorInputEnvelope = {
    data: Prisma.BookCreateManyAuthorInput | Prisma.BookCreateManyAuthorInput[];
    skipDuplicates?: boolean;
};
export type BookUpsertWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BookWhereUniqueInput;
    update: Prisma.XOR<Prisma.BookUpdateWithoutAuthorInput, Prisma.BookUncheckedUpdateWithoutAuthorInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutAuthorInput, Prisma.BookUncheckedCreateWithoutAuthorInput>;
};
export type BookUpdateWithWhereUniqueWithoutAuthorInput = {
    where: Prisma.BookWhereUniqueInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutAuthorInput, Prisma.BookUncheckedUpdateWithoutAuthorInput>;
};
export type BookUpdateManyWithWhereWithoutAuthorInput = {
    where: Prisma.BookScalarWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyWithoutAuthorInput>;
};
export type BookCreateWithoutReviewsInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    ganer: Prisma.GanerCreateNestedOneWithoutBooksInput;
    author: Prisma.AuthorCreateNestedOneWithoutBooksInput;
    cart?: Prisma.CartCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetCreateNestedManyWithoutBooksInput;
};
export type BookUncheckedCreateWithoutReviewsInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutBookInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutBookInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutBooksInput;
};
export type BookCreateOrConnectWithoutReviewsInput = {
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
};
export type BookUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.BookUpdateWithoutReviewsInput, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.BookCreateWithoutReviewsInput, Prisma.BookUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.BookWhereInput;
};
export type BookUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.BookWhereInput;
    data: Prisma.XOR<Prisma.BookUpdateWithoutReviewsInput, Prisma.BookUncheckedUpdateWithoutReviewsInput>;
};
export type BookUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ganer?: Prisma.GanerUpdateOneRequiredWithoutBooksNestedInput;
    author?: Prisma.AuthorUpdateOneRequiredWithoutBooksNestedInput;
    cart?: Prisma.CartUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cart?: Prisma.CartUncheckedUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutBooksNestedInput;
};
export type BookUpdateWithoutSetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ganer?: Prisma.GanerUpdateOneRequiredWithoutBooksNestedInput;
    author?: Prisma.AuthorUpdateOneRequiredWithoutBooksNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateWithoutSetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutBookNestedInput;
};
export type BookUncheckedUpdateManyWithoutSetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCreateManyGanerInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    authorId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateWithoutGanerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    author?: Prisma.AuthorUpdateOneRequiredWithoutBooksNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateWithoutGanerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateManyWithoutGanerInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    authorId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCreateManyAuthorInput = {
    id?: string;
    image: string;
    name: string;
    description: string;
    rating?: number;
    price: runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: number | null;
    ganerId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type BookUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    ganer?: Prisma.GanerUpdateOneRequiredWithoutBooksNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutBookNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutBookNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutBookNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutBooksNestedInput;
};
export type BookUncheckedUpdateManyWithoutAuthorInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    rating?: Prisma.IntFieldUpdateOperationsInput | number;
    price?: Prisma.DecimalFieldUpdateOperationsInput | runtime.Decimal | runtime.DecimalJsLike | number | string;
    discount?: Prisma.NullableIntFieldUpdateOperationsInput | number | null;
    ganerId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type BookCountOutputType = {
    reviews: number;
    cart: number;
    wishlist: number;
    sets: number;
};
export type BookCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    reviews?: boolean | BookCountOutputTypeCountReviewsArgs;
    cart?: boolean | BookCountOutputTypeCountCartArgs;
    wishlist?: boolean | BookCountOutputTypeCountWishlistArgs;
    sets?: boolean | BookCountOutputTypeCountSetsArgs;
};
export type BookCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookCountOutputTypeSelect<ExtArgs> | null;
};
export type BookCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type BookCountOutputTypeCountCartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartWhereInput;
};
export type BookCountOutputTypeCountWishlistArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistWhereInput;
};
export type BookCountOutputTypeCountSetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetWhereInput;
};
export type BookSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    image?: boolean;
    name?: boolean;
    description?: boolean;
    rating?: boolean;
    price?: boolean;
    discount?: boolean;
    ganerId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ganer?: boolean | Prisma.GanerDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.AuthorDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.Book$reviewsArgs<ExtArgs>;
    cart?: boolean | Prisma.Book$cartArgs<ExtArgs>;
    wishlist?: boolean | Prisma.Book$wishlistArgs<ExtArgs>;
    sets?: boolean | Prisma.Book$setsArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    image?: boolean;
    name?: boolean;
    description?: boolean;
    rating?: boolean;
    price?: boolean;
    discount?: boolean;
    ganerId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ganer?: boolean | Prisma.GanerDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.AuthorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    image?: boolean;
    name?: boolean;
    description?: boolean;
    rating?: boolean;
    price?: boolean;
    discount?: boolean;
    ganerId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    ganer?: boolean | Prisma.GanerDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.AuthorDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["book"]>;
export type BookSelectScalar = {
    id?: boolean;
    image?: boolean;
    name?: boolean;
    description?: boolean;
    rating?: boolean;
    price?: boolean;
    discount?: boolean;
    ganerId?: boolean;
    authorId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type BookOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "image" | "name" | "description" | "rating" | "price" | "discount" | "ganerId" | "authorId" | "createdAt" | "updatedAt", ExtArgs["result"]["book"]>;
export type BookInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ganer?: boolean | Prisma.GanerDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.AuthorDefaultArgs<ExtArgs>;
    reviews?: boolean | Prisma.Book$reviewsArgs<ExtArgs>;
    cart?: boolean | Prisma.Book$cartArgs<ExtArgs>;
    wishlist?: boolean | Prisma.Book$wishlistArgs<ExtArgs>;
    sets?: boolean | Prisma.Book$setsArgs<ExtArgs>;
    _count?: boolean | Prisma.BookCountOutputTypeDefaultArgs<ExtArgs>;
};
export type BookIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ganer?: boolean | Prisma.GanerDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.AuthorDefaultArgs<ExtArgs>;
};
export type BookIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    ganer?: boolean | Prisma.GanerDefaultArgs<ExtArgs>;
    author?: boolean | Prisma.AuthorDefaultArgs<ExtArgs>;
};
export type $BookPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Book";
    objects: {
        ganer: Prisma.$GanerPayload<ExtArgs>;
        author: Prisma.$AuthorPayload<ExtArgs>;
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        cart: Prisma.$CartPayload<ExtArgs>[];
        wishlist: Prisma.$WishlistPayload<ExtArgs>[];
        sets: Prisma.$SetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        image: string;
        name: string;
        description: string;
        rating: number;
        price: runtime.Decimal;
        discount: number | null;
        ganerId: string;
        authorId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["book"]>;
    composites: {};
};
export type BookGetPayload<S extends boolean | null | undefined | BookDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$BookPayload, S>;
export type BookCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<BookFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: BookCountAggregateInputType | true;
};
export interface BookDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Book'];
        meta: {
            name: 'Book';
        };
    };
    findUnique<T extends BookFindUniqueArgs>(args: Prisma.SelectSubset<T, BookFindUniqueArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends BookFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, BookFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends BookFindFirstArgs>(args?: Prisma.SelectSubset<T, BookFindFirstArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends BookFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, BookFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends BookFindManyArgs>(args?: Prisma.SelectSubset<T, BookFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends BookCreateArgs>(args: Prisma.SelectSubset<T, BookCreateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends BookCreateManyArgs>(args?: Prisma.SelectSubset<T, BookCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends BookCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, BookCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends BookDeleteArgs>(args: Prisma.SelectSubset<T, BookDeleteArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends BookUpdateArgs>(args: Prisma.SelectSubset<T, BookUpdateArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends BookDeleteManyArgs>(args?: Prisma.SelectSubset<T, BookDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends BookUpdateManyArgs>(args: Prisma.SelectSubset<T, BookUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends BookUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, BookUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends BookUpsertArgs>(args: Prisma.SelectSubset<T, BookUpsertArgs<ExtArgs>>): Prisma.Prisma__BookClient<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends BookCountArgs>(args?: Prisma.Subset<T, BookCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], BookCountAggregateOutputType> : number>;
    aggregate<T extends BookAggregateArgs>(args: Prisma.Subset<T, BookAggregateArgs>): Prisma.PrismaPromise<GetBookAggregateType<T>>;
    groupBy<T extends BookGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: BookGroupByArgs['orderBy'];
    } : {
        orderBy?: BookGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, BookGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBookGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: BookFieldRefs;
}
export interface Prisma__BookClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    ganer<T extends Prisma.GanerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GanerDefaultArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    author<T extends Prisma.AuthorDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.AuthorDefaultArgs<ExtArgs>>): Prisma.Prisma__AuthorClient<runtime.Types.Result.GetResult<Prisma.$AuthorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    reviews<T extends Prisma.Book$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cart<T extends Prisma.Book$cartArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$cartArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist<T extends Prisma.Book$wishlistArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sets<T extends Prisma.Book$setsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Book$setsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface BookFieldRefs {
    readonly id: Prisma.FieldRef<"Book", 'String'>;
    readonly image: Prisma.FieldRef<"Book", 'String'>;
    readonly name: Prisma.FieldRef<"Book", 'String'>;
    readonly description: Prisma.FieldRef<"Book", 'String'>;
    readonly rating: Prisma.FieldRef<"Book", 'Int'>;
    readonly price: Prisma.FieldRef<"Book", 'Decimal'>;
    readonly discount: Prisma.FieldRef<"Book", 'Int'>;
    readonly ganerId: Prisma.FieldRef<"Book", 'String'>;
    readonly authorId: Prisma.FieldRef<"Book", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Book", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Book", 'DateTime'>;
}
export type BookFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where?: Prisma.BookWhereInput;
    orderBy?: Prisma.BookOrderByWithRelationInput | Prisma.BookOrderByWithRelationInput[];
    cursor?: Prisma.BookWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.BookScalarFieldEnum | Prisma.BookScalarFieldEnum[];
};
export type BookCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
};
export type BookCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
};
export type BookCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.BookCreateManyInput | Prisma.BookCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.BookIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type BookUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
    where: Prisma.BookWhereUniqueInput;
};
export type BookUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type BookUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.BookUpdateManyMutationInput, Prisma.BookUncheckedUpdateManyInput>;
    where?: Prisma.BookWhereInput;
    limit?: number;
    include?: Prisma.BookIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type BookUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
    create: Prisma.XOR<Prisma.BookCreateInput, Prisma.BookUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.BookUpdateInput, Prisma.BookUncheckedUpdateInput>;
};
export type BookDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
    where: Prisma.BookWhereUniqueInput;
};
export type BookDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
    limit?: number;
};
export type Book$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ReviewSelect<ExtArgs> | null;
    omit?: Prisma.ReviewOmit<ExtArgs> | null;
    include?: Prisma.ReviewInclude<ExtArgs> | null;
    where?: Prisma.ReviewWhereInput;
    orderBy?: Prisma.ReviewOrderByWithRelationInput | Prisma.ReviewOrderByWithRelationInput[];
    cursor?: Prisma.ReviewWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ReviewScalarFieldEnum | Prisma.ReviewScalarFieldEnum[];
};
export type Book$cartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.CartSelect<ExtArgs> | null;
    omit?: Prisma.CartOmit<ExtArgs> | null;
    include?: Prisma.CartInclude<ExtArgs> | null;
    where?: Prisma.CartWhereInput;
    orderBy?: Prisma.CartOrderByWithRelationInput | Prisma.CartOrderByWithRelationInput[];
    cursor?: Prisma.CartWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.CartScalarFieldEnum | Prisma.CartScalarFieldEnum[];
};
export type Book$wishlistArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type Book$setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
    where?: Prisma.SetWhereInput;
    orderBy?: Prisma.SetOrderByWithRelationInput | Prisma.SetOrderByWithRelationInput[];
    cursor?: Prisma.SetWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.SetScalarFieldEnum | Prisma.SetScalarFieldEnum[];
};
export type BookDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.BookSelect<ExtArgs> | null;
    omit?: Prisma.BookOmit<ExtArgs> | null;
    include?: Prisma.BookInclude<ExtArgs> | null;
};
export {};
