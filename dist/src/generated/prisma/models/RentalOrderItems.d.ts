import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
/**
 * Model RentalOrderItems
 *
 */
export type RentalOrderItemsModel = runtime.Types.Result.DefaultSelection<Prisma.$RentalOrderItemsPayload>;
export type AggregateRentalOrderItems = {
    _count: RentalOrderItemsCountAggregateOutputType | null;
    _avg: RentalOrderItemsAvgAggregateOutputType | null;
    _sum: RentalOrderItemsSumAggregateOutputType | null;
    _min: RentalOrderItemsMinAggregateOutputType | null;
    _max: RentalOrderItemsMaxAggregateOutputType | null;
};
export type RentalOrderItemsAvgAggregateOutputType = {
    quantity: number | null;
    priceAtRental: number | null;
};
export type RentalOrderItemsSumAggregateOutputType = {
    quantity: number | null;
    priceAtRental: number | null;
};
export type RentalOrderItemsMinAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    priceAtRental: number | null;
    orderId: string | null;
    gearItemsId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RentalOrderItemsMaxAggregateOutputType = {
    id: string | null;
    quantity: number | null;
    priceAtRental: number | null;
    orderId: string | null;
    gearItemsId: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
};
export type RentalOrderItemsCountAggregateOutputType = {
    id: number;
    quantity: number;
    priceAtRental: number;
    orderId: number;
    gearItemsId: number;
    createdAt: number;
    updatedAt: number;
    _all: number;
};
export type RentalOrderItemsAvgAggregateInputType = {
    quantity?: true;
    priceAtRental?: true;
};
export type RentalOrderItemsSumAggregateInputType = {
    quantity?: true;
    priceAtRental?: true;
};
export type RentalOrderItemsMinAggregateInputType = {
    id?: true;
    quantity?: true;
    priceAtRental?: true;
    orderId?: true;
    gearItemsId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RentalOrderItemsMaxAggregateInputType = {
    id?: true;
    quantity?: true;
    priceAtRental?: true;
    orderId?: true;
    gearItemsId?: true;
    createdAt?: true;
    updatedAt?: true;
};
export type RentalOrderItemsCountAggregateInputType = {
    id?: true;
    quantity?: true;
    priceAtRental?: true;
    orderId?: true;
    gearItemsId?: true;
    createdAt?: true;
    updatedAt?: true;
    _all?: true;
};
export type RentalOrderItemsAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrderItems to aggregate.
     */
    where?: Prisma.RentalOrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemsOrderByWithRelationInput | Prisma.RentalOrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.RentalOrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned RentalOrderItems
    **/
    _count?: true | RentalOrderItemsCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: RentalOrderItemsAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: RentalOrderItemsSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: RentalOrderItemsMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: RentalOrderItemsMaxAggregateInputType;
};
export type GetRentalOrderItemsAggregateType<T extends RentalOrderItemsAggregateArgs> = {
    [P in keyof T & keyof AggregateRentalOrderItems]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateRentalOrderItems[P]> : Prisma.GetScalarType<T[P], AggregateRentalOrderItems[P]>;
};
export type RentalOrderItemsGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.RentalOrderItemsWhereInput;
    orderBy?: Prisma.RentalOrderItemsOrderByWithAggregationInput | Prisma.RentalOrderItemsOrderByWithAggregationInput[];
    by: Prisma.RentalOrderItemsScalarFieldEnum[] | Prisma.RentalOrderItemsScalarFieldEnum;
    having?: Prisma.RentalOrderItemsScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: RentalOrderItemsCountAggregateInputType | true;
    _avg?: RentalOrderItemsAvgAggregateInputType;
    _sum?: RentalOrderItemsSumAggregateInputType;
    _min?: RentalOrderItemsMinAggregateInputType;
    _max?: RentalOrderItemsMaxAggregateInputType;
};
export type RentalOrderItemsGroupByOutputType = {
    id: string;
    quantity: number;
    priceAtRental: number;
    orderId: string;
    gearItemsId: string;
    createdAt: Date;
    updatedAt: Date;
    _count: RentalOrderItemsCountAggregateOutputType | null;
    _avg: RentalOrderItemsAvgAggregateOutputType | null;
    _sum: RentalOrderItemsSumAggregateOutputType | null;
    _min: RentalOrderItemsMinAggregateOutputType | null;
    _max: RentalOrderItemsMaxAggregateOutputType | null;
};
export type GetRentalOrderItemsGroupByPayload<T extends RentalOrderItemsGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<RentalOrderItemsGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof RentalOrderItemsGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], RentalOrderItemsGroupByOutputType[P]> : Prisma.GetScalarType<T[P], RentalOrderItemsGroupByOutputType[P]>;
}>>;
export type RentalOrderItemsWhereInput = {
    AND?: Prisma.RentalOrderItemsWhereInput | Prisma.RentalOrderItemsWhereInput[];
    OR?: Prisma.RentalOrderItemsWhereInput[];
    NOT?: Prisma.RentalOrderItemsWhereInput | Prisma.RentalOrderItemsWhereInput[];
    id?: Prisma.StringFilter<"RentalOrderItems"> | string;
    quantity?: Prisma.IntFilter<"RentalOrderItems"> | number;
    priceAtRental?: Prisma.IntFilter<"RentalOrderItems"> | number;
    orderId?: Prisma.StringFilter<"RentalOrderItems"> | string;
    gearItemsId?: Prisma.StringFilter<"RentalOrderItems"> | string;
    createdAt?: Prisma.DateTimeFilter<"RentalOrderItems"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalOrderItems"> | Date | string;
    order?: Prisma.XOR<Prisma.RentalOrderScalarRelationFilter, Prisma.RentalOrderWhereInput>;
    gears?: Prisma.XOR<Prisma.GearItemScalarRelationFilter, Prisma.GearItemWhereInput>;
};
export type RentalOrderItemsOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceAtRental?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    gearItemsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    order?: Prisma.RentalOrderOrderByWithRelationInput;
    gears?: Prisma.GearItemOrderByWithRelationInput;
};
export type RentalOrderItemsWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.RentalOrderItemsWhereInput | Prisma.RentalOrderItemsWhereInput[];
    OR?: Prisma.RentalOrderItemsWhereInput[];
    NOT?: Prisma.RentalOrderItemsWhereInput | Prisma.RentalOrderItemsWhereInput[];
    quantity?: Prisma.IntFilter<"RentalOrderItems"> | number;
    priceAtRental?: Prisma.IntFilter<"RentalOrderItems"> | number;
    orderId?: Prisma.StringFilter<"RentalOrderItems"> | string;
    gearItemsId?: Prisma.StringFilter<"RentalOrderItems"> | string;
    createdAt?: Prisma.DateTimeFilter<"RentalOrderItems"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalOrderItems"> | Date | string;
    order?: Prisma.XOR<Prisma.RentalOrderScalarRelationFilter, Prisma.RentalOrderWhereInput>;
    gears?: Prisma.XOR<Prisma.GearItemScalarRelationFilter, Prisma.GearItemWhereInput>;
}, "id">;
export type RentalOrderItemsOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceAtRental?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    gearItemsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    _count?: Prisma.RentalOrderItemsCountOrderByAggregateInput;
    _avg?: Prisma.RentalOrderItemsAvgOrderByAggregateInput;
    _max?: Prisma.RentalOrderItemsMaxOrderByAggregateInput;
    _min?: Prisma.RentalOrderItemsMinOrderByAggregateInput;
    _sum?: Prisma.RentalOrderItemsSumOrderByAggregateInput;
};
export type RentalOrderItemsScalarWhereWithAggregatesInput = {
    AND?: Prisma.RentalOrderItemsScalarWhereWithAggregatesInput | Prisma.RentalOrderItemsScalarWhereWithAggregatesInput[];
    OR?: Prisma.RentalOrderItemsScalarWhereWithAggregatesInput[];
    NOT?: Prisma.RentalOrderItemsScalarWhereWithAggregatesInput | Prisma.RentalOrderItemsScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"RentalOrderItems"> | string;
    quantity?: Prisma.IntWithAggregatesFilter<"RentalOrderItems"> | number;
    priceAtRental?: Prisma.IntWithAggregatesFilter<"RentalOrderItems"> | number;
    orderId?: Prisma.StringWithAggregatesFilter<"RentalOrderItems"> | string;
    gearItemsId?: Prisma.StringWithAggregatesFilter<"RentalOrderItems"> | string;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"RentalOrderItems"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"RentalOrderItems"> | Date | string;
};
export type RentalOrderItemsCreateInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.RentalOrderCreateNestedOneWithoutItemsInput;
    gears: Prisma.GearItemCreateNestedOneWithoutRentalInput;
};
export type RentalOrderItemsUncheckedCreateInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    orderId: string;
    gearItemsId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderItemsUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.RentalOrderUpdateOneRequiredWithoutItemsNestedInput;
    gears?: Prisma.GearItemUpdateOneRequiredWithoutRentalNestedInput;
};
export type RentalOrderItemsUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    gearItemsId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemsCreateManyInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    orderId: string;
    gearItemsId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderItemsUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemsUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    gearItemsId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemsListRelationFilter = {
    every?: Prisma.RentalOrderItemsWhereInput;
    some?: Prisma.RentalOrderItemsWhereInput;
    none?: Prisma.RentalOrderItemsWhereInput;
};
export type RentalOrderItemsOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type RentalOrderItemsCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceAtRental?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    gearItemsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalOrderItemsAvgOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    priceAtRental?: Prisma.SortOrder;
};
export type RentalOrderItemsMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceAtRental?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    gearItemsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalOrderItemsMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    quantity?: Prisma.SortOrder;
    priceAtRental?: Prisma.SortOrder;
    orderId?: Prisma.SortOrder;
    gearItemsId?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
};
export type RentalOrderItemsSumOrderByAggregateInput = {
    quantity?: Prisma.SortOrder;
    priceAtRental?: Prisma.SortOrder;
};
export type RentalOrderItemsCreateNestedManyWithoutGearsInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput> | Prisma.RentalOrderItemsCreateWithoutGearsInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput | Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyGearsInputEnvelope;
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
};
export type RentalOrderItemsUncheckedCreateNestedManyWithoutGearsInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput> | Prisma.RentalOrderItemsCreateWithoutGearsInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput | Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyGearsInputEnvelope;
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
};
export type RentalOrderItemsUpdateManyWithoutGearsNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput> | Prisma.RentalOrderItemsCreateWithoutGearsInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput | Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput[];
    upsert?: Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutGearsInput | Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutGearsInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyGearsInputEnvelope;
    set?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    update?: Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutGearsInput | Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutGearsInput[];
    updateMany?: Prisma.RentalOrderItemsUpdateManyWithWhereWithoutGearsInput | Prisma.RentalOrderItemsUpdateManyWithWhereWithoutGearsInput[];
    deleteMany?: Prisma.RentalOrderItemsScalarWhereInput | Prisma.RentalOrderItemsScalarWhereInput[];
};
export type RentalOrderItemsUncheckedUpdateManyWithoutGearsNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput> | Prisma.RentalOrderItemsCreateWithoutGearsInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput | Prisma.RentalOrderItemsCreateOrConnectWithoutGearsInput[];
    upsert?: Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutGearsInput | Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutGearsInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyGearsInputEnvelope;
    set?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    update?: Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutGearsInput | Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutGearsInput[];
    updateMany?: Prisma.RentalOrderItemsUpdateManyWithWhereWithoutGearsInput | Prisma.RentalOrderItemsUpdateManyWithWhereWithoutGearsInput[];
    deleteMany?: Prisma.RentalOrderItemsScalarWhereInput | Prisma.RentalOrderItemsScalarWhereInput[];
};
export type RentalOrderItemsCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemsCreateWithoutOrderInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyOrderInputEnvelope;
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
};
export type RentalOrderItemsUncheckedCreateNestedManyWithoutOrderInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemsCreateWithoutOrderInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyOrderInputEnvelope;
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
};
export type RentalOrderItemsUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemsCreateWithoutOrderInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyOrderInputEnvelope;
    set?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    update?: Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.RentalOrderItemsUpdateManyWithWhereWithoutOrderInput | Prisma.RentalOrderItemsUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.RentalOrderItemsScalarWhereInput | Prisma.RentalOrderItemsScalarWhereInput[];
};
export type RentalOrderItemsUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput> | Prisma.RentalOrderItemsCreateWithoutOrderInput[] | Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput[];
    connectOrCreate?: Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput | Prisma.RentalOrderItemsCreateOrConnectWithoutOrderInput[];
    upsert?: Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemsUpsertWithWhereUniqueWithoutOrderInput[];
    createMany?: Prisma.RentalOrderItemsCreateManyOrderInputEnvelope;
    set?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    disconnect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    delete?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    connect?: Prisma.RentalOrderItemsWhereUniqueInput | Prisma.RentalOrderItemsWhereUniqueInput[];
    update?: Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutOrderInput | Prisma.RentalOrderItemsUpdateWithWhereUniqueWithoutOrderInput[];
    updateMany?: Prisma.RentalOrderItemsUpdateManyWithWhereWithoutOrderInput | Prisma.RentalOrderItemsUpdateManyWithWhereWithoutOrderInput[];
    deleteMany?: Prisma.RentalOrderItemsScalarWhereInput | Prisma.RentalOrderItemsScalarWhereInput[];
};
export type RentalOrderItemsCreateWithoutGearsInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    order: Prisma.RentalOrderCreateNestedOneWithoutItemsInput;
};
export type RentalOrderItemsUncheckedCreateWithoutGearsInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    orderId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderItemsCreateOrConnectWithoutGearsInput = {
    where: Prisma.RentalOrderItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput>;
};
export type RentalOrderItemsCreateManyGearsInputEnvelope = {
    data: Prisma.RentalOrderItemsCreateManyGearsInput | Prisma.RentalOrderItemsCreateManyGearsInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderItemsUpsertWithWhereUniqueWithoutGearsInput = {
    where: Prisma.RentalOrderItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderItemsUpdateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedUpdateWithoutGearsInput>;
    create: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedCreateWithoutGearsInput>;
};
export type RentalOrderItemsUpdateWithWhereUniqueWithoutGearsInput = {
    where: Prisma.RentalOrderItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderItemsUpdateWithoutGearsInput, Prisma.RentalOrderItemsUncheckedUpdateWithoutGearsInput>;
};
export type RentalOrderItemsUpdateManyWithWhereWithoutGearsInput = {
    where: Prisma.RentalOrderItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderItemsUpdateManyMutationInput, Prisma.RentalOrderItemsUncheckedUpdateManyWithoutGearsInput>;
};
export type RentalOrderItemsScalarWhereInput = {
    AND?: Prisma.RentalOrderItemsScalarWhereInput | Prisma.RentalOrderItemsScalarWhereInput[];
    OR?: Prisma.RentalOrderItemsScalarWhereInput[];
    NOT?: Prisma.RentalOrderItemsScalarWhereInput | Prisma.RentalOrderItemsScalarWhereInput[];
    id?: Prisma.StringFilter<"RentalOrderItems"> | string;
    quantity?: Prisma.IntFilter<"RentalOrderItems"> | number;
    priceAtRental?: Prisma.IntFilter<"RentalOrderItems"> | number;
    orderId?: Prisma.StringFilter<"RentalOrderItems"> | string;
    gearItemsId?: Prisma.StringFilter<"RentalOrderItems"> | string;
    createdAt?: Prisma.DateTimeFilter<"RentalOrderItems"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"RentalOrderItems"> | Date | string;
};
export type RentalOrderItemsCreateWithoutOrderInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    gears: Prisma.GearItemCreateNestedOneWithoutRentalInput;
};
export type RentalOrderItemsUncheckedCreateWithoutOrderInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    gearItemsId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderItemsCreateOrConnectWithoutOrderInput = {
    where: Prisma.RentalOrderItemsWhereUniqueInput;
    create: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput>;
};
export type RentalOrderItemsCreateManyOrderInputEnvelope = {
    data: Prisma.RentalOrderItemsCreateManyOrderInput | Prisma.RentalOrderItemsCreateManyOrderInput[];
    skipDuplicates?: boolean;
};
export type RentalOrderItemsUpsertWithWhereUniqueWithoutOrderInput = {
    where: Prisma.RentalOrderItemsWhereUniqueInput;
    update: Prisma.XOR<Prisma.RentalOrderItemsUpdateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedUpdateWithoutOrderInput>;
    create: Prisma.XOR<Prisma.RentalOrderItemsCreateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedCreateWithoutOrderInput>;
};
export type RentalOrderItemsUpdateWithWhereUniqueWithoutOrderInput = {
    where: Prisma.RentalOrderItemsWhereUniqueInput;
    data: Prisma.XOR<Prisma.RentalOrderItemsUpdateWithoutOrderInput, Prisma.RentalOrderItemsUncheckedUpdateWithoutOrderInput>;
};
export type RentalOrderItemsUpdateManyWithWhereWithoutOrderInput = {
    where: Prisma.RentalOrderItemsScalarWhereInput;
    data: Prisma.XOR<Prisma.RentalOrderItemsUpdateManyMutationInput, Prisma.RentalOrderItemsUncheckedUpdateManyWithoutOrderInput>;
};
export type RentalOrderItemsCreateManyGearsInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    orderId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderItemsUpdateWithoutGearsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    order?: Prisma.RentalOrderUpdateOneRequiredWithoutItemsNestedInput;
};
export type RentalOrderItemsUncheckedUpdateWithoutGearsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemsUncheckedUpdateManyWithoutGearsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    orderId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemsCreateManyOrderInput = {
    id?: string;
    quantity: number;
    priceAtRental: number;
    gearItemsId: string;
    createdAt?: Date | string;
    updatedAt?: Date | string;
};
export type RentalOrderItemsUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    gears?: Prisma.GearItemUpdateOneRequiredWithoutRentalNestedInput;
};
export type RentalOrderItemsUncheckedUpdateWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    gearItemsId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemsUncheckedUpdateManyWithoutOrderInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    quantity?: Prisma.IntFieldUpdateOperationsInput | number;
    priceAtRental?: Prisma.IntFieldUpdateOperationsInput | number;
    gearItemsId?: Prisma.StringFieldUpdateOperationsInput | string;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type RentalOrderItemsSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantity?: boolean;
    priceAtRental?: boolean;
    orderId?: boolean;
    gearItemsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    gears?: boolean | Prisma.GearItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrderItems"]>;
