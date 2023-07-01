/// <reference types="react-scripts" />

interface IThemeProps {
  theme?: typeof import('src/assets/styleSheets/theme').default;
}

interface IHowToLearnItem {
  image: string;
  title: string;
  content: string;
  icon: string;
}

interface IArticle {
  title: string;
  content: string;
  image: string;
}

interface ICourse {
  teacherPhoto: string;
  teacherName: string;
  title: string;
  category: string;
  content: string;
  price: number;
  courseLong: number;
}