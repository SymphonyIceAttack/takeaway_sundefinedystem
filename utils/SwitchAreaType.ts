export enum AreaTypeEnum {
  HeadquarterNan = "6059220700100002",
  HeadquarterBei = "6059220600100006",

  HangZhouWan = "6059220700100003",
  XiangShan = "6059220700100004",
}
export enum AreaStringEnum {
  HeadquarterNan = "本部南区",
  HeadquarterBei = "本部北区",

  HangZhouWan = "杭州湾",
  XiangShan = "象山",
}

export const SwitchAreaTypetoString = (AreaType: AreaTypeEnum) => {
  switch (AreaType) {
    case AreaTypeEnum.HangZhouWan:
      return AreaStringEnum.HangZhouWan;
      break;
    case AreaTypeEnum.HeadquarterBei:
      return AreaStringEnum.HeadquarterBei;
      break;
    case AreaTypeEnum.HeadquarterNan:
      return AreaStringEnum.HeadquarterNan;
      break;
    case AreaTypeEnum.XiangShan:
      return AreaStringEnum.XiangShan;
      break;

    default:
      const never: never = AreaType;
      break;
  }
};
export const SwitchAreaStringtoType = (AreaString: AreaStringEnum) => {
  switch (AreaString) {
    case AreaStringEnum.HangZhouWan:
      return AreaTypeEnum.HangZhouWan;
      break;
    case AreaStringEnum.HeadquarterBei:
      return AreaTypeEnum.HeadquarterBei;
      break;
    case AreaStringEnum.HeadquarterNan:
      return AreaTypeEnum.HeadquarterNan;
      break;
    case AreaStringEnum.XiangShan:
      return AreaTypeEnum.XiangShan;
      break;

    default:
      const never: never = AreaString;
      break;
  }
};
