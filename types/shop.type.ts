export type ShopItemType = {
  id: string;
  store_title: string;
  area_id: string;
  area_title: string;
};
export enum SettleStatusEnum {
  "pending" = "pending",
  "Finish" = "Finish",
}

export type ShopSettleItemType = {
  id: string;
  account: string;
  store_title: string;
  area_id: string;
  area_title: string;
  status: SettleStatusEnum;
};
