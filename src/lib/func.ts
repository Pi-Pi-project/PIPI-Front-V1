import { BASE_IMG_URL } from "./api";
import { monthName, skillNameToSrc } from "./static";

export const checkEnterKeyCode = (keyCode: string): boolean => {
  const ENTER = "Enter";
  if (keyCode === ENTER) return true;
  return false;
};

export const getImgSrc = (src: string) => `${BASE_IMG_URL}/${src}`;

export const getSkillImgSrc = (skillName: string) => skillNameToSrc[skillName];

export const getMonthName = (monthIndex: number) => monthName[monthIndex - 1];

export const padStart = (value: string | number, length: number): string =>
  `${value}`.padStart(length, "0");