export type RentalOrderItemsSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantity?: boolean;
    priceAtRental?: boolean;
    orderId?: boolean;
    gearItemsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    gears?: boolean | Prisma.GearItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrderItems"]>;
export type RentalOrderItemsSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    quantity?: boolean;
    priceAtRental?: boolean;
    orderId?: boolean;
    gearItemsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    gears?: boolean | Prisma.GearItemDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["rentalOrderItems"]>;
export type RentalOrderItemsSelectScalar = {
    id?: boolean;
    quantity?: boolean;
    priceAtRental?: boolean;
    orderId?: boolean;
    gearItemsId?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
};
export type RentalOrderItemsOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "quantity" | "priceAtRental" | "orderId" | "gearItemsId" | "createdAt" | "updatedAt", ExtArgs["result"]["rentalOrderItems"]>;
export type RentalOrderItemsInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    gears?: boolean | Prisma.GearItemDefaultArgs<ExtArgs>;
};
export type RentalOrderItemsIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    gears?: boolean | Prisma.GearItemDefaultArgs<ExtArgs>;
};
export type RentalOrderItemsIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    order?: boolean | Prisma.RentalOrderDefaultArgs<ExtArgs>;
    gears?: boolean | Prisma.GearItemDefaultArgs<ExtArgs>;
};
export type $RentalOrderItemsPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "RentalOrderItems";
    objects: {
        order: Prisma.$RentalOrderPayload<ExtArgs>;
        gears: Prisma.$GearItemPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        quantity: number;
        priceAtRental: number;
        orderId: string;
        gearItemsId: string;
        createdAt: Date;
        updatedAt: Date;
    }, ExtArgs["result"]["rentalOrderItems"]>;
    composites: {};
};
export type RentalOrderItemsGetPayload<S extends boolean | null | undefined | RentalOrderItemsDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload, S>;
export type RentalOrderItemsCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<RentalOrderItemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: RentalOrderItemsCountAggregateInputType | true;
};
export interface RentalOrderItemsDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['RentalOrderItems'];
        meta: {
            name: 'RentalOrderItems';
        };
    };
    /**
     * Find zero or one RentalOrderItems that matches the filter.
     * @param {RentalOrderItemsFindUniqueArgs} args - Arguments to find a RentalOrderItems
     * @example
     * // Get one RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RentalOrderItemsFindUniqueArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsFindUniqueArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one RentalOrderItems that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RentalOrderItemsFindUniqueOrThrowArgs} args - Arguments to find a RentalOrderItems
     * @example
     * // Get one RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RentalOrderItemsFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemsFindFirstArgs} args - Arguments to find a RentalOrderItems
     * @example
     * // Get one RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RentalOrderItemsFindFirstArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemsFindFirstArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first RentalOrderItems that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemsFindFirstOrThrowArgs} args - Arguments to find a RentalOrderItems
     * @example
     * // Get one RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RentalOrderItemsFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemsFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more RentalOrderItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.findMany()
     *
     * // Get first 10 RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const rentalOrderItemsWithIdOnly = await prisma.rentalOrderItems.findMany({ select: { id: true } })
     *
     */
    findMany<T extends RentalOrderItemsFindManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a RentalOrderItems.
     * @param {RentalOrderItemsCreateArgs} args - Arguments to create a RentalOrderItems.
     * @example
     * // Create one RentalOrderItems
     * const RentalOrderItems = await prisma.rentalOrderItems.create({
     *   data: {
     *     // ... data to create a RentalOrderItems
     *   }
     * })
     *
     */
    create<T extends RentalOrderItemsCreateArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsCreateArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many RentalOrderItems.
     * @param {RentalOrderItemsCreateManyArgs} args - Arguments to create many RentalOrderItems.
     * @example
     * // Create many RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends RentalOrderItemsCreateManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many RentalOrderItems and returns the data saved in the database.
     * @param {RentalOrderItemsCreateManyAndReturnArgs} args - Arguments to create many RentalOrderItems.
     * @example
     * // Create many RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many RentalOrderItems and only return the `id`
     * const rentalOrderItemsWithIdOnly = await prisma.rentalOrderItems.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends RentalOrderItemsCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a RentalOrderItems.
     * @param {RentalOrderItemsDeleteArgs} args - Arguments to delete one RentalOrderItems.
     * @example
     * // Delete one RentalOrderItems
     * const RentalOrderItems = await prisma.rentalOrderItems.delete({
     *   where: {
     *     // ... filter to delete one RentalOrderItems
     *   }
     * })
     *
     */
    delete<T extends RentalOrderItemsDeleteArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsDeleteArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one RentalOrderItems.
     * @param {RentalOrderItemsUpdateArgs} args - Arguments to update one RentalOrderItems.
     * @example
     * // Update one RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends RentalOrderItemsUpdateArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsUpdateArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more RentalOrderItems.
     * @param {RentalOrderItemsDeleteManyArgs} args - Arguments to filter RentalOrderItems to delete.
     * @example
     * // Delete a few RentalOrderItems
     * const { count } = await prisma.rentalOrderItems.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends RentalOrderItemsDeleteManyArgs>(args?: Prisma.SelectSubset<T, RentalOrderItemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends RentalOrderItemsUpdateManyArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more RentalOrderItems and returns the data updated in the database.
     * @param {RentalOrderItemsUpdateManyAndReturnArgs} args - Arguments to update many RentalOrderItems.
     * @example
     * // Update many RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more RentalOrderItems and only return the `id`
     * const rentalOrderItemsWithIdOnly = await prisma.rentalOrderItems.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends RentalOrderItemsUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one RentalOrderItems.
     * @param {RentalOrderItemsUpsertArgs} args - Arguments to update or create a RentalOrderItems.
     * @example
     * // Update or create a RentalOrderItems
     * const rentalOrderItems = await prisma.rentalOrderItems.upsert({
     *   create: {
     *     // ... data to create a RentalOrderItems
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RentalOrderItems we want to update
     *   }
     * })
     */
    upsert<T extends RentalOrderItemsUpsertArgs>(args: Prisma.SelectSubset<T, RentalOrderItemsUpsertArgs<ExtArgs>>): Prisma.Prisma__RentalOrderItemsClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderItemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemsCountArgs} args - Arguments to filter RentalOrderItems to count.
     * @example
     * // Count the number of RentalOrderItems
     * const count = await prisma.rentalOrderItems.count({
     *   where: {
     *     // ... the filter for the RentalOrderItems we want to count
     *   }
     * })
    **/
    count<T extends RentalOrderItemsCountArgs>(args?: Prisma.Subset<T, RentalOrderItemsCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], RentalOrderItemsCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RentalOrderItemsAggregateArgs>(args: Prisma.Subset<T, RentalOrderItemsAggregateArgs>): Prisma.PrismaPromise<GetRentalOrderItemsAggregateType<T>>;
    /**
     * Group by RentalOrderItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RentalOrderItemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends RentalOrderItemsGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: RentalOrderItemsGroupByArgs['orderBy'];
    } : {
        orderBy?: RentalOrderItemsGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, RentalOrderItemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRentalOrderItemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the RentalOrderItems model
     */
    readonly fields: RentalOrderItemsFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for RentalOrderItems.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__RentalOrderItemsClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    order<T extends Prisma.RentalOrderDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.RentalOrderDefaultArgs<ExtArgs>>): Prisma.Prisma__RentalOrderClient<runtime.Types.Result.GetResult<Prisma.$RentalOrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    gears<T extends Prisma.GearItemDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.GearItemDefaultArgs<ExtArgs>>): Prisma.Prisma__GearItemClient<runtime.Types.Result.GetResult<Prisma.$GearItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the RentalOrderItems model
 */
