export type OrderItemType = {
  id: string;
  create_time: string;
  status: string;
  number: number;
  totalPrice: number;
  MerTitle: string;
  shop: { store_title: string };
};
export enum OrderStatus {
  all = "all",
  pending = "pending",
  OrderReceived = "OrderReceived",
  Finish = "Finish",
}
