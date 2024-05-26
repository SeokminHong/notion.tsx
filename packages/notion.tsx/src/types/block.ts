import type { ElementTypeMap } from './element.ts';

export const BLOCK_KEYS = ['code', 'paragraph'] as const;
export type BlockKey = (typeof BLOCK_KEYS)[number];

export type BlockObject = ElementTypeMap[BlockKey];
