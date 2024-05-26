import type { SlotNode } from '../jsx-runtime.ts';
import type { BlockObject } from '../types/block.ts';
import { isBlock, isFalsyNode, isIterable } from '../utils/render.ts';

export default function renderSlotNode(node: SlotNode): BlockObject[] {
  if (isFalsyNode(node)) {
    return [];
  }
  if (isIterable(node)) {
    return [...node].flatMap(renderSlotNode);
  }
  if (isBlock(node)) {
    return [node];
  }
  throw new TypeError(
    `Expect a block node but got ${JSON.stringify(node, null, 2)}`,
  );
}
