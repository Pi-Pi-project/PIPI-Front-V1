export interface SkillData {
  searchName: string;
  showName: string;
  src: string;
}

export const skillDataArray: SkillData[] = [
  {
    searchName: "typescript",
    showName: "Typescript",
    src:
      "https://d1telmomo28umc.cloudfront.net/media/public/badges/typescript.png"
  },
  {
    searchName: "javascript",
    showName: "Javascript",
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/js.png"
  },
  {
    searchName: "html",
    showName: "Html",
    src:
      "https://d1telmomo28umc.cloudfront.net/media/public/badges/html5_1IJr1hb.png"
  },
  {
    searchName: "react",
    showName: "React",
    src:
      "https://d1telmomo28umc.cloudfront.net/media/public/badges/react_nsNvyE0.png"
  },
  {
    searchName: "css",
    showName: "CSS",
    src: "https://d1telmomo28umc.cloudfront.net/media/public/badges/css3.png"
  },
  {
    searchName: "nodejs",
    showName: "Nodejs",
    src:
      "https://d1telmomo28umc.cloudfront.net/media/public/badges/nodeJSBadge.png"
  },
  {
    searchName: "springboot",
    showName: "SpringBoot",
    src: "https://miro.medium.com/max/300/1*J9d-VtiLfN9APIQgWTP9ow.png"
  }
];

export const skillNameToSrc: {
  [key: string]: string;
} = skillDataArray.reduce(
  (state, { showName, src }) => ({ ...state, [showName]: src }),
  {}
);

export const CategoryArr = [
  "Web",
  "App",
  "Data Science",
  "System",
  "Network",
  "Machine Learning",
  "Security",
  "Embedded",
  "VR",
  "Game"
];
