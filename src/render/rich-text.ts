import type { Node } from '../jsx-runtime.ts';
import type { ElementTypeMap } from '../types/element.ts';
import {
  hasType,
  isFalsyNode,
  isIterable,
  isPrimitiveNode,
  isProperty,
} from '../utils/render.ts';

export default function renderRichText(
  node: Node,
): Array<ElementTypeMap['text']> {
  if (isFalsyNode(node)) {
    return [];
  }
  if (isPrimitiveNode(node)) {
    return [
      {
        type: 'text',
        text: {
          content: node.toString(),
        },
      },
    ];
  }
  if (isIterable(node)) {
    return [...node].flatMap(renderRichText);
  }
  if (isProperty(node)) {
    throw new TypeError(
      `Expected a content node, but got ${JSON.stringify(node, null, 2)}`,
    );
  }
  if (!hasType(node) || node.type !== 'text') {
    throw new TypeError(
      `Expected a text node, but got ${JSON.stringify(node, null, 2)}`,
    );
  }
  return [node];
}
