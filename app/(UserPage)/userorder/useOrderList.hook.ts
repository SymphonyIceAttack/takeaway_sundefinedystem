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
  typeof isOrderListLoading
] => {
  const [initPageNumber, setinitPageNumber] = useState(1);
  const [TotalListConount, setTotalListConount] = useState(0);
  const [OrderList, setOrderList] = useState<OrderItemTypeShow[]>([]);
  const [isOrderListLoading, setisOrderListLoading] = useState(true);

  const reqProductList = useCallback(async () => {
    const token = localStorage.getItem(TokenConstant) || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/order/OrderList?pageNumber=${initPageNumber}&status=${status}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
      }
    );
    return await res.json();
  }, [status, initPageNumber]);

  useEffect(() => {
    let isUpdate = true;
    setisOrderListLoading(true);
    reqProductList().then(
      (res: { list: OrderItemTypeShow[]; total: number }) => {
        isUpdate && setOrderList(res.list);
        isUpdate && setTotalListConount(res.total);
        isUpdate && setisOrderListLoading(false);
      }
    );
    return () => {
      isUpdate = false;
    };
  }, [reqProductList]);

  return [OrderList, TotalListConount, setinitPageNumber, isOrderListLoading];
};
