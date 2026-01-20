import type * as runtime from "@prisma/client/runtime/library";
import type * as $Enums from "../enums";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserMinAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
    avatar: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: string | null;
    username: string | null;
    password: string | null;
    avatar: string | null;
    role: $Enums.Role | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    username: number;
    password: number;
    avatar: number;
    role: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type UserMinAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    avatar?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    avatar?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    username?: true;
    password?: true;
    avatar?: true;
    role?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: string;
    username: string;
    password: string;
    avatar: string | null;
    role: $Enums.Role;
    createdAt: Date;
    updatedAt: Date;
    _count: UserCountAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.StringFilter<"User"> | string;
    username?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringFilter<"User"> | string;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    friends?: Prisma.FriendListRelationFilter;
    friended?: Prisma.FriendListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    cart?: Prisma.CartListRelationFilter;
    wishlist?: Prisma.WishlistListRelationFilter;
    sets?: Prisma.SetListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    friends?: Prisma.FriendOrderByRelationAggregateInput;
    friended?: Prisma.FriendOrderByRelationAggregateInput;
    reviews?: Prisma.ReviewOrderByRelationAggregateInput;
    cart?: Prisma.CartOrderByRelationAggregateInput;
    wishlist?: Prisma.WishlistOrderByRelationAggregateInput;
    sets?: Prisma.SetOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    username?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    password?: Prisma.StringFilter<"User"> | string;
    avatar?: Prisma.StringNullableFilter<"User"> | string | null;
    role?: Prisma.EnumRoleFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"User"> | Date | string;
    friends?: Prisma.FriendListRelationFilter;
    friended?: Prisma.FriendListRelationFilter;
    reviews?: Prisma.ReviewListRelationFilter;
    cart?: Prisma.CartListRelationFilter;
    wishlist?: Prisma.WishlistListRelationFilter;
    sets?: Prisma.SetListRelationFilter;
}, "id" | "username">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    avatar?: Prisma.SortOrderInput | Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"User"> | string;
    username?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringWithAggregatesFilter<"User"> | string;
    avatar?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    role?: Prisma.EnumRoleWithAggregatesFilter<"User"> | $Enums.Role;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendUncheckedCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendUncheckedCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUncheckedUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUncheckedUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type UserUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    username?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    avatar?: Prisma.SortOrder;
    role?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type UserCreateNestedOneWithoutCartInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCartInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutCartNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutCartInput;
    upsert?: Prisma.UserUpsertWithoutCartInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutCartInput, Prisma.UserUpdateWithoutCartInput>, Prisma.UserUncheckedUpdateWithoutCartInput>;
};
export type UserCreateNestedOneWithoutWishlistInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWishlistInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutWishlistNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutWishlistInput;
    upsert?: Prisma.UserUpsertWithoutWishlistInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutWishlistInput, Prisma.UserUpdateWithoutWishlistInput>, Prisma.UserUncheckedUpdateWithoutWishlistInput>;
};
export type UserCreateNestedOneWithoutSetsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSetsInput, Prisma.UserUncheckedCreateWithoutSetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSetsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutSetsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutSetsInput, Prisma.UserUncheckedCreateWithoutSetsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutSetsInput;
    upsert?: Prisma.UserUpsertWithoutSetsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutSetsInput, Prisma.UserUpdateWithoutSetsInput>, Prisma.UserUncheckedUpdateWithoutSetsInput>;
};
export type UserCreateNestedOneWithoutFriendsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFriendsInput, Prisma.UserUncheckedCreateWithoutFriendsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFriendsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserCreateNestedOneWithoutFriendedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFriendedInput, Prisma.UserUncheckedCreateWithoutFriendedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFriendedInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutFriendsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFriendsInput, Prisma.UserUncheckedCreateWithoutFriendsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFriendsInput;
    upsert?: Prisma.UserUpsertWithoutFriendsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFriendsInput, Prisma.UserUpdateWithoutFriendsInput>, Prisma.UserUncheckedUpdateWithoutFriendsInput>;
};
export type UserUpdateOneRequiredWithoutFriendedNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutFriendedInput, Prisma.UserUncheckedCreateWithoutFriendedInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutFriendedInput;
    upsert?: Prisma.UserUpsertWithoutFriendedInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutFriendedInput, Prisma.UserUpdateWithoutFriendedInput>, Prisma.UserUncheckedUpdateWithoutFriendedInput>;
};
export type UserCreateNestedOneWithoutReviewsInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutReviewsInput;
    upsert?: Prisma.UserUpsertWithoutReviewsInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutReviewsInput, Prisma.UserUpdateWithoutReviewsInput>, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserCreateWithoutCartInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutAuthorInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutCartInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendUncheckedCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendUncheckedCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutCartInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
};
export type UserUpsertWithoutCartInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutCartInput, Prisma.UserUncheckedUpdateWithoutCartInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutCartInput, Prisma.UserUncheckedCreateWithoutCartInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutCartInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutCartInput, Prisma.UserUncheckedUpdateWithoutCartInput>;
};
export type UserUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutAuthorNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutCartInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUncheckedUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUncheckedUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutAuthorNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutWishlistInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutWishlistInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendUncheckedCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendUncheckedCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutWishlistInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
};
export type UserUpsertWithoutWishlistInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutWishlistInput, Prisma.UserUncheckedUpdateWithoutWishlistInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutWishlistInput, Prisma.UserUncheckedCreateWithoutWishlistInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutWishlistInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutWishlistInput, Prisma.UserUncheckedUpdateWithoutWishlistInput>;
};
export type UserUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutWishlistInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUncheckedUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUncheckedUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutSetsInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutSetsInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendUncheckedCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendUncheckedCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutSetsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutSetsInput, Prisma.UserUncheckedCreateWithoutSetsInput>;
};
export type UserUpsertWithoutSetsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutSetsInput, Prisma.UserUncheckedUpdateWithoutSetsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutSetsInput, Prisma.UserUncheckedCreateWithoutSetsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutSetsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutSetsInput, Prisma.UserUncheckedUpdateWithoutSetsInput>;
};
export type UserUpdateWithoutSetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutSetsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUncheckedUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUncheckedUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutFriendsInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friended?: Prisma.FriendCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFriendsInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friended?: Prisma.FriendUncheckedCreateNestedManyWithoutFriendInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFriendsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFriendsInput, Prisma.UserUncheckedCreateWithoutFriendsInput>;
};
export type UserCreateWithoutFriendedInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutFriendedInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendUncheckedCreateNestedManyWithoutUserInput;
    reviews?: Prisma.ReviewUncheckedCreateNestedManyWithoutAuthorInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutFriendedInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutFriendedInput, Prisma.UserUncheckedCreateWithoutFriendedInput>;
};
export type UserUpsertWithoutFriendsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFriendsInput, Prisma.UserUncheckedUpdateWithoutFriendsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFriendsInput, Prisma.UserUncheckedCreateWithoutFriendsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFriendsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFriendsInput, Prisma.UserUncheckedUpdateWithoutFriendsInput>;
};
export type UserUpdateWithoutFriendsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friended?: Prisma.FriendUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFriendsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friended?: Prisma.FriendUncheckedUpdateManyWithoutFriendNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserUpsertWithoutFriendedInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutFriendedInput, Prisma.UserUncheckedUpdateWithoutFriendedInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutFriendedInput, Prisma.UserUncheckedCreateWithoutFriendedInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutFriendedInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutFriendedInput, Prisma.UserUncheckedUpdateWithoutFriendedInput>;
};
export type UserUpdateWithoutFriendedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutFriendedInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUncheckedUpdateManyWithoutUserNestedInput;
    reviews?: Prisma.ReviewUncheckedUpdateManyWithoutAuthorNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutReviewsInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendCreateNestedManyWithoutFriendInput;
    cart?: Prisma.CartCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string;
    username: string;
    password: string;
    avatar?: string | null;
    role?: $Enums.Role;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    friends?: Prisma.FriendUncheckedCreateNestedManyWithoutUserInput;
    friended?: Prisma.FriendUncheckedCreateNestedManyWithoutFriendInput;
    cart?: Prisma.CartUncheckedCreateNestedManyWithoutUserInput;
    wishlist?: Prisma.WishlistUncheckedCreateNestedManyWithoutUserInput;
    sets?: Prisma.SetUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutReviewsInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
};
export type UserUpsertWithoutReviewsInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutReviewsInput, Prisma.UserUncheckedCreateWithoutReviewsInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutReviewsInput, Prisma.UserUncheckedUpdateWithoutReviewsInput>;
};
export type UserUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUpdateManyWithoutFriendNestedInput;
    cart?: Prisma.CartUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    username?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.StringFieldUpdateOperationsInput | string;
    avatar?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    role?: Prisma.EnumRoleFieldUpdateOperationsInput | $Enums.Role;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    friends?: Prisma.FriendUncheckedUpdateManyWithoutUserNestedInput;
    friended?: Prisma.FriendUncheckedUpdateManyWithoutFriendNestedInput;
    cart?: Prisma.CartUncheckedUpdateManyWithoutUserNestedInput;
    wishlist?: Prisma.WishlistUncheckedUpdateManyWithoutUserNestedInput;
    sets?: Prisma.SetUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    friends: number;
    friended: number;
    reviews: number;
    cart: number;
    wishlist: number;
    sets: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    friends?: boolean | UserCountOutputTypeCountFriendsArgs;
    friended?: boolean | UserCountOutputTypeCountFriendedArgs;
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs;
    cart?: boolean | UserCountOutputTypeCountCartArgs;
    wishlist?: boolean | UserCountOutputTypeCountWishlistArgs;
    sets?: boolean | UserCountOutputTypeCountSetsArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountFriendsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendWhereInput;
};
export type UserCountOutputTypeCountFriendedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.FriendWhereInput;
};
export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ReviewWhereInput;
};
export type UserCountOutputTypeCountCartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.CartWhereInput;
};
export type UserCountOutputTypeCountWishlistArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.WishlistWhereInput;
};
export type UserCountOutputTypeCountSetsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.SetWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    avatar?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    friends?: boolean | Prisma.User$friendsArgs<ExtArgs>;
    friended?: boolean | Prisma.User$friendedArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    cart?: boolean | Prisma.User$cartArgs<ExtArgs>;
    wishlist?: boolean | Prisma.User$wishlistArgs<ExtArgs>;
    sets?: boolean | Prisma.User$setsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    avatar?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    username?: boolean;
    password?: boolean;
    avatar?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    username?: boolean;
    password?: boolean;
    avatar?: boolean;
    role?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "username" | "password" | "avatar" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    friends?: boolean | Prisma.User$friendsArgs<ExtArgs>;
    friended?: boolean | Prisma.User$friendedArgs<ExtArgs>;
    reviews?: boolean | Prisma.User$reviewsArgs<ExtArgs>;
    cart?: boolean | Prisma.User$cartArgs<ExtArgs>;
    wishlist?: boolean | Prisma.User$wishlistArgs<ExtArgs>;
    sets?: boolean | Prisma.User$setsArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        friends: Prisma.$FriendPayload<ExtArgs>[];
        friended: Prisma.$FriendPayload<ExtArgs>[];
        reviews: Prisma.$ReviewPayload<ExtArgs>[];
        cart: Prisma.$CartPayload<ExtArgs>[];
        wishlist: Prisma.$WishlistPayload<ExtArgs>[];
        sets: Prisma.$SetPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        username: string;
        password: string;
        avatar: string | null;
        role: $Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    friends<T extends Prisma.User$friendsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$friendsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    friended<T extends Prisma.User$friendedArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$friendedArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$FriendPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    reviews<T extends Prisma.User$reviewsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    cart<T extends Prisma.User$cartArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$cartArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$CartPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    wishlist<T extends Prisma.User$wishlistArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$wishlistArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$WishlistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    sets<T extends Prisma.User$setsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$setsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$SetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'String'>;
    readonly username: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly avatar: Prisma.FieldRef<"User", 'String'>;
    readonly role: Prisma.FieldRef<"User", 'Role'>;
    readonly createdAt: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$friendsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$friendedArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$reviewsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$cartArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$wishlistArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$setsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
