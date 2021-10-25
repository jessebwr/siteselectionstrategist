export const baseTheme = {
  darkMode: false,
};

declare module '@emotion/react' {
  export interface Theme {
    darkMode: boolean;
  }
}
