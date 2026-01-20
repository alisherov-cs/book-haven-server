import type * as runtime from "@prisma/client/runtime/library";
import type * as Prisma from "../internal/prismaNamespace";
export type GanerModel = runtime.Types.Result.DefaultSelection<Prisma.$GanerPayload>;
export type AggregateGaner = {
    _count: GanerCountAggregateOutputType | null;
    _min: GanerMinAggregateOutputType | null;
    _max: GanerMaxAggregateOutputType | null;
};
export type GanerMinAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GanerMaxAggregateOutputType = {
    id: string | null;
    name: string | null;
    slug: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type GanerCountAggregateOutputType = {
    id: number;
    name: number;
    slug: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type GanerMinAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GanerMaxAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type GanerCountAggregateInputType = {
    id?: true;
    name?: true;
    slug?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type GanerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GanerWhereInput;
    orderBy?: Prisma.GanerOrderByWithRelationInput | Prisma.GanerOrderByWithRelationInput[];
    cursor?: Prisma.GanerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | GanerCountAggregateInputType;
    _min?: GanerMinAggregateInputType;
    _max?: GanerMaxAggregateInputType;
};
export type GetGanerAggregateType<T extends GanerAggregateArgs> = {
    [P in keyof T & keyof AggregateGaner]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateGaner[P]> : Prisma.GetScalarType<T[P], AggregateGaner[P]>;
};
export type GanerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GanerWhereInput;
    orderBy?: Prisma.GanerOrderByWithAggregationInput | Prisma.GanerOrderByWithAggregationInput[];
    by: Prisma.GanerScalarFieldEnum[] | Prisma.GanerScalarFieldEnum;
    having?: Prisma.GanerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: GanerCountAggregateInputType | true;
    _min?: GanerMinAggregateInputType;
    _max?: GanerMaxAggregateInputType;
};
export type GanerGroupByOutputType = {
    id: string;
    name: string;
    slug: string;
    createdAt: Date;
    updatedAt: Date;
    _count: GanerCountAggregateOutputType | null;
    _min: GanerMinAggregateOutputType | null;
    _max: GanerMaxAggregateOutputType | null;
};
type GetGanerGroupByPayload<T extends GanerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<GanerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof GanerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], GanerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], GanerGroupByOutputType[P]>;
}>>;
export type GanerWhereInput = {
    AND?: Prisma.GanerWhereInput | Prisma.GanerWhereInput[];
    OR?: Prisma.GanerWhereInput[];
    NOT?: Prisma.GanerWhereInput | Prisma.GanerWhereInput[];
    id?: Prisma.StringFilter<"Ganer"> | string;
    name?: Prisma.StringFilter<"Ganer"> | string;
    slug?: Prisma.StringFilter<"Ganer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Ganer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ganer"> | Date | string;
    books?: Prisma.BookListRelationFilter;
};
export type GanerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    books?: Prisma.BookOrderByRelationAggregateInput;
};
export type GanerWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    name?: string;
    AND?: Prisma.GanerWhereInput | Prisma.GanerWhereInput[];
    OR?: Prisma.GanerWhereInput[];
    NOT?: Prisma.GanerWhereInput | Prisma.GanerWhereInput[];
    slug?: Prisma.StringFilter<"Ganer"> | string;
    createdAt?: Prisma.DateTimeFilter<"Ganer"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ganer"> | Date | string;
    books?: Prisma.BookListRelationFilter;
}, "id" | "name">;
export type GanerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.GanerCountOrderByAggregateInput;
    _max?: Prisma.GanerMaxOrderByAggregateInput;
    _min?: Prisma.GanerMinOrderByAggregateInput;
};
export type GanerScalarWhereWithAggregatesInput = {
    AND?: Prisma.GanerScalarWhereWithAggregatesInput | Prisma.GanerScalarWhereWithAggregatesInput[];
    OR?: Prisma.GanerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.GanerScalarWhereWithAggregatesInput | Prisma.GanerScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ganer"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Ganer"> | string;
    slug?: Prisma.StringWithAggregatesFilter<"Ganer"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ganer"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Ganer"> | Date | string;
};
export type GanerCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    books?: Prisma.BookCreateNestedManyWithoutGanerInput;
};
export type GanerUncheckedCreateInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    books?: Prisma.BookUncheckedCreateNestedManyWithoutGanerInput;
};
export type GanerUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    books?: Prisma.BookUpdateManyWithoutGanerNestedInput;
};
export type GanerUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    books?: Prisma.BookUncheckedUpdateManyWithoutGanerNestedInput;
};
export type GanerCreateManyInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GanerUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GanerUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GanerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GanerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GanerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    slug?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type GanerScalarRelationFilter = {
    is?: Prisma.GanerWhereInput;
    isNot?: Prisma.GanerWhereInput;
};
export type GanerCreateNestedOneWithoutBooksInput = {
    create?: Prisma.XOR<Prisma.GanerCreateWithoutBooksInput, Prisma.GanerUncheckedCreateWithoutBooksInput>;
    connectOrCreate?: Prisma.GanerCreateOrConnectWithoutBooksInput;
    connect?: Prisma.GanerWhereUniqueInput;
};
export type GanerUpdateOneRequiredWithoutBooksNestedInput = {
    create?: Prisma.XOR<Prisma.GanerCreateWithoutBooksInput, Prisma.GanerUncheckedCreateWithoutBooksInput>;
    connectOrCreate?: Prisma.GanerCreateOrConnectWithoutBooksInput;
    upsert?: Prisma.GanerUpsertWithoutBooksInput;
    connect?: Prisma.GanerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.GanerUpdateToOneWithWhereWithoutBooksInput, Prisma.GanerUpdateWithoutBooksInput>, Prisma.GanerUncheckedUpdateWithoutBooksInput>;
};
export type GanerCreateWithoutBooksInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GanerUncheckedCreateWithoutBooksInput = {
    id?: string;
    name: string;
    slug: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type GanerCreateOrConnectWithoutBooksInput = {
    where: Prisma.GanerWhereUniqueInput;
    create: Prisma.XOR<Prisma.GanerCreateWithoutBooksInput, Prisma.GanerUncheckedCreateWithoutBooksInput>;
};
export type GanerUpsertWithoutBooksInput = {
    update: Prisma.XOR<Prisma.GanerUpdateWithoutBooksInput, Prisma.GanerUncheckedUpdateWithoutBooksInput>;
    create: Prisma.XOR<Prisma.GanerCreateWithoutBooksInput, Prisma.GanerUncheckedCreateWithoutBooksInput>;
    where?: Prisma.GanerWhereInput;
};
export type GanerUpdateToOneWithWhereWithoutBooksInput = {
    where?: Prisma.GanerWhereInput;
    data: Prisma.XOR<Prisma.GanerUpdateWithoutBooksInput, Prisma.GanerUncheckedUpdateWithoutBooksInput>;
};
export type GanerUpdateWithoutBooksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GanerUncheckedUpdateWithoutBooksInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    slug?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type GanerCountOutputType = {
    books: number;
};
export type GanerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    books?: boolean | GanerCountOutputTypeCountBooksArgs;
};
export type GanerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerCountOutputTypeSelect<ExtArgs> | null;
};
export type GanerCountOutputTypeCountBooksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.BookWhereInput;
};
export type GanerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    books?: boolean | Prisma.Ganer$booksArgs<ExtArgs>;
    _count?: boolean | Prisma.GanerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ganer"]>;