export interface RentalOrderItemsFieldRefs {
    readonly id: Prisma.FieldRef<"RentalOrderItems", 'String'>;
    readonly quantity: Prisma.FieldRef<"RentalOrderItems", 'Int'>;
    readonly priceAtRental: Prisma.FieldRef<"RentalOrderItems", 'Int'>;
    readonly orderId: Prisma.FieldRef<"RentalOrderItems", 'String'>;
    readonly gearItemsId: Prisma.FieldRef<"RentalOrderItems", 'String'>;
    readonly createdAt: Prisma.FieldRef<"RentalOrderItems", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"RentalOrderItems", 'DateTime'>;
}
/**
 * RentalOrderItems findUnique
 */
export type RentalOrderItemsFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrderItems to fetch.
     */
    where: Prisma.RentalOrderItemsWhereUniqueInput;
};
/**
 * RentalOrderItems findUniqueOrThrow
 */
export type RentalOrderItemsFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrderItems to fetch.
     */
    where: Prisma.RentalOrderItemsWhereUniqueInput;
};
/**
 * RentalOrderItems findFirst
 */
export type RentalOrderItemsFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrderItems to fetch.
     */
    where?: Prisma.RentalOrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemsOrderByWithRelationInput | Prisma.RentalOrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalOrderItems.
     */
    cursor?: Prisma.RentalOrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: Prisma.RentalOrderItemsScalarFieldEnum | Prisma.RentalOrderItemsScalarFieldEnum[];
};
/**
 * RentalOrderItems findFirstOrThrow
 */
