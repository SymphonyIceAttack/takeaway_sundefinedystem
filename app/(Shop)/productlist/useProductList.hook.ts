import { TokenConstant } from "@/types/Token.constant";
import { ProductItemType } from "@/types/product.type";
import { useCallback, useEffect, useState } from "react";

export const useProductList = (): [
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

  const reqProductList: () => Promise<
    [{ list: ProductItemType[]; total: number }, number]
  > = useCallback(async () => {
    const token = localStorage.getItem(TokenConstant) || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/shop/MerProductList?pageNumber=${initPageNumber}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json", authorization: token },
      }
    );
    const result = await res.json();
    const code = res.status;
    return [result, code];
  }, [initPageNumber]);

  useEffect(() => {
    setisProductListLoading(true);
  }, [reqProductList]);

  useEffect(() => {
    let isUpdate = true;

    isProductListLoading &&
      reqProductList().then(([res, code]) => {
        if (code === 401) return;
        isUpdate && setProductList(res.list);
        isUpdate && setTotalListConount(res.total);
        isUpdate && setisProductListLoading(false);
      });
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
