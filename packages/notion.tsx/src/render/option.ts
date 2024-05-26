import type { Node } from '../jsx-runtime.ts';
import type { ElementTypeMap } from '../types/element.ts';
import {
  isFalsyNode,
  isIterable,
  isPrimitiveNode,
  isProperty,
  isRootNode,
} from '../utils/render.ts';

export default function renderOption(
  node: Node,
): ElementTypeMap['option'] | undefined {
  if (isFalsyNode(node)) {
    return;
  }
  if (isPrimitiveNode(node)) {
    return {
      name: node.toString(),
    };
  }
  if (
    isIterable(node) ||
    isProperty(node) ||
    isRootNode(node) ||
    'type' in node
  ) {
    throw new TypeError(
      `Expected an option node, but got ${JSON.stringify(node, null, 2)}`,
    );
  }

  return node;
}
