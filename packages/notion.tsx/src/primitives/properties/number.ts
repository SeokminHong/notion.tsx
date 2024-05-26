import { PropertyElement } from '../../types/properties.ts';

import type { PropertyPropsBase } from './common.ts';

export interface NumberProperty {
  number: number;
  type: 'number';
}

interface NumberProps extends PropertyPropsBase {
  value: number;
}

export default function Number({ name, value }: NumberProps) {
  return new PropertyElement(name, {
    type: 'number',
    number: value,
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    number: NumberProperty;
  }
}
