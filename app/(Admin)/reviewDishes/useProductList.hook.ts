import { ProductItemType } from "@/types/product.type";
import { useCallback, useEffect, useState } from "react";

export const useProductList = (
  MerChantId: string | null,
  AreaId: string | null,
  allowControl: string | null
): [
  typeof ProductList,
  typeof TotalListConount,
  typeof setinitPageNumber,
  typeof isProductListLoading,
  typeof setisProductListLoading
] => {
  const [initPageNumber, setinitPageNumber] = useState(1);
  const [TotalListConount, setTotalListConount] = useState(0);
  const [ProductList, setProductList] = useState<ProductItemType[]>([]);
  const [isProductListLoading, setisProductListLoading] = useState(true);

  const reqProductList = useCallback(async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/shop-product-list/ProdList?pageNumber=${initPageNumber}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          MerChantId: MerChantId === null ? undefined : MerChantId,
          AreaId: AreaId === null ? undefined : AreaId,
          allowControl:
            allowControl === null ? undefined : allowControl === "1",
          isShelvesShow: undefined,
        }),
      }
    );
    return await res.json();
  }, [MerChantId, AreaId, initPageNumber, allowControl]);

  useEffect(() => {
    setisProductListLoading(true);
  }, [reqProductList]);

  useEffect(() => {
    let isUpdate = true;
    isProductListLoading &&
      reqProductList().then(
        (res: { list: ProductItemType[]; total: number }) => {
          isUpdate && setProductList(res.list);
          isUpdate && setTotalListConount(res.total);
          isUpdate && setisProductListLoading(false);
        }
      );
    return () => {
      isUpdate = false;
    };
  }, [reqProductList, isProductListLoading]);

  return [
    ProductList,
    TotalListConount,
    setinitPageNumber,
    isProductListLoading,
    setisProductListLoading,
  ];
};
