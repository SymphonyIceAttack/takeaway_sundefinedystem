import { useCallback, useEffect } from "react";

export const useProductList = (
  MerChantId: string | null,
  AreaId: string | null
) => {

  const reqProductList = useCallback(() => {
    return fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/shop-product-list/ProdList`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          MerChantId: MerChantId,
          AreaId: AreaId,
        }),
      }
    ).then((res) => res.json());
  }, [MerChantId, AreaId]);

  useEffect(() => {
    let isUpdate = true;
    reqProductList().then((res) => {

    });
    return () => {
      isUpdate = false;
    };
  }, [reqProductList]);
};
