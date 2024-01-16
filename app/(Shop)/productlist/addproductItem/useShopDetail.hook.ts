import { TokenConstant } from "@/types/Token.constant";
import { ShopItemType } from "@/types/shop.type";
import { useCallback, useEffect, useState } from "react";

export const useShopDetail = () => {
  const [ShopDetail, setShopDetail] = useState<null | ShopItemType>(null);

  const reqShopDetail = useCallback(async () => {
    const token = localStorage.getItem(TokenConstant) || "";
    const merId: string = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/shop/getMerId`,
      {
        headers: { "Content-Type": "application/json", authorization: token },
      }
    ).then((res) => res.json());

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/shop/getShopDetail/${merId}`,
      {
        headers: { "Content-Type": "application/json", authorization: token },
      }
    ).then((res) => res.json());
    return res;
  }, []);

  useEffect(() => {
    reqShopDetail().then((res) => {
      setShopDetail(res);
    });
  }, [reqShopDetail]);

  return [ShopDetail];
};
