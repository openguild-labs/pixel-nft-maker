import { emptyArray } from "../PixelEditor";
import {
  generateLightColor,
  generateRandomColor,
  generateRandomDarkColor,
} from "../utils";

export type BitmapMethod = (color: string) => {
  grid: (string | number)[][];
  startAt: {
    row: number;
    col: number;
  };
};

export const TINY_CAT_NFT_SIZE = { rows: 14, cols: 14 };
export const TINY_CAT_NFT_COLOR_KIT: Record<string, string | (() => string)> = {
  generateBackground: generateLightColor,
  generateBodyBase: generateLightColor,
  generateEye1: generateRandomDarkColor,
  generateMouth1: generateLightColor,
  generateShirt1: generateRandomColor,
  generateHand1: "generateBodyBase",
};

export const TINY_CAT_NFT_BITMAP: Record<string, BitmapMethod> = {
  generateBackground: (x: string) => ({
    grid: emptyArray(
      TINY_CAT_NFT_SIZE.rows,
      emptyArray(TINY_CAT_NFT_SIZE.cols, x)
    ),
    startAt: {
      row: 0,
      col: 0,
    },
  }),
  generateBodyBase: (x: string) => ({
    grid: [
      [0, x, 0, x],
      [x, x, x, x],
      [x, x, x, x],
      [x, x, x, x],
      [x, x, x, x],
      [x, x, x, x],
      [x, x, x, x],
      [x, 0, 0, x],
    ],
    startAt: {
      row: 3,
      col: 5,
    },
  }),
  generateEye1: (x: string) => ({
    grid: [
      [0, 0, 0, 0],
      [x, 0, x, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    startAt: {
      row: 4,
      col: 5,
    },
  }),
  generateMouth1: (x: string) => ({
    grid: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, x, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ],
    startAt: {
      row: 4,
      col: 5,
    },
  }),
  generateShirt1: (x: string) => ({
    grid: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [x, x, x, x],
      [x, x, x, x],
      [x, x, x, x],
      [0, 0, 0, 0],
    ],
    startAt: {
      row: 4,
      col: 5,
    },
  }),
  generateHand1: (x: string) => ({
    grid: [
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [x, 0, 0, x, x],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ],
    startAt: {
      row: 4,
      col: 4,
    },
  }),
};
