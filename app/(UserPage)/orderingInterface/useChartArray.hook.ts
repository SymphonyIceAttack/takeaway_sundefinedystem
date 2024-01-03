import { ProductItemType } from "@/types/product.type";

import { useEffect, useMemo, useState } from "react";
export interface ChartItemType {
  Productname: string;
  productId: string;
  number: number;
  price: number;
  merId: string;
}
export const useChartArrayHook = (): [
  typeof ChartArray,
  typeof TotalPrice,
  typeof AddChartItem,
  typeof DeleteChartItem
] => {
  const [ChartArray, setChartArray] = useState<ChartItemType[]>([]);

  const TotalPrice = useMemo(() => {
    return ChartArray.reduce((preValue, item) => {
      return preValue + item.price;
    }, 0);
  }, [ChartArray]);

  const AddChartItem = (ProductItem: ProductItemType) => {
    setChartArray((prevChartArray) => {
      const existingItem = prevChartArray.find(
        (item) => item.productId === ProductItem.id
      );

      if (existingItem) {
        return prevChartArray.map((chartItem) => {
          if (chartItem.productId === ProductItem.id) {
            return {
              ...chartItem,
              number: chartItem.number + 1,
              price: (chartItem.number + 1) * ProductItem.goods_price_sale,
            };
          } else {
            return chartItem;
          }
        });
      } else {
        return [
          {
            Productname: ProductItem.goods_title,
            productId: ProductItem.id,
            number: 1,
            price: ProductItem.goods_price_sale,
            merId: ProductItem.mer_id,
          },
          ...prevChartArray,
        ];
      }
    });
  };

  const DeleteChartItem = (ChartItem: ChartItemType) => {
    setChartArray(
      ChartArray.filter((item) => ChartItem.productId !== item.productId)
    );
  };

  return [ChartArray, TotalPrice, AddChartItem, DeleteChartItem];
};
