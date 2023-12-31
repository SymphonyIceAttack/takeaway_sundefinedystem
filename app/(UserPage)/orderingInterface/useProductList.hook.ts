import { ProductItemType } from "@/types/product.type";
import { useCallback, useEffect, useState } from "react";

export const useProductList = (
  MerChantId: string | null,
  AreaId: string | null
): [
  typeof ProductList,
  typeof TotalListConount,
  typeof setinitPageNumber,
  typeof isProductListLoading
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
          MerChantId: MerChantId,
          AreaId: AreaId,
        }),
      }
    );
    return await res.json();
  }, [MerChantId, AreaId, initPageNumber]);

  useEffect(() => {
    let isUpdate = true;
    setisProductListLoading(true);
    reqProductList().then((res: { list: ProductItemType[]; total: number }) => {
      isUpdate && setProductList(res.list);
      isUpdate && setTotalListConount(res.total);
      isUpdate && setisProductListLoading(false);
    });
    return () => {
      isUpdate = false;
    };
  }, [reqProductList]);

  return [
    ProductList,
    TotalListConount,
    setinitPageNumber,
    isProductListLoading,
  ];
};
