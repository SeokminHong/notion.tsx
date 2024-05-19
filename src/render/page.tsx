import type { Node } from '../jsx-runtime.ts';
import Paragraph from '../primitives/paragraph.ts';
import type { BlockObject } from '../types/block.ts';
import type { PropertiesMap } from '../types/properties.ts';
import {
  isBlock,
  isFalsyNode,
  isIterable,
  isPrimitiveNode,
  isProperty,
} from '../utils/render.ts';

function createPage(
  node: Node,
  properties: PropertiesMap,
  children: BlockObject[],
) {
  if (isFalsyNode(node)) {
    return;
  }
  if (isPrimitiveNode(node)) {
    children.push(Paragraph({ children: node }));
    return;
  }
  if (isIterable(node)) {
    for (const n of node) {
      createPage(n, properties, children);
    }
    return;
  }
  if (isProperty(node)) {
    properties.set(node.name, node.property);
    return;
  }
  if (isBlock(node)) {
    children.push(node);
  } else {
    // fallback
    children.push(Paragraph({ children: node }));
  }
}

export default function renderPage(node: Node) {
  const properties: PropertiesMap = new Map();
  const children: BlockObject[] = [];

  createPage(node, properties, children);

  return {
    properties,
    children,
  };
}
