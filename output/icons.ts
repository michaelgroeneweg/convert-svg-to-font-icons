export type IconsId =
  | "circle";

export type IconsKey =
  | "Circle";

export enum Icons {
  Circle = "circle",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Circle]: "61697",
};
