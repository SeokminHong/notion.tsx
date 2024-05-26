import type { Color } from '../../types/enum.ts';
import { PropertyElement } from '../../types/properties.ts';

import type { PropertyPropsBase } from './common.ts';

export interface SelectProperty {
  select: {
    id?: string;
    name?: string;
    color?: Color;
    description?: string;
  };
  type: 'select';
}

type SelectPropsBase =
  | {
      id: string;
      optionName?: string;
    }
  | {
      id?: string;
      optionName: string;
    };

type SelectProps = PropertyPropsBase &
  SelectPropsBase & {
    color?: Color;
    description?: string;
  };

export default function Select({ name, optionName, ...props }: SelectProps) {
  return new PropertyElement(name, {
    type: 'select',
    select: {
      name: optionName,
      ...props,
    },
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    select: SelectProperty;
  }
}
