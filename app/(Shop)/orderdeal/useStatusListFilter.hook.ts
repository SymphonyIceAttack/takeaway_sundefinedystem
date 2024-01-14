import { OrderStatus } from "@/types/order.type";
import { useEffect, useState } from "react";

export const useStatusListFilter = (): [
  typeof SelectStatusList,
  typeof SelectStatus,
  typeof SelectStatusChange
] => {
  const SelectStatusList: { label: string; value: OrderStatus }[] = [
    { label: "待接单", value: OrderStatus.pending },
    { label: "已完成", value: OrderStatus.Finish },
    { label: "已接单", value: OrderStatus.OrderReceived },
    { label: "全部", value: OrderStatus.all },
  ];
  const [SelectStatus, setSelectStatus] = useState<OrderStatus>(
    OrderStatus.pending
  );

  const SelectStatusChange = (key: OrderStatus) => {
    setSelectStatus(key);
  };

  return [SelectStatusList, SelectStatus, SelectStatusChange];
};
