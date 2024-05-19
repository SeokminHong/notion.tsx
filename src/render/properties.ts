import type { Node } from '../jsx-runtime.ts';
import type { PropertiesMap, PropertyElement } from '../types/properties.ts';
import {
  isFalsyNode,
  isIterable,
  isPrimitiveNode,
  isProperty,
} from '../utils/render.ts';

function getPropertyList(node: Node): PropertyElement[] {
  if (isFalsyNode(node)) {
    return [];
  }
  if (isPrimitiveNode(node)) {
    throw new TypeError(
      `Expected properties, but got ${JSON.stringify(node, null, 2)}`,
    );
  }
  if (isIterable(node)) {
    return [...node].flatMap(getPropertyList);
  }
  if (isProperty(node)) {
    return [node];
  }
  throw new TypeError(
    `Expected properties, but got ${JSON.stringify(node, null, 2)}`,
  );
}

export default function renderProperties(node: Node): PropertiesMap {
  const properties = getPropertyList(node);
  const ret: PropertiesMap = new Map();
  for (const { name, property } of properties) {
    ret.set(name, property);
  }

  return ret;
}
