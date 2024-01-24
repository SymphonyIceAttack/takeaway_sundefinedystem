export type analyzeSalesItemType = {
  sold_total_last_at: number;

  sum: number;
};
export type AreaSalesItemType = {
  AreaTitle: string;
  sum: number;
};
export type PriceAnalysisDataItemtype = {
  price: number;
  soldTotal: number;
};
export type AllProductItemType = {
  goodTitle: string;
  id: number;
  sold_total_today_all: number;
  goods_price_sale: number;
};
export const reqDataAnalysis = async (): Promise<
  [analyzeSalesItemType[], AreaSalesItemType[], PriceAnalysisDataItemtype[]]
> => {
  const analyzeSales: analyzeSalesItemType[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_Backed}/data-analysis/analyzeSales`
  ).then((res) => res.json());

  const AreaSales: AreaSalesItemType[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_Backed_One_URL}/data-analysis/AreaSales`
  ).then((res) => res.json());
  const PriceAnalysisData: PriceAnalysisDataItemtype[] = await fetch(
    `${process.env.NEXT_PUBLIC_API_Backed_One_URL}/data-analysis/priceAnalysis`
  ).then((res) => res.json());

  return [analyzeSales, AreaSales, PriceAnalysisData];
};
