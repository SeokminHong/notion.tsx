import type { ElementTypeMap } from './element.ts';

export const BLOCK_KEYS = [
  'code',
  'heading_1',
  'heading_2',
  'heading_3',
  'paragraph',
] as const;
export type BlockKey = (typeof BLOCK_KEYS)[number];

export type BlockObject = ElementTypeMap[BlockKey];
