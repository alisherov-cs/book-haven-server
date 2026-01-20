import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type FriendModel = runtime.Types.Result.DefaultSelection<Prisma.$FriendPayload>;
export type AggregateFriend = {
    _count: FriendCountAggregateOutputType | null;
    _min: FriendMinAggregateOutputType | null;
    _max: FriendMaxAggregateOutputType | null;
};
export type FriendMinAggregateOutputType = {
    id: string | null;
    userId: string | null;
    friendId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FriendMaxAggregateOutputType = {
    id: string | null;
    userId: string | null;
    friendId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type FriendCountAggregateOutputType = {
    id: number;
    userId: number;
    friendId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type FriendMinAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FriendMaxAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type FriendCountAggregateInputType = {
    id?: true;
    userId?: true;
    friendId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type FriendAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendWhereInput;
    orderBy?: Prisma.FriendOrderByWithRelationInput | Prisma.FriendOrderByWithRelationInput[];
    cursor?: Prisma.FriendWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | FriendCountAggregateInputType;
    _min?: FriendMinAggregateInputType;
    _max?: FriendMaxAggregateInputType;
};
export type GetFriendAggregateType<T extends FriendAggregateArgs> = {
    [P in keyof T & keyof AggregateFriend]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateFriend[P]> : Prisma.GetScalarType<T[P], AggregateFriend[P]>;
};
export type FriendGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendWhereInput;
    orderBy?: Prisma.FriendOrderByWithAggregationInput | Prisma.FriendOrderByWithAggregationInput[];
    by: Prisma.FriendScalarFieldEnum[] | Prisma.FriendScalarFieldEnum;
    having?: Prisma.FriendScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: FriendCountAggregateInputType | true;
    _min?: FriendMinAggregateInputType;
    _max?: FriendMaxAggregateInputType;
};
export type FriendGroupByOutputType = {
    id: string;
    userId: string;
    friendId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: FriendCountAggregateOutputType | null;
    _min: FriendMinAggregateOutputType | null;
    _max: FriendMaxAggregateOutputType | null;
};
type GetFriendGroupByPayload<T extends FriendGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<FriendGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof FriendGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], FriendGroupByOutputType[P]> : Prisma.GetScalarType<T[P], FriendGroupByOutputType[P]>;
}>>;
export type FriendWhereInput = {
    AND?: Prisma.FriendWhereInput | Prisma.FriendWhereInput[];
    OR?: Prisma.FriendWhereInput[];
    NOT?: Prisma.FriendWhereInput | Prisma.FriendWhereInput[];
    id?: Prisma.StringFilter<"Friend"> | string;
    userId?: Prisma.StringFilter<"Friend"> | string;
    friendId?: Prisma.StringFilter<"Friend"> | string;
    createdAt?: Prisma.DateTimeFilter<"Friend"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Friend"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    friend?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
};
export type FriendOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    friendId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    friend?: Prisma.UserOrderByWithRelationInput;
};
export type FriendWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    userId_friendId?: Prisma.FriendUserIdFriendIdCompoundUniqueInput;
    AND?: Prisma.FriendWhereInput | Prisma.FriendWhereInput[];
    OR?: Prisma.FriendWhereInput[];
    NOT?: Prisma.FriendWhereInput | Prisma.FriendWhereInput[];
    userId?: Prisma.StringFilter<"Friend"> | string;
    friendId?: Prisma.StringFilter<"Friend"> | string;
    createdAt?: Prisma.DateTimeFilter<"Friend"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Friend"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    friend?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
}, "id" | "userId_friendId">;
export type FriendOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    friendId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.FriendCountOrderByAggregateInput;
    _max?: Prisma.FriendMaxOrderByAggregateInput;
    _min?: Prisma.FriendMinOrderByAggregateInput;
};
export type FriendScalarWhereWithAggregatesInput = {
    AND?: Prisma.FriendScalarWhereWithAggregatesInput | Prisma.FriendScalarWhereWithAggregatesInput[];
    OR?: Prisma.FriendScalarWhereWithAggregatesInput[];
    NOT?: Prisma.FriendScalarWhereWithAggregatesInput | Prisma.FriendScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Friend"> | string;
    userId?: Prisma.StringWithAggregatesFilter<"Friend"> | string;
    friendId?: Prisma.StringWithAggregatesFilter<"Friend"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Friend"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Friend"> | Date | string;
};
export type FriendCreateInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFriendsInput;
    friend: Prisma.UserCreateNestedOneWithoutFriendedInput;
};
export type FriendUncheckedCreateInput = {
    id?: string;
    userId: string;
    friendId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FriendUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFriendsNestedInput;
    friend?: Prisma.UserUpdateOneRequiredWithoutFriendedNestedInput;
};
export type FriendUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    friendId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendCreateManyInput = {
    id?: string;
    userId: string;
    friendId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FriendUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    friendId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendListRelationFilter = {
    every?: Prisma.FriendWhereInput;
    some?: Prisma.FriendWhereInput;
    none?: Prisma.FriendWhereInput;
};
export type FriendOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type FriendUserIdFriendIdCompoundUniqueInput = {
    userId: string;
    friendId: string;
};
export type FriendCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    friendId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FriendMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    friendId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FriendMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    friendId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type FriendCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutUserInput, Prisma.FriendUncheckedCreateWithoutUserInput> | Prisma.FriendCreateWithoutUserInput[] | Prisma.FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutUserInput | Prisma.FriendCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FriendCreateManyUserInputEnvelope;
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
};
export type FriendCreateNestedManyWithoutFriendInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutFriendInput, Prisma.FriendUncheckedCreateWithoutFriendInput> | Prisma.FriendCreateWithoutFriendInput[] | Prisma.FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutFriendInput | Prisma.FriendCreateOrConnectWithoutFriendInput[];
    createMany?: Prisma.FriendCreateManyFriendInputEnvelope;
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
};
export type FriendUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutUserInput, Prisma.FriendUncheckedCreateWithoutUserInput> | Prisma.FriendCreateWithoutUserInput[] | Prisma.FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutUserInput | Prisma.FriendCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.FriendCreateManyUserInputEnvelope;
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
};
export type FriendUncheckedCreateNestedManyWithoutFriendInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutFriendInput, Prisma.FriendUncheckedCreateWithoutFriendInput> | Prisma.FriendCreateWithoutFriendInput[] | Prisma.FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutFriendInput | Prisma.FriendCreateOrConnectWithoutFriendInput[];
    createMany?: Prisma.FriendCreateManyFriendInputEnvelope;
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
};
export type FriendUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutUserInput, Prisma.FriendUncheckedCreateWithoutUserInput> | Prisma.FriendCreateWithoutUserInput[] | Prisma.FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutUserInput | Prisma.FriendCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FriendUpsertWithWhereUniqueWithoutUserInput | Prisma.FriendUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FriendCreateManyUserInputEnvelope;
    set?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    disconnect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    delete?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    update?: Prisma.FriendUpdateWithWhereUniqueWithoutUserInput | Prisma.FriendUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FriendUpdateManyWithWhereWithoutUserInput | Prisma.FriendUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FriendScalarWhereInput | Prisma.FriendScalarWhereInput[];
};
export type FriendUpdateManyWithoutFriendNestedInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutFriendInput, Prisma.FriendUncheckedCreateWithoutFriendInput> | Prisma.FriendCreateWithoutFriendInput[] | Prisma.FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutFriendInput | Prisma.FriendCreateOrConnectWithoutFriendInput[];
    upsert?: Prisma.FriendUpsertWithWhereUniqueWithoutFriendInput | Prisma.FriendUpsertWithWhereUniqueWithoutFriendInput[];
    createMany?: Prisma.FriendCreateManyFriendInputEnvelope;
    set?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    disconnect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    delete?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    update?: Prisma.FriendUpdateWithWhereUniqueWithoutFriendInput | Prisma.FriendUpdateWithWhereUniqueWithoutFriendInput[];
    updateMany?: Prisma.FriendUpdateManyWithWhereWithoutFriendInput | Prisma.FriendUpdateManyWithWhereWithoutFriendInput[];
    deleteMany?: Prisma.FriendScalarWhereInput | Prisma.FriendScalarWhereInput[];
};
export type FriendUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutUserInput, Prisma.FriendUncheckedCreateWithoutUserInput> | Prisma.FriendCreateWithoutUserInput[] | Prisma.FriendUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutUserInput | Prisma.FriendCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.FriendUpsertWithWhereUniqueWithoutUserInput | Prisma.FriendUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.FriendCreateManyUserInputEnvelope;
    set?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    disconnect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    delete?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    update?: Prisma.FriendUpdateWithWhereUniqueWithoutUserInput | Prisma.FriendUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.FriendUpdateManyWithWhereWithoutUserInput | Prisma.FriendUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.FriendScalarWhereInput | Prisma.FriendScalarWhereInput[];
};
export type FriendUncheckedUpdateManyWithoutFriendNestedInput = {
    create?: Prisma.XOR<Prisma.FriendCreateWithoutFriendInput, Prisma.FriendUncheckedCreateWithoutFriendInput> | Prisma.FriendCreateWithoutFriendInput[] | Prisma.FriendUncheckedCreateWithoutFriendInput[];
    connectOrCreate?: Prisma.FriendCreateOrConnectWithoutFriendInput | Prisma.FriendCreateOrConnectWithoutFriendInput[];
    upsert?: Prisma.FriendUpsertWithWhereUniqueWithoutFriendInput | Prisma.FriendUpsertWithWhereUniqueWithoutFriendInput[];
    createMany?: Prisma.FriendCreateManyFriendInputEnvelope;
    set?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    disconnect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    delete?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    connect?: Prisma.FriendWhereUniqueInput | Prisma.FriendWhereUniqueInput[];
    update?: Prisma.FriendUpdateWithWhereUniqueWithoutFriendInput | Prisma.FriendUpdateWithWhereUniqueWithoutFriendInput[];
    updateMany?: Prisma.FriendUpdateManyWithWhereWithoutFriendInput | Prisma.FriendUpdateManyWithWhereWithoutFriendInput[];
    deleteMany?: Prisma.FriendScalarWhereInput | Prisma.FriendScalarWhereInput[];
};
export type FriendCreateWithoutUserInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friend: Prisma.UserCreateNestedOneWithoutFriendedInput;
};
export type FriendUncheckedCreateWithoutUserInput = {
    id?: string;
    friendId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FriendCreateOrConnectWithoutUserInput = {
    where: Prisma.FriendWhereUniqueInput;
    create: Prisma.XOR<Prisma.FriendCreateWithoutUserInput, Prisma.FriendUncheckedCreateWithoutUserInput>;
};
export type FriendCreateManyUserInputEnvelope = {
    data: Prisma.FriendCreateManyUserInput | Prisma.FriendCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type FriendCreateWithoutFriendInput = {
    id?: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutFriendsInput;
};
export type FriendUncheckedCreateWithoutFriendInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FriendCreateOrConnectWithoutFriendInput = {
    where: Prisma.FriendWhereUniqueInput;
    create: Prisma.XOR<Prisma.FriendCreateWithoutFriendInput, Prisma.FriendUncheckedCreateWithoutFriendInput>;
};
export type FriendCreateManyFriendInputEnvelope = {
    data: Prisma.FriendCreateManyFriendInput | Prisma.FriendCreateManyFriendInput[];
    skipDuplicates?: boolean;
};
export type FriendUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.FriendWhereUniqueInput;
    update: Prisma.XOR<Prisma.FriendUpdateWithoutUserInput, Prisma.FriendUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.FriendCreateWithoutUserInput, Prisma.FriendUncheckedCreateWithoutUserInput>;
};
export type FriendUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.FriendWhereUniqueInput;
    data: Prisma.XOR<Prisma.FriendUpdateWithoutUserInput, Prisma.FriendUncheckedUpdateWithoutUserInput>;
};
export type FriendUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.FriendScalarWhereInput;
    data: Prisma.XOR<Prisma.FriendUpdateManyMutationInput, Prisma.FriendUncheckedUpdateManyWithoutUserInput>;
};
export type FriendScalarWhereInput = {
    AND?: Prisma.FriendScalarWhereInput | Prisma.FriendScalarWhereInput[];
    OR?: Prisma.FriendScalarWhereInput[];
    NOT?: Prisma.FriendScalarWhereInput | Prisma.FriendScalarWhereInput[];
    id?: Prisma.StringFilter<"Friend"> | string;
    userId?: Prisma.StringFilter<"Friend"> | string;
    friendId?: Prisma.StringFilter<"Friend"> | string;
    createdAt?: Prisma.DateTimeFilter<"Friend"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Friend"> | Date | string;
};
export type FriendUpsertWithWhereUniqueWithoutFriendInput = {
    where: Prisma.FriendWhereUniqueInput;
    update: Prisma.XOR<Prisma.FriendUpdateWithoutFriendInput, Prisma.FriendUncheckedUpdateWithoutFriendInput>;
    create: Prisma.XOR<Prisma.FriendCreateWithoutFriendInput, Prisma.FriendUncheckedCreateWithoutFriendInput>;
};
export type FriendUpdateWithWhereUniqueWithoutFriendInput = {
    where: Prisma.FriendWhereUniqueInput;
    data: Prisma.XOR<Prisma.FriendUpdateWithoutFriendInput, Prisma.FriendUncheckedUpdateWithoutFriendInput>;
};
export type FriendUpdateManyWithWhereWithoutFriendInput = {
    where: Prisma.FriendScalarWhereInput;
    data: Prisma.XOR<Prisma.FriendUpdateManyMutationInput, Prisma.FriendUncheckedUpdateManyWithoutFriendInput>;
};
export type FriendCreateManyUserInput = {
    id?: string;
    friendId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FriendCreateManyFriendInput = {
    id?: string;
    userId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type FriendUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friend?: Prisma.UserUpdateOneRequiredWithoutFriendedNestedInput;
};
export type FriendUncheckedUpdateWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    friendId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendUpdateWithoutFriendInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutFriendsNestedInput;
};
export type FriendUncheckedUpdateWithoutFriendInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendUncheckedUpdateManyWithoutFriendInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    userId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type FriendSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    friendId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    friend?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["friend"]>;
export type FriendSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    friendId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    friend?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["friend"]>;
export type FriendSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    userId?: boolean;
    friendId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    friend?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["friend"]>;
