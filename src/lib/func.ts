import { BASE_IMG_URL } from "./api";
import { monthName, skillNameToSrc } from "./static";

export const checkEnterKey = (key: string): boolean => {
  const ENTER = "Enter";
  if (key === ENTER) return true;
  return false;
};

export const getImgSrc = (src: string) => `${BASE_IMG_URL}/${src}`;

export const getSkillImgSrc = (skillName: string) => skillNameToSrc[skillName];

export const getMonthName = (monthIndex: number) => monthName[monthIndex - 1];

export const padStart = (value: string | number, length: number): string =>
  `${value}`.padStart(length, "0");

export const emptyIsInclude = (data: any[] | any): boolean => {
  switch (data.constructor) {
    case Array: {
      return (data as Array<any>).reduce((prev, data) => prev || !data, false);
    }
    case Object: {
      return Object.keys(data).reduce(
        (prev, keyName) => prev || !data[keyName],
        false
      );
    }
    default: {
      throw new Error("Is Not (Array, Object)");
    }
  }
};
