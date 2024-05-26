import type { Node } from '../../jsx-runtime.ts';
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
  } | null;
  type: 'select';
}

interface SelectProps extends PropertyPropsBase {
  children?: Node;
}

export default function Select({ name, children }: SelectProps) {
  return new PropertyElement(name, {
    type: 'select',
    select: renderOption(children) ?? null,
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    select: SelectProperty;
  }
}
