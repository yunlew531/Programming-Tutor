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