export type RentalOrderItemsFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrderItems to fetch.
     */
    where?: Prisma.RentalOrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemsOrderByWithRelationInput | Prisma.RentalOrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for RentalOrderItems.
     */
    cursor?: Prisma.RentalOrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: Prisma.RentalOrderItemsScalarFieldEnum | Prisma.RentalOrderItemsScalarFieldEnum[];
};
/**
 * RentalOrderItems findMany
 */
export type RentalOrderItemsFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * Filter, which RentalOrderItems to fetch.
     */
    where?: Prisma.RentalOrderItemsWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of RentalOrderItems to fetch.
     */
    orderBy?: Prisma.RentalOrderItemsOrderByWithRelationInput | Prisma.RentalOrderItemsOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing RentalOrderItems.
     */
    cursor?: Prisma.RentalOrderItemsWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` RentalOrderItems from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` RentalOrderItems.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of RentalOrderItems.
     */
    distinct?: Prisma.RentalOrderItemsScalarFieldEnum | Prisma.RentalOrderItemsScalarFieldEnum[];
};
/**
 * RentalOrderItems create
 */
export type RentalOrderItemsCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * The data needed to create a RentalOrderItems.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemsCreateInput, Prisma.RentalOrderItemsUncheckedCreateInput>;
};
/**
 * RentalOrderItems createMany
 */
