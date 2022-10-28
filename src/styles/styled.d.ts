import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    title: string;

    colors: {
      background: string;
      secundary: string;
      sea: string;
      sky: string;

      subText: string;
      text: string;
      black: string;
      yellow: string;
    };
  }
}
