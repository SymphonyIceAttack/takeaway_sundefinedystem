import { TokenConstant } from "@/types/Token.constant";
import { SettleStatusEnum, ShopSettleItemType } from "@/types/shop.type";
import { useCallback, useEffect, useState } from "react";

export const useShopSettleList = (
  isReview: SettleStatusEnum
): [
  typeof ShopSettleList,
  typeof TotalListConount,
  typeof setinitPageNumber,
  typeof isShopSettleListLoading,
  typeof setisShopSettleListLoading
] => {
  const [initPageNumber, setinitPageNumber] = useState(1);
  const [TotalListConount, setTotalListConount] = useState(0);
  const [ShopSettleList, setShopSettleList] = useState<ShopSettleItemType[]>(
    []
  );
  const [isShopSettleListLoading, setisShopSettleListLoading] = useState(true);

  const reqProductList = useCallback(async () => {
    const token = localStorage.getItem(TokenConstant) || "";
    return fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/admin/ShopSettleList?pageNumber=${initPageNumber}&status=${isReview}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
      }
    ).then((res) => res.json());
  }, [initPageNumber, isReview]);

  useEffect(() => {
    setisShopSettleListLoading(true);
  }, [reqProductList]);

  useEffect(() => {
    let isUpdate = true;
    isShopSettleListLoading &&
      reqProductList().then(
        (res: { list: ShopSettleItemType[]; total: number }) => {
          isUpdate && setShopSettleList(res.list);
          isUpdate && setTotalListConount(res.total);
          isUpdate && setisShopSettleListLoading(false);
        }
      );
    return () => {
      isUpdate = false;
    };
  }, [reqProductList, isShopSettleListLoading]);

  return [
    ShopSettleList,
    TotalListConount,
    setinitPageNumber,
    isShopSettleListLoading,
    setisShopSettleListLoading,
  ];
};