export type RentalOrderItemsCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many RentalOrderItems.
     */
    data: Prisma.RentalOrderItemsCreateManyInput | Prisma.RentalOrderItemsCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * RentalOrderItems createManyAndReturn
 */
export type RentalOrderItemsCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * The data used to create many RentalOrderItems.
     */
    data: Prisma.RentalOrderItemsCreateManyInput | Prisma.RentalOrderItemsCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalOrderItems update
 */
export type RentalOrderItemsUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * The data needed to update a RentalOrderItems.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemsUpdateInput, Prisma.RentalOrderItemsUncheckedUpdateInput>;
    /**
     * Choose, which RentalOrderItems to update.
     */
    where: Prisma.RentalOrderItemsWhereUniqueInput;
};
/**
 * RentalOrderItems updateMany
 */
export type RentalOrderItemsUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update RentalOrderItems.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemsUpdateManyMutationInput, Prisma.RentalOrderItemsUncheckedUpdateManyInput>;
    /**
     * Filter which RentalOrderItems to update
     */
    where?: Prisma.RentalOrderItemsWhereInput;
    /**
     * Limit how many RentalOrderItems to update.
     */
    limit?: number;
};
/**
 * RentalOrderItems updateManyAndReturn
 */
export type RentalOrderItemsUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * The data used to update RentalOrderItems.
     */
    data: Prisma.XOR<Prisma.RentalOrderItemsUpdateManyMutationInput, Prisma.RentalOrderItemsUncheckedUpdateManyInput>;
    /**
     * Filter which RentalOrderItems to update
     */
    where?: Prisma.RentalOrderItemsWhereInput;
    /**
     * Limit how many RentalOrderItems to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * RentalOrderItems upsert
 */
