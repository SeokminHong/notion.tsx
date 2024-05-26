import type { Node } from '../jsx-runtime.ts';
import type { ElementTypeMap } from '../types/element.ts';
import {
  isContent,
  isFalsyNode,
  isIterable,
  isPrimitiveNode,
} from '../utils/render.ts';

export default function renderPeople(
  node: Node,
): Array<ElementTypeMap['person']> {
  if (isFalsyNode(node)) {
    return [];
  }
  if (isPrimitiveNode(node)) {
    throw new TypeError(
      `Expected people, but got ${JSON.stringify(node, null, 2)}`,
    );
  }
  if (isIterable(node)) {
    return [...node].flatMap(renderPeople);
  }
  if (!isContent(node) || node.type !== 'person') {
    throw new TypeError(
      `Expected people, but got ${JSON.stringify(node, null, 2)}`,
    );
  }
  return [node];
}
