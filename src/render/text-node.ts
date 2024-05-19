import type { TextNode } from '../jsx-runtime.ts';

export default function renderTextNode(textNode: TextNode): string {
  if (textNode === null || textNode === undefined || textNode === false) {
    return '';
  }
  if (typeof textNode === 'object') {
    return [...textNode].map(renderTextNode).join('');
  }
  return textNode.toString();
}
