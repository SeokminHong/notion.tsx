import Code from './primitives/code.ts';
import H1 from './primitives/h1.ts';
import H2 from './primitives/h2.ts';
import H3 from './primitives/h3.ts';
import Paragraph from './primitives/paragraph.ts';
import Person from './primitives/person.ts';
import Option from './primitives/properties/helper/option.ts';
import Property from './primitives/property.ts';
import Text from './primitives/text.ts';
import type { ElementTypeMap } from './types/element.ts';

const ELEMENT_MAP = {
  code: Code,
  h1: H1,
  h2: H2,
  h3: H3,
  option: Option,
  p: Paragraph,
  person: Person,
  property: Property,
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
