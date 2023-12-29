import { useCallback, useEffect, useState } from "react";
import {
  AllProductItemType,
  AreaSalesItemType,
  PriceAnalysisDataItemtype,
  analyzeSalesItemType,
  reqDataAnalysis,
} from "./reqDataAnalysis";

export const useDataAnalysisHook = (): [
  typeof isLoading,
  typeof analyzeSales,
  typeof AreaSales,
  typeof PriceAnalysisData,
  typeof AllProductList
] => {
  const [isLoading, setisLoading] = useState(true);
  const [analyzeSales, setanalyzeSales] = useState<analyzeSalesItemType[]>([]);
  const [AreaSales, setAreaSales] = useState<AreaSalesItemType[]>([]);
  const [PriceAnalysisData, setPriceAnalysisData] = useState<
    PriceAnalysisDataItemtype[]
  >([]);

  const [AllProductList, setAllProductList] = useState<AllProductItemType[]>(
    []
  );

  const reqInit = useCallback(async () => {
    const [analyzeSales, AreaSales, PriceAnalysisData, AllProductList] =
      await reqDataAnalysis();

    setanalyzeSales(analyzeSales);
    setAreaSales(AreaSales);
    setPriceAnalysisData(PriceAnalysisData);
    setAllProductList(AllProductList);
    setisLoading(false);
  }, []);

  useEffect(() => {
    reqInit();
  }, [reqInit]);

  return [
    isLoading,
    analyzeSales,
    AreaSales,
    PriceAnalysisData,
    AllProductList,
  ];
};
