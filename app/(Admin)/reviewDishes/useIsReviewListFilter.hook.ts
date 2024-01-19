import { useEffect, useState } from "react";

export const useIsReviewListFilter = (): [
  typeof isReviewList,
  typeof isReview,
  typeof SelectStatusChange
] => {
  const isReviewList: { label: string; value: "0" | "1" }[] = [
    { label: "未审核", value: "0" },
    { label: "已审核", value: "1" },
  ];
  const [isReview, setsReview] = useState<"0" | "1" | null>(null);

  const SelectStatusChange = (key: "0" | "1" | null) => {
    setsReview(key);
  };

  return [isReviewList, isReview, SelectStatusChange];
};