export type FriendSelectScalar = {
    id?: boolean;
    userId?: boolean;
    friendId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type FriendOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "userId" | "friendId" | "createdAt" | "updatedAt", ExtArgs["result"]["friend"]>;
export type FriendInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    friend?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FriendIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    friend?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type FriendIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    friend?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $FriendPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Friend";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        friend: Prisma.$UserPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        userId: string;
        friendId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["friend"]>;
    composites: {};
};
export type FriendGetPayload<S extends boolean | null | undefined | FriendDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$FriendPayload, S>;
export type FriendCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<FriendFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: FriendCountAggregateInputType | true;
};
export interface FriendDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Friend'];
        meta: {
            name: 'Friend';
        };
    };
    findUnique<T extends FriendFindUniqueArgs>(args: Prisma.SelectSubset<T, FriendFindUniqueArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends FriendFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, FriendFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends FriendFindFirstArgs>(args?: Prisma.SelectSubset<T, FriendFindFirstArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends FriendFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, FriendFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends FriendFindManyArgs>(args?: Prisma.SelectSubset<T, FriendFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends FriendCreateArgs>(args: Prisma.SelectSubset<T, FriendCreateArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends FriendCreateManyArgs>(args?: Prisma.SelectSubset<T, FriendCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends FriendCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, FriendCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends FriendDeleteArgs>(args: Prisma.SelectSubset<T, FriendDeleteArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends FriendUpdateArgs>(args: Prisma.SelectSubset<T, FriendUpdateArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends FriendDeleteManyArgs>(args?: Prisma.SelectSubset<T, FriendDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends FriendUpdateManyArgs>(args: Prisma.SelectSubset<T, FriendUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends FriendUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, FriendUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends FriendUpsertArgs>(args: Prisma.SelectSubset<T, FriendUpsertArgs<ExtArgs>>): Prisma.Prisma__FriendClient<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends FriendCountArgs>(args?: Prisma.Subset<T, FriendCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], FriendCountAggregateOutputType> : number>;
    aggregate<T extends FriendAggregateArgs>(args: Prisma.Subset<T, FriendAggregateArgs>): Prisma.PrismaPromise<GetFriendAggregateType<T>>;
    groupBy<T extends FriendGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: FriendGroupByArgs['orderBy'];
    } : {
        orderBy?: FriendGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, FriendGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFriendGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: FriendFieldRefs;
}
export interface Prisma__FriendClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    friend<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface FriendFieldRefs {
    readonly id: Prisma.FieldRef<"Friend", 'String'>;
    readonly userId: Prisma.FieldRef<"Friend", 'String'>;
    readonly friendId: Prisma.FieldRef<"Friend", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Friend", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Friend", 'DateTime'>;
}
export type FriendFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    where: Prisma.FriendWhereUniqueInput;
};
export type FriendFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    where: Prisma.FriendWhereUniqueInput;
};
export type FriendFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    where?: Prisma.FriendWhereInput;
    orderBy?: Prisma.FriendOrderByWithRelationInput | Prisma.FriendOrderByWithRelationInput[];
    cursor?: Prisma.FriendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FriendScalarFieldEnum | Prisma.FriendScalarFieldEnum[];
};
export type FriendFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    where?: Prisma.FriendWhereInput;
    orderBy?: Prisma.FriendOrderByWithRelationInput | Prisma.FriendOrderByWithRelationInput[];
    cursor?: Prisma.FriendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FriendScalarFieldEnum | Prisma.FriendScalarFieldEnum[];
};
export type FriendFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    where?: Prisma.FriendWhereInput;
    orderBy?: Prisma.FriendOrderByWithRelationInput | Prisma.FriendOrderByWithRelationInput[];
    cursor?: Prisma.FriendWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.FriendScalarFieldEnum | Prisma.FriendScalarFieldEnum[];
};
export type FriendCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FriendCreateInput, Prisma.FriendUncheckedCreateInput>;
};
export type FriendCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.FriendCreateManyInput | Prisma.FriendCreateManyInput[];
    skipDuplicates?: boolean;
};
export type FriendCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    data: Prisma.FriendCreateManyInput | Prisma.FriendCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.FriendIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type FriendUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FriendUpdateInput, Prisma.FriendUncheckedUpdateInput>;
    where: Prisma.FriendWhereUniqueInput;
};
export type FriendUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.FriendUpdateManyMutationInput, Prisma.FriendUncheckedUpdateManyInput>;
    where?: Prisma.FriendWhereInput;
    limit?: number;
};
export type FriendUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.FriendUpdateManyMutationInput, Prisma.FriendUncheckedUpdateManyInput>;
    where?: Prisma.FriendWhereInput;
    limit?: number;
    include?: Prisma.FriendIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type FriendUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    where: Prisma.FriendWhereUniqueInput;
    create: Prisma.XOR<Prisma.FriendCreateInput, Prisma.FriendUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.FriendUpdateInput, Prisma.FriendUncheckedUpdateInput>;
};
export type FriendDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
    where: Prisma.FriendWhereUniqueInput;
};
export type FriendDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendWhereInput;
    limit?: number;
};
export type FriendDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.FriendSelect<ExtArgs> | null;
    omit?: Prisma.FriendOmit<ExtArgs> | null;
    include?: Prisma.FriendInclude<ExtArgs> | null;
};
export {};
