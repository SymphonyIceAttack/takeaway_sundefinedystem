import { TokenConstant } from "@/types/Token.constant";
import { ProductItemType } from "@/types/product.type";

import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
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
  typeof DeleteChartItem,
  typeof CreateOrder
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

  const CreateOrder = async () => {
    if (ChartArray.length === 0) {
      toast("没有进行购物");
      return;
    }
    const token = localStorage.getItem(TokenConstant) || "";
    const mergedMap = ChartArray.reduce((map, obj) => {
      const { merId } = obj;
      if (map.has(merId)) {
        // 如果 map 中已经有相同 merId 的对象数组，则将当前对象合并到该数组中
        const existingArray = map.get(merId)!;
        existingArray.push(obj);
        map.set(merId, existingArray);
      } else {
        // 如果 map 中没有相同 merId 的对象数组，则创建一个新数组并将当前对象存储进去
        map.set(merId, [obj]);
      }
      return map;
    }, new Map<string, ChartItemType[]>());

    for (const [key, value] of mergedMap) {
      if (value !== undefined) {
        await fetch(`${process.env.NEXT_PUBLIC_API_Backed}/order/CreateOrder`, {
          method: "POST",
          headers: { authorization: token, "Content-Type": "application/json" },
          body: JSON.stringify({
            mer_id: key,
            Dishes: value.map((item) => ({
              product_id: item.productId,
              number: item.number,
            })),
          }),
        }).then((res) => res.json());
        toast("下单成功");
      }
    }

    setChartArray([]);
  };

  return [ChartArray, TotalPrice, AddChartItem, DeleteChartItem, CreateOrder];
};
