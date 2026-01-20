import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type SetModel = runtime.Types.Result.DefaultSelection<Prisma.$SetPayload>;
export type AggregateSet = {
    _count: SetCountAggregateOutputType | null;
    _min: SetMinAggregateOutputType | null;
    _max: SetMaxAggregateOutputType | null;
};
export type SetMinAggregateOutputType = {
    id: string | null;
    title: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SetMaxAggregateOutputType = {
    id: string | null;
    title: string | null;
    userId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type SetCountAggregateOutputType = {
    id: number;
    title: number;
    userId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type SetMinAggregateInputType = {
    id?: true;
    title?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SetMaxAggregateInputType = {
    id?: true;
    title?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type SetCountAggregateInputType = {
    id?: true;
    title?: true;
    userId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type SetAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetWhereInput;
    orderBy?: Prisma.SetOrderByWithRelationInput | Prisma.SetOrderByWithRelationInput[];
    cursor?: Prisma.SetWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | SetCountAggregateInputType;
    _min?: SetMinAggregateInputType;
    _max?: SetMaxAggregateInputType;
};
export type GetSetAggregateType<T extends SetAggregateArgs> = {
    [P in keyof T & keyof AggregateSet]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateSet[P]> : Prisma.GetScalarType<T[P], AggregateSet[P]>;
};
export type SetGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetWhereInput;
    orderBy?: Prisma.SetOrderByWithAggregationInput | Prisma.SetOrderByWithAggregationInput[];
    by: Prisma.SetScalarFieldEnum[] | Prisma.SetScalarFieldEnum;
    having?: Prisma.SetScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: SetCountAggregateInputType | true;
    _min?: SetMinAggregateInputType;
    _max?: SetMaxAggregateInputType;
};
export type SetGroupByOutputType = {
    id: string;
    title: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: SetCountAggregateOutputType | null;
    _min: SetMinAggregateOutputType | null;
    _max: SetMaxAggregateOutputType | null;
};
type GetSetGroupByPayload<T extends SetGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<SetGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof SetGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], SetGroupByOutputType[P]> : Prisma.GetScalarType<T[P], SetGroupByOutputType[P]>;
}>>;
export type SetWhereInput = {
    AND?: Prisma.SetWhereInput | Prisma.SetWhereInput[];
    OR?: Prisma.SetWhereInput[];
    NOT?: Prisma.SetWhereInput | Prisma.SetWhereInput[];
    id?: Prisma.StringFilter<"Set"> | string;
    title?: Prisma.StringFilter<"Set"> | string;
    userId?: Prisma.StringFilter<"Set"> | string;
    createdAt?: Prisma.DateTimeFilter<"Set"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Set"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    books?: Prisma.BookListRelationFilter;
};
export type SetOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    books?: Prisma.BookOrderByRelationAggregateInput;
};
export type SetWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_title?: Prisma.SetUserIdTitleCompoundUniqueInput;
    AND?: Prisma.SetWhereInput | Prisma.SetWhereInput[];
    OR?: Prisma.SetWhereInput[];
    NOT?: Prisma.SetWhereInput | Prisma.SetWhereInput[];
    title?: Prisma.StringFilter<"Set"> | string;
    userId?: Prisma.StringFilter<"Set"> | string;
    createdAt?: Prisma.DateTimeFilter<"Set"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Set"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    books?: Prisma.BookListRelationFilter;
}, "id" | "userId_title">;
export type SetOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.SetCountOrderByAggregateInput;
    _max?: Prisma.SetMaxOrderByAggregateInput;
    _min?: Prisma.SetMinOrderByAggregateInput;
};
export type SetScalarWhereWithAggregatesInput = {
    AND?: Prisma.SetScalarWhereWithAggregatesInput | Prisma.SetScalarWhereWithAggregatesInput[];
    OR?: Prisma.SetScalarWhereWithAggregatesInput[];
    NOT?: Prisma.SetScalarWhereWithAggregatesInput | Prisma.SetScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Set"> | string;
    title?: Prisma.StringWithAggregatesFilter<"Set"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Set"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Set"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Set"> | Date | string;
};
export type SetCreateInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSetsInput;
    books?: Prisma.BookCreateNestedManyWithoutSetsInput;
};
export type SetUncheckedCreateInput = {
    id?: string;
    title: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    books?: Prisma.BookUncheckedCreateNestedManyWithoutSetsInput;
};
export type SetUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSetsNestedInput;
    books?: Prisma.BookUpdateManyWithoutSetsNestedInput;
};
export type SetUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    books?: Prisma.BookUncheckedUpdateManyWithoutSetsNestedInput;
};
export type SetCreateManyInput = {
    id?: string;
    title: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SetUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SetUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SetListRelationFilter = {
    every?: Prisma.SetWhereInput;
    some?: Prisma.SetWhereInput;
    none?: Prisma.SetWhereInput;
};
export type SetOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type SetUserIdTitleCompoundUniqueInput = {
    userId: string;
    title: string;
};
export type SetCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SetMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SetMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    title?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type SetCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutUserInput, Prisma.SetUncheckedCreateWithoutUserInput> | Prisma.SetCreateWithoutUserInput[] | Prisma.SetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutUserInput | Prisma.SetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SetCreateManyUserInputEnvelope;
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
};
export type SetUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutUserInput, Prisma.SetUncheckedCreateWithoutUserInput> | Prisma.SetCreateWithoutUserInput[] | Prisma.SetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutUserInput | Prisma.SetCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.SetCreateManyUserInputEnvelope;
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
};
export type SetUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutUserInput, Prisma.SetUncheckedCreateWithoutUserInput> | Prisma.SetCreateWithoutUserInput[] | Prisma.SetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutUserInput | Prisma.SetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SetUpsertWithWhereUniqueWithoutUserInput | Prisma.SetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SetCreateManyUserInputEnvelope;
    set?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    disconnect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    delete?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    update?: Prisma.SetUpdateWithWhereUniqueWithoutUserInput | Prisma.SetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SetUpdateManyWithWhereWithoutUserInput | Prisma.SetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SetScalarWhereInput | Prisma.SetScalarWhereInput[];
};
export type SetUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutUserInput, Prisma.SetUncheckedCreateWithoutUserInput> | Prisma.SetCreateWithoutUserInput[] | Prisma.SetUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutUserInput | Prisma.SetCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.SetUpsertWithWhereUniqueWithoutUserInput | Prisma.SetUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.SetCreateManyUserInputEnvelope;
    set?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    disconnect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    delete?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    update?: Prisma.SetUpdateWithWhereUniqueWithoutUserInput | Prisma.SetUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.SetUpdateManyWithWhereWithoutUserInput | Prisma.SetUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.SetScalarWhereInput | Prisma.SetScalarWhereInput[];
};
export type SetCreateNestedManyWithoutBooksInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutBooksInput, Prisma.SetUncheckedCreateWithoutBooksInput> | Prisma.SetCreateWithoutBooksInput[] | Prisma.SetUncheckedCreateWithoutBooksInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutBooksInput | Prisma.SetCreateOrConnectWithoutBooksInput[];
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
};
export type SetUncheckedCreateNestedManyWithoutBooksInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutBooksInput, Prisma.SetUncheckedCreateWithoutBooksInput> | Prisma.SetCreateWithoutBooksInput[] | Prisma.SetUncheckedCreateWithoutBooksInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutBooksInput | Prisma.SetCreateOrConnectWithoutBooksInput[];
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
};
export type SetUpdateManyWithoutBooksNestedInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutBooksInput, Prisma.SetUncheckedCreateWithoutBooksInput> | Prisma.SetCreateWithoutBooksInput[] | Prisma.SetUncheckedCreateWithoutBooksInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutBooksInput | Prisma.SetCreateOrConnectWithoutBooksInput[];
    upsert?: Prisma.SetUpsertWithWhereUniqueWithoutBooksInput | Prisma.SetUpsertWithWhereUniqueWithoutBooksInput[];
    set?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    disconnect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    delete?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    update?: Prisma.SetUpdateWithWhereUniqueWithoutBooksInput | Prisma.SetUpdateWithWhereUniqueWithoutBooksInput[];
    updateMany?: Prisma.SetUpdateManyWithWhereWithoutBooksInput | Prisma.SetUpdateManyWithWhereWithoutBooksInput[];
    deleteMany?: Prisma.SetScalarWhereInput | Prisma.SetScalarWhereInput[];
};
export type SetUncheckedUpdateManyWithoutBooksNestedInput = {
    create?: Prisma.XOR<Prisma.SetCreateWithoutBooksInput, Prisma.SetUncheckedCreateWithoutBooksInput> | Prisma.SetCreateWithoutBooksInput[] | Prisma.SetUncheckedCreateWithoutBooksInput[];
    connectOrCreate?: Prisma.SetCreateOrConnectWithoutBooksInput | Prisma.SetCreateOrConnectWithoutBooksInput[];
    upsert?: Prisma.SetUpsertWithWhereUniqueWithoutBooksInput | Prisma.SetUpsertWithWhereUniqueWithoutBooksInput[];
    set?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    disconnect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    delete?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    connect?: Prisma.SetWhereUniqueInput | Prisma.SetWhereUniqueInput[];
    update?: Prisma.SetUpdateWithWhereUniqueWithoutBooksInput | Prisma.SetUpdateWithWhereUniqueWithoutBooksInput[];
    updateMany?: Prisma.SetUpdateManyWithWhereWithoutBooksInput | Prisma.SetUpdateManyWithWhereWithoutBooksInput[];
    deleteMany?: Prisma.SetScalarWhereInput | Prisma.SetScalarWhereInput[];
};
export type SetCreateWithoutUserInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    books?: Prisma.BookCreateNestedManyWithoutSetsInput;
};
export type SetUncheckedCreateWithoutUserInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    books?: Prisma.BookUncheckedCreateNestedManyWithoutSetsInput;
};
export type SetCreateOrConnectWithoutUserInput = {
    where: Prisma.SetWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetCreateWithoutUserInput, Prisma.SetUncheckedCreateWithoutUserInput>;
};
export type SetCreateManyUserInputEnvelope = {
    data: Prisma.SetCreateManyUserInput | Prisma.SetCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type SetUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.SetWhereUniqueInput;
    update: Prisma.XOR<Prisma.SetUpdateWithoutUserInput, Prisma.SetUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.SetCreateWithoutUserInput, Prisma.SetUncheckedCreateWithoutUserInput>;
};
export type SetUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.SetWhereUniqueInput;
    data: Prisma.XOR<Prisma.SetUpdateWithoutUserInput, Prisma.SetUncheckedUpdateWithoutUserInput>;
};
export type SetUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.SetScalarWhereInput;
    data: Prisma.XOR<Prisma.SetUpdateManyMutationInput, Prisma.SetUncheckedUpdateManyWithoutUserInput>;
};
export type SetScalarWhereInput = {
    AND?: Prisma.SetScalarWhereInput | Prisma.SetScalarWhereInput[];
    OR?: Prisma.SetScalarWhereInput[];
    NOT?: Prisma.SetScalarWhereInput | Prisma.SetScalarWhereInput[];
    id?: Prisma.StringFilter<"Set"> | string;
    title?: Prisma.StringFilter<"Set"> | string;
    userId?: Prisma.StringFilter<"Set"> | string;
    createdAt?: Prisma.DateTimeFilter<"Set"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Set"> | Date | string;
};
export type SetCreateWithoutBooksInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutSetsInput;
};
export type SetUncheckedCreateWithoutBooksInput = {
    id?: string;
    title: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SetCreateOrConnectWithoutBooksInput = {
    where: Prisma.SetWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetCreateWithoutBooksInput, Prisma.SetUncheckedCreateWithoutBooksInput>;
};
export type SetUpsertWithWhereUniqueWithoutBooksInput = {
    where: Prisma.SetWhereUniqueInput;
    update: Prisma.XOR<Prisma.SetUpdateWithoutBooksInput, Prisma.SetUncheckedUpdateWithoutBooksInput>;
    create: Prisma.XOR<Prisma.SetCreateWithoutBooksInput, Prisma.SetUncheckedCreateWithoutBooksInput>;
};
export type SetUpdateWithWhereUniqueWithoutBooksInput = {
    where: Prisma.SetWhereUniqueInput;
    data: Prisma.XOR<Prisma.SetUpdateWithoutBooksInput, Prisma.SetUncheckedUpdateWithoutBooksInput>;
};
export type SetUpdateManyWithWhereWithoutBooksInput = {
    where: Prisma.SetScalarWhereInput;
    data: Prisma.XOR<Prisma.SetUpdateManyMutationInput, Prisma.SetUncheckedUpdateManyWithoutBooksInput>;
};
export type SetCreateManyUserInput = {
    id?: string;
    title: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type SetUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    books?: Prisma.BookUpdateManyWithoutSetsNestedInput;
};
export type SetUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    books?: Prisma.BookUncheckedUpdateManyWithoutSetsNestedInput;
};
export type SetUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SetUpdateWithoutBooksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutSetsNestedInput;
};
export type SetUncheckedUpdateWithoutBooksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SetUncheckedUpdateManyWithoutBooksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    title?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type SetCountOutputType = {
    books: number;
};
export type SetCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    books?: boolean | SetCountOutputTypeCountBooksArgs;
};
export type SetCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetCountOutputTypeSelect<ExtArgs> | null;
};
export type SetCountOutputTypeCountBooksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
};
export type SetSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    books?: boolean | Prisma.Set$booksArgs<ExtArgs>;
    _count?: boolean | Prisma.SetCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["set"]>;
