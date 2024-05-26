import type { Node } from '../jsx-runtime.ts';
import type { ElementTypeMap } from '../types/element.ts';
import {
  isFalsyNode,
  isIterable,
  isPrimitiveNode,
  isProperty,
  isRootNode,
} from '../utils/render.ts';

export default function renderOptions(
  node: Node,
): Array<ElementTypeMap['option']> {
  if (isFalsyNode(node)) {
    return [];
  }
  if (isPrimitiveNode(node)) {
    return [
      {
        name: node.toString(),
      },
    ];
  }
  if (isIterable(node)) {
    return [...node].flatMap(renderOptions);
  }

  if (isProperty(node) || isRootNode(node) || 'type' in node) {
    throw new TypeError(
      `Expected an option nodes, but got ${JSON.stringify(node, null, 2)}`,
    );
  }

  return [node];
}