export type GanerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ganer"]>;
export type GanerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
}, ExtArgs["result"]["ganer"]>;
export type GanerSelectScalar = {
    id?: boolean;
    name?: boolean;
    slug?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type GanerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "slug" | "createdAt" | "updatedAt", ExtArgs["result"]["ganer"]>;
export type GanerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    books?: boolean | Prisma.Ganer$booksArgs<ExtArgs>;
    _count?: boolean | Prisma.GanerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type GanerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type GanerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $GanerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ganer";
    objects: {
        books: Prisma.$BookPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        name: string;
        slug: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["ganer"]>;
    composites: {};
};
export type GanerGetPayload<S extends boolean | null | undefined | GanerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$GanerPayload, S>;
export type GanerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<GanerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: GanerCountAggregateInputType | true;
};
export interface GanerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ganer'];
        meta: {
            name: 'Ganer';
        };
    };
    findUnique<T extends GanerFindUniqueArgs>(args: Prisma.SelectSubset<T, GanerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends GanerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, GanerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends GanerFindFirstArgs>(args?: Prisma.SelectSubset<T, GanerFindFirstArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends GanerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, GanerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends GanerFindManyArgs>(args?: Prisma.SelectSubset<T, GanerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends GanerCreateArgs>(args: Prisma.SelectSubset<T, GanerCreateArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends GanerCreateManyArgs>(args?: Prisma.SelectSubset<T, GanerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends GanerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, GanerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends GanerDeleteArgs>(args: Prisma.SelectSubset<T, GanerDeleteArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends GanerUpdateArgs>(args: Prisma.SelectSubset<T, GanerUpdateArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends GanerDeleteManyArgs>(args?: Prisma.SelectSubset<T, GanerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends GanerUpdateManyArgs>(args: Prisma.SelectSubset<T, GanerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends GanerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, GanerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends GanerUpsertArgs>(args: Prisma.SelectSubset<T, GanerUpsertArgs<ExtArgs>>): Prisma.Prisma__GanerClient<runtime.Types.Result.GetResult<Prisma.$GanerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends GanerCountArgs>(args?: Prisma.Subset<T, GanerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], GanerCountAggregateOutputType> : number>;
    aggregate<T extends GanerAggregateArgs>(args: Prisma.Subset<T, GanerAggregateArgs>): Prisma.PrismaPromise<GetGanerAggregateType<T>>;
    groupBy<T extends GanerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: GanerGroupByArgs['orderBy'];
    } : {
        orderBy?: GanerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, GanerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGanerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: GanerFieldRefs;
}
export interface Prisma__GanerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    books<T extends Prisma.Ganer$booksArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ganer$booksArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$BookPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface GanerFieldRefs {
    readonly id: Prisma.FieldRef<"Ganer", 'String'>;
    readonly name: Prisma.FieldRef<"Ganer", 'String'>;
    readonly slug: Prisma.FieldRef<"Ganer", 'String'>;
    readonly createdAt: Prisma.FieldRef<"Ganer", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Ganer", 'DateTime'>;
}
export type GanerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    where: Prisma.GanerWhereUniqueInput;
};
export type GanerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    where: Prisma.GanerWhereUniqueInput;
};
export type GanerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    where?: Prisma.GanerWhereInput;
    orderBy?: Prisma.GanerOrderByWithRelationInput | Prisma.GanerOrderByWithRelationInput[];
    cursor?: Prisma.GanerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GanerScalarFieldEnum | Prisma.GanerScalarFieldEnum[];
};
export type GanerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    where?: Prisma.GanerWhereInput;
    orderBy?: Prisma.GanerOrderByWithRelationInput | Prisma.GanerOrderByWithRelationInput[];
    cursor?: Prisma.GanerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GanerScalarFieldEnum | Prisma.GanerScalarFieldEnum[];
};
export type GanerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    where?: Prisma.GanerWhereInput;
    orderBy?: Prisma.GanerOrderByWithRelationInput | Prisma.GanerOrderByWithRelationInput[];
    cursor?: Prisma.GanerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.GanerScalarFieldEnum | Prisma.GanerScalarFieldEnum[];
};
export type GanerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GanerCreateInput, Prisma.GanerUncheckedCreateInput>;
};
export type GanerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.GanerCreateManyInput | Prisma.GanerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GanerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    data: Prisma.GanerCreateManyInput | Prisma.GanerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type GanerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GanerUpdateInput, Prisma.GanerUncheckedUpdateInput>;
    where: Prisma.GanerWhereUniqueInput;
};
export type GanerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.GanerUpdateManyMutationInput, Prisma.GanerUncheckedUpdateManyInput>;
    where?: Prisma.GanerWhereInput;
    limit?: number;
};
export type GanerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.GanerUpdateManyMutationInput, Prisma.GanerUncheckedUpdateManyInput>;
    where?: Prisma.GanerWhereInput;
    limit?: number;
};
export type GanerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    where: Prisma.GanerWhereUniqueInput;
    create: Prisma.XOR<Prisma.GanerCreateInput, Prisma.GanerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.GanerUpdateInput, Prisma.GanerUncheckedUpdateInput>;
};
export type GanerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
    where: Prisma.GanerWhereUniqueInput;
};
export type GanerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.GanerWhereInput;
    limit?: number;
};
export type Ganer$booksArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type GanerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.GanerSelect<ExtArgs> | null;
    omit?: Prisma.GanerOmit<ExtArgs> | null;
    include?: Prisma.GanerInclude<ExtArgs> | null;
};
export {};
