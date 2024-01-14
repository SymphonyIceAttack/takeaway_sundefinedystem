import { TokenConstant } from "@/types/Token.constant";
import { OrderItemType, OrderStatus } from "@/types/order.type";
import { useCallback, useEffect, useState } from "react";
export type OrderItemTypeShow = OrderItemType & {
  shop: { store_title: string };
};
export const useOrderList = (
  status: OrderStatus
): [
  typeof OrderList,
  typeof TotalListConount,
  typeof setinitPageNumber,
  typeof isOrderListLoading,
  typeof setisOrderListLoading
] => {
  const [initPageNumber, setinitPageNumber] = useState(1);
  const [TotalListConount, setTotalListConount] = useState(0);
  const [OrderList, setOrderList] = useState<OrderItemTypeShow[]>([]);
  const [isOrderListLoading, setisOrderListLoading] = useState(true);

  const reqProductList: () => Promise<
    [{ list: OrderItemTypeShow[]; total: number }, number]
  > = useCallback(async () => {
    const token = localStorage.getItem(TokenConstant) || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/shop/MerOrderList?pageNumber=${initPageNumber}&status=${status}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
      }
    );
    const result = await res.json();
    const code = res.status;
    return [result, code];
  }, [status, initPageNumber]);

  useEffect(() => {
    setisOrderListLoading(true);
  }, [reqProductList]);

  useEffect(() => {
    let isUpdate = true;

    isOrderListLoading &&
      reqProductList().then(([res, code]) => {
        if (code === 401) return;
        isUpdate && setOrderList(res.list);
        isUpdate && setTotalListConount(res.total);
        isUpdate && setisOrderListLoading(false);
      });
    return () => {
      isUpdate = false;
    };
  }, [reqProductList, isOrderListLoading]);

  return [
    OrderList,
    TotalListConount,
    setinitPageNumber,
    isOrderListLoading,
    setisOrderListLoading,
  ];
};
