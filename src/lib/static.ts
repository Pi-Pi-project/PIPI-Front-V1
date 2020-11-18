export interface SkillData {
  searchName: string;
  showName: string;
  src: string;
}

export const skillDataArray: SkillData[] = [
  {
    searchName: "typescript",
    showName: "TypeScript",
    src:
      "https://d1telmomo28umc.cloudfront.net/media/public/badges/typescript.png"
  },
  {
    searchName: "javascript",
    showName: "JavaScript",
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
    showName: "NodeJs",
    src:
      "https://d1telmomo28umc.cloudfront.net/media/public/badges/nodeJSBadge.png"
  },
  {
    searchName: "springboot",
    showName: "SpringBoot",
    src: "https://miro.medium.com/max/300/1*J9d-VtiLfN9APIQgWTP9ow.png"
  },
  {
    searchName: "java",
    showName: "Java",
    src:
      "data:image/png;base64,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"
  },
  {
    searchName: "python",
    showName: "Python",
    src:
      "https://cdn3.iconfinder.com/data/icons/logos-and-brands-adobe/512/267_Python-512.png"
  }
];

export const skillNameToSrc: {
  [key: string]: string;
} = skillDataArray.reduce(
  (state, { showName, src }) => ({ ...state, [showName]: src }),
  {}
);

export const monthName = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

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
