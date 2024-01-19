import { ShopItemType } from "@/types/shop.type";
import { useCallback, useEffect, useState } from "react";

export const useMerchantArray = (): [typeof MerchantArray] => {
  const [MerchantArray, setMerchantArray] = useState<ShopItemType[]>([]);
  const reqMerChantArray = useCallback(() => {
    fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/shop-product-list/MerchantArray`
    )
      .then((res) => res.json())
      .then((res: ShopItemType[]) => {
        setMerchantArray(res);
      });
  }, []);

  useEffect(() => {
    reqMerChantArray();
  }, [reqMerChantArray]);

  return [MerchantArray];
};
