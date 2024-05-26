import { PageElement } from '../components/page.ts';
import type { JSX, Node } from '../jsx-runtime.ts';
import type { BlockObject } from '../types/block.ts';
import { BLOCK_KEYS } from '../types/block.ts';
import type { InlineObject } from '../types/inline.ts';
import { INLINE_KEYS } from '../types/inline.ts';
import { PropertyElement } from '../types/properties.ts';

export function isFalsyNode(value: Node): value is null | undefined | false {
  return value === null || value === undefined || value === false;
}

export function isPrimitiveNode(
  value: Node,
): value is string | number | boolean {
  const t = typeof value;
  return t === 'string' || t === 'number' || t === 'boolean';
}

export function isIterable<T>(i: T | Iterable<T>): i is Iterable<T> {
  return Symbol.iterator in (i as Iterable<T>);
}

export function isProperty(element: JSX.Element): element is PropertyElement {
  return element instanceof PropertyElement;
}

export function isRootNode(element: JSX.Element): element is PageElement {
  return element instanceof PageElement;
}

export function isContent(
  element: JSX.Element,
): element is BlockObject | InlineObject {
  if (isProperty(element) || isRootNode(element) || !('type' in element)) {
    return false;
  }
  return true;
}

export function isInline(element: JSX.Element): element is InlineObject {
  if (!isContent(element)) {
    return false;
  }
  return (INLINE_KEYS as readonly string[]).includes(element.type);
}

export function isBlock(element: JSX.Element): element is BlockObject {
  if (!isContent(element)) {
    return false;
  }
  return (BLOCK_KEYS as readonly string[]).includes(element.type);
}
