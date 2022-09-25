import "styled-components";

declare module "styled-components" {
  export interface ThemeType {
    fontSize: { [key: string]: string };
    colors: { [key: string]: string };
    radius: { [key: string]: string };
    badgeBackground: { [key: string]: string };
    badgeColor: { [key: string]: string };
    badgeBorder: { [key: string]: string };
  }
}
