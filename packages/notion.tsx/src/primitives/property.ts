import { PropertyElement } from '../types/properties.ts';

import Properties from './properties/index.ts';

function Property<T extends keyof typeof Properties>({
  type,
  ...props
}: { type: T } & Parameters<(typeof Properties)[T]>[0]): PropertyElement {
  return Properties[type](props as never);
}

export default Property;
