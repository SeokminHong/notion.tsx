import type { Color } from '../../../types/enum.ts';

type OptionPropsBase =
  | {
      id: string;
      name?: string;
    }
  | {
      id?: string;
      name: string;
    };

type OptionProps = OptionPropsBase & {
  color?: Color;
  description?: string;
};

type OptionElement = OptionProps;

export default function Option(props: OptionProps) {
  return {
    ...props,
  };
}

declare module '../../../types/element.ts' {
  export interface ElementTypeMap {
    option: OptionElement;
  }
}
