export type TitlePart = {
  text: string;
  font: string;
  isUnderline?: boolean;
};

export type Overlay = {
  source: any;
  style: object;
};

export type Slide = {
  id: number;
  titleParts: TitlePart[];
  subtitle?: string;
  mainImage: any;
  buttonText: string;
  overlays?: Overlay[];
};