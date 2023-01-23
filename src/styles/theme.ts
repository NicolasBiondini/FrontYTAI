import {
  extendTheme,
  type ThemeConfig,
  defineStyle,
  defineStyleConfig,
} from "@chakra-ui/react";

const outline = defineStyle({
  border: "6px dashed", // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontSize: "lg", // change the font size
  fontWeight: "semibold", // change the font weight
});
const different = defineStyle({
  border: "6px dashed", // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontSize: "lg", // change the font size
  fontWeight: "semibold", // change the font weight
});

export const codeTheme = defineStyleConfig({
  variants: { outline, different },
});

const config: ThemeConfig = {
  initialColorMode: "system",
  useSystemColorMode: false,
};
const theme = extendTheme({ config, components: { Code: codeTheme } });
export default theme;
