import { AreaStringEnum, AreaTypeEnum } from "@/utils/SwitchAreaType";
import { useEffect, useState } from "react";
import { useMerchantArray } from "./useMerchantArray.hook";

export const useFilterArraySelect = (): [
  typeof AreaTypeArray,
  typeof MerchantArray,
  typeof SelectAreaId,
  typeof SelectMerCnantId,
  typeof AreaId,
  typeof MerChantId
] => {
  const AreaTypeArray: { key: string; value: string }[] = [
    { key: AreaTypeEnum.HangZhouWan, value: AreaStringEnum.HangZhouWan },
    {
      key: AreaTypeEnum.HeadquarterBei,
      value: "本部",
    },
    { key: AreaTypeEnum.XiangShan, value: AreaStringEnum.XiangShan },
  ];

  const [AreaId, setAreaId] = useState<undefined | string>();

  const SelectAreaId = (AreaId: string | undefined) => {
    setAreaId(AreaId);
  };
  const [MerchantArray] = useMerchantArray();

  const [MerChantId, setMerChantId] = useState<undefined | string>();

  useEffect(() => {
    setMerChantId(undefined);
  }, [AreaId]);

  const SelectMerCnantId = (MerChantId: string | undefined) => {
    setMerChantId(MerChantId);
  };

  return [
    AreaTypeArray,
    MerchantArray.filter((item) => {
      return item.area_id === AreaId || AreaId === "" || AreaId === undefined;
    }),
    SelectAreaId,
    SelectMerCnantId,
    AreaId,
    MerChantId,
  ];
};