export type RentalOrderItemsUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * The filter to search for the RentalOrderItems to update in case it exists.
     */
    where: Prisma.RentalOrderItemsWhereUniqueInput;
    /**
     * In case the RentalOrderItems found by the `where` argument doesn't exist, create a new RentalOrderItems with this data.
     */
    create: Prisma.XOR<Prisma.RentalOrderItemsCreateInput, Prisma.RentalOrderItemsUncheckedCreateInput>;
    /**
     * In case the RentalOrderItems was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.RentalOrderItemsUpdateInput, Prisma.RentalOrderItemsUncheckedUpdateInput>;
};
/**
 * RentalOrderItems delete
 */
export type RentalOrderItemsDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
    /**
     * Filter which RentalOrderItems to delete.
     */
    where: Prisma.RentalOrderItemsWhereUniqueInput;
};
/**
 * RentalOrderItems deleteMany
 */
export type RentalOrderItemsDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which RentalOrderItems to delete
     */
    where?: Prisma.RentalOrderItemsWhereInput;
    /**
     * Limit how many RentalOrderItems to delete.
     */
    limit?: number;
};
/**
 * RentalOrderItems without action
 */
export type RentalOrderItemsDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RentalOrderItems
     */
    select?: Prisma.RentalOrderItemsSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the RentalOrderItems
     */
    omit?: Prisma.RentalOrderItemsOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.RentalOrderItemsInclude<ExtArgs> | null;
};
//# sourceMappingURL=RentalOrderItems.d.ts.map