import type { TextNode } from '../jsx-runtime.ts';
import { isFalsyNode } from '../utils/render.ts';

export default function renderTextNode(textNode: TextNode): string {
  if (isFalsyNode(textNode)) {
    return '';
  }
  if (typeof textNode === 'object') {
    return [...textNode].map(renderTextNode).join('');
  }
  return textNode.toString();
}
