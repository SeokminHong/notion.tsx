import type { RequiredNode } from '../../jsx-runtime.ts';
import renderOption from '../../render/option.ts';
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

interface SelectProps extends PropertyPropsBase {
  children: RequiredNode;
}

export default function Select({ name, children }: SelectProps) {
  return new PropertyElement(name, {
    type: 'select',
    select: renderOption(children),
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    select: SelectProperty;
  }
}
