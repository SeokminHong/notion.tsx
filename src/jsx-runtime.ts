import Code from './components/Code.tsx';
import Paragraph from './components/Paragraph.tsx';
import Text from './components/Text.tsx';
import type { ElementTypeMap } from './types/element.ts';

const ELEMENT_MAP = {
  code: Code,
  p: Paragraph,
  text: Text,
} as const;

type ElementKey = keyof typeof ELEMENT_MAP;

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace JSX {
  export type Element = ElementTypeMap[keyof ElementTypeMap];

  export type IntrinsicElements = {
    [K in ElementKey]: Parameters<(typeof ELEMENT_MAP)[K]>[0];
  };

  export interface ElementAttributesProperty {
    props: {};
  }
  export interface ElementChildrenAttribute {
    children: {};
  }
}

export type Node =
  | JSX.Element
  | string
  | number
  | boolean
  | null
  | undefined
  | Iterable<Node>;

export type TextNode =
  | string
  | number
  | boolean
  | null
  | undefined
  | Iterable<TextNode>;

export type SlotNode =
  | JSX.Element
  | false
  | null
  | undefined
  | Iterable<SlotNode>;

type PropType<T> = T extends (props: infer P) => unknown
  ? P
  : T extends ElementKey
    ? Parameters<(typeof ELEMENT_MAP)[T]>[0]
    : never;

export const jsx = <
  T extends ElementKey | ((props: PropType<T>) => JSX.Element),
>(
  component: T,
  props: PropType<T>,
): JSX.Element => {
  if (isElementKey(component)) {
    const c = ELEMENT_MAP[component] as (typeof ELEMENT_MAP)[ElementKey];
    return c(props as never);
  }
  return component(props);
};

export const jsxs = jsx;

export function Fragment({ children }: { children: Node }) {
  return children;
}

function isElementKey(value: unknown): value is ElementKey {
  return typeof value === 'string';
}