export type SetSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["set"]>;
export type SetSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    title?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["set"]>;
export type SetSelectScalar = {
    id?: boolean;
    title?: boolean;
    userId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type SetOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "title" | "userId" | "createdAt" | "updatedAt", ExtArgs["result"]["set"]>;
export type SetInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    books?: boolean | Prisma.Set$booksArgs<ExtArgs>;
    _count?: boolean | Prisma.SetCountOutputTypeDefaultArgs<ExtArgs>;
};
export type SetIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type SetIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $SetPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Set";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        books: Prisma.$BookPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        title: string;
        userId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["set"]>;
    composites: {};
};
export type SetGetPayload<S extends boolean | null | undefined | SetDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$SetPayload, S>;
export type SetCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<SetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: SetCountAggregateInputType | true;
};
export interface SetDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Set'];
        meta: {
            name: 'Set';
        };
    };
    findUnique<T extends SetFindUniqueArgs>(args: Prisma.SelectSubset<T, SetFindUniqueArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends SetFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, SetFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends SetFindFirstArgs>(args?: Prisma.SelectSubset<T, SetFindFirstArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends SetFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, SetFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends SetFindManyArgs>(args?: Prisma.SelectSubset<T, SetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends SetCreateArgs>(args: Prisma.SelectSubset<T, SetCreateArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends SetCreateManyArgs>(args?: Prisma.SelectSubset<T, SetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends SetCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, SetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends SetDeleteArgs>(args: Prisma.SelectSubset<T, SetDeleteArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends SetUpdateArgs>(args: Prisma.SelectSubset<T, SetUpdateArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends SetDeleteManyArgs>(args?: Prisma.SelectSubset<T, SetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends SetUpdateManyArgs>(args: Prisma.SelectSubset<T, SetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends SetUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, SetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends SetUpsertArgs>(args: Prisma.SelectSubset<T, SetUpsertArgs<ExtArgs>>): Prisma.Prisma__SetClient<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends SetCountArgs>(args?: Prisma.Subset<T, SetCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], SetCountAggregateOutputType> : number>;
    aggregate<T extends SetAggregateArgs>(args: Prisma.Subset<T, SetAggregateArgs>): Prisma.PrismaPromise<GetSetAggregateType<T>>;
    groupBy<T extends SetGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: SetGroupByArgs['orderBy'];
    } : {
        orderBy?: SetGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, SetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: SetFieldRefs;
}
export interface Prisma__SetClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    books<T extends Prisma.Set$booksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Set$booksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface SetFieldRefs {
    readonly id: Prisma.FieldRef<"Set", 'String'>;
    readonly title: Prisma.FieldRef<"Set", 'String'>;
    readonly userId: Prisma.FieldRef<"Set", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Set", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Set", 'DateTime'>;
}
export type SetFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
    where: Prisma.SetWhereUniqueInput;
};
export type SetFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
    where: Prisma.SetWhereUniqueInput;
};
export type SetFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SetFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SetFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SetCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetCreateInput, Prisma.SetUncheckedCreateInput>;
};
export type SetCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.SetCreateManyInput | Prisma.SetCreateManyInput[];
    skipDuplicates?: boolean;
};
export type SetCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    data: Prisma.SetCreateManyInput | Prisma.SetCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.SetIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type SetUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetUpdateInput, Prisma.SetUncheckedUpdateInput>;
    where: Prisma.SetWhereUniqueInput;
};
export type SetUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.SetUpdateManyMutationInput, Prisma.SetUncheckedUpdateManyInput>;
    where?: Prisma.SetWhereInput;
    limit?: number;
};
export type SetUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.SetUpdateManyMutationInput, Prisma.SetUncheckedUpdateManyInput>;
    where?: Prisma.SetWhereInput;
    limit?: number;
    include?: Prisma.SetIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type SetUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
    where: Prisma.SetWhereUniqueInput;
    create: Prisma.XOR<Prisma.SetCreateInput, Prisma.SetUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.SetUpdateInput, Prisma.SetUncheckedUpdateInput>;
};
export type SetDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
    where: Prisma.SetWhereUniqueInput;
};
export type SetDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetWhereInput;
    limit?: number;
};
export type Set$booksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type SetDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.SetSelect<ExtArgs> | null;
    omit?: Prisma.SetOmit<ExtArgs> | null;
    include?: Prisma.SetInclude<ExtArgs> | null;
};
export {};
