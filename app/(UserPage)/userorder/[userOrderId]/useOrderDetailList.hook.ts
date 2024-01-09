import { TokenConstant } from "@/types/Token.constant";
import { DishItemType } from "@/types/dish.type";

import { ProductItemType } from "@/types/product.type";
import { useCallback, useEffect, useState } from "react";
export type OrderDetailItemType = DishItemType & { product: ProductItemType };
export const useOrderDetailList = (OrderId: string) => {
  const [OrderDetailList, setOrderDetailList] = useState<OrderDetailItemType[]>(
    []
  );

  const reqOrderDerailList = useCallback(async () => {
    const token = localStorage.getItem(TokenConstant) || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/order/OrderDetailList?orderId=${OrderId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
      }
    );
    return await res.json();
  }, [OrderId]);

  useEffect(() => {
    reqOrderDerailList().then((res: OrderDetailItemType[]) => {
      setOrderDetailList(res);
    });
  }, [reqOrderDerailList]);
  return [OrderDetailList];
};
