import { Dimensions } from "react-native";

export const { width: wWidth, height: wHeight } = Dimensions.get("window");

// TODO: better way of defining the type
type SizeType = {
  s: 8;
  m: 16;
  l: 24;
  xl: 32;
  xxl: 40;
};

export const Size: SizeType = {
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
  xxl: 40,
};

type FontType = {
  heading: 40;
  heading1: 24;
  heading2: 20;
  body: 16;
};

export const FontType: FontType = {
  heading: 40,
  heading1: 24,
  heading2: 20,
  body: 16,
};
