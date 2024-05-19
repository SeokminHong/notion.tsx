import type { Node } from '../jsx-runtime.ts';
import type { ElementTypeMap } from '../types/element.ts';
import { isFalsyNode, isIterable, isPrimitiveNode } from '../utils/render.ts';

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
  if (node.type !== 'text') {
    throw new TypeError(
      `Expected a text node, but got ${JSON.stringify(node, null, 2)}`,
    );
  }
  return [node];
}
