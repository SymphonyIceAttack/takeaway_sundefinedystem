import { SettleStatusEnum } from "@/types/shop.type";
import { useEffect, useState } from "react";

export const useIsReviewListFilter = (): [
  typeof isReviewList,
  typeof isReview,
  typeof SelectStatusChange
] => {
  const isReviewList: { label: string; value: SettleStatusEnum }[] = [
    { label: "审核", value: SettleStatusEnum.pending },
    { label: "完成", value: SettleStatusEnum.Finish },
  ];
  const [isReview, setsReview] = useState<SettleStatusEnum>(
    SettleStatusEnum.Finish
  );

  const SelectStatusChange = (key: SettleStatusEnum) => {
    setsReview(key);
  };

  return [isReviewList, isReview, SelectStatusChange];
};
