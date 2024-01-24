import { DishItemType } from "./dish.type";

export type ProductItemType = {
  id: string;
  goods_title: string;
  area_id: string;
  mer_id: string;
  store_title: string;
  AreaTitle: string;
  goods_price_sale: number;
  sold_total_all: number;
  allowShopControl: boolean;
  isShelvesShow: boolean;
  countLike: number;
  Dish: DishItemType[];
};
