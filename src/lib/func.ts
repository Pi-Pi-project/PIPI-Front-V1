import { BASE_IMG_URL } from "./api";
import { skillNameToSrc } from "./static";

export const checkEnterKeyCode = (keyCode: string): boolean => {
  const ENTER = "Enter";
  if (keyCode === ENTER) return true;
  return false;
};

export const getImgSrc = (src: string) => `${BASE_IMG_URL}/${src}`;

export const getSkillImgSrc = (skillName: string) => skillNameToSrc[skillName];
