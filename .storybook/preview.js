import {ThemeProvider} from "styled-components";
import {GlobalStyle} from "../src/style/GlobalStyle";
import { theme } from "../src/style/theme";

const stylesWrapperDecorator = (styleFn) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {styleFn()}
    </ThemeProvider>
)

export const decorators = [stylesWrapperDecorator]

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}