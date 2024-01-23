import { TokenConstant } from "@/types/Token.constant";
import { ProductItemType } from "@/types/product.type";
import { useCallback, useEffect, useState } from "react";
export type recommendItemType = ProductItemType & { score: number };
export const usereqRecommendList = (): [
  typeof recommendList,
  typeof isLoading
] => {
  const [isLoading, setisLoading] = useState(true);
  const [recommendList, setrecommendList] = useState<recommendItemType[]>([]);

  const reqRecommendList = useCallback(async () => {
    const token = localStorage.getItem(TokenConstant) || "";
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_Backed}/recommend/userRecommend`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          authorization: token,
        },
      }
    ).then((res) => res.json());
    return res;
  }, []);

  useEffect(() => {
    reqRecommendList().then((res) => {
      setrecommendList(res);
      setisLoading(false);
    });
  }, [reqRecommendList]);

  return [recommendList, isLoading];
};
