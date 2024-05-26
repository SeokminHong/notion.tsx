import type { ElementTypeMap } from './element.ts';

export const INLINE_KEYS = ['text'] as const;
export type InlineKey = (typeof INLINE_KEYS)[number];

export type InlineObject = ElementTypeMap[InlineKey];
