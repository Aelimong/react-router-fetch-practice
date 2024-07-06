import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    // 여기에 테마 속성을 정의합니다
    bgColor: string;
    textColor: string;
    accentColor: string;
  }
}
