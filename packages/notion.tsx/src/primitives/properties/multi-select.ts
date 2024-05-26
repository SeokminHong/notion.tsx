import type { Node } from '../../jsx-runtime.ts';
import renderOptions from '../../render/options.ts';
import type { Color } from '../../types/enum.ts';
import { PropertyElement } from '../../types/properties.ts';

import type { PropertyPropsBase } from './common.ts';

export interface MultiSelectProperty {
  multi_select: Array<{
    id?: string;
    name?: string;
    color?: Color;
    description?: string;
  }>;
  type: 'multi_select';
}

interface MultiSelectProps extends PropertyPropsBase {
  children?: Node;
}

export default function MultiSelect({ name, children }: MultiSelectProps) {
  return new PropertyElement(name, {
    type: 'multi_select',
    multi_select: renderOptions(children),
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    'multi-select': MultiSelectProperty;
  }
}
