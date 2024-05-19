import type { ElementTypeMap } from './types.ts';

// eslint-disable-next-line @typescript-eslint/no-namespace
export namespace JSX {
  export type Element = ElementTypeMap[keyof ElementTypeMap];

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

type PropType<T> = T extends (props: infer P) => unknown ? P : never;

export const jsx = <T extends (props: PropType<T>) => JSX.Element>(
  component: T,
  props: PropType<T>,
): JSX.Element => component(props);

export const jsxs = jsx;

export function Fragment({ children }: { children: Node }) {
  return children;
}
