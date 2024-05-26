import { PropertyElement } from '../types/properties.ts';

import Properties from './properties/index.ts';

type PropertyProps<T extends keyof typeof Properties> = Parameters<
  (typeof Properties)[T]
>[0] & {
  type: T;
};

export default function Property<T extends keyof typeof Properties>({
  type,
  ...props
}: PropertyProps<T>): PropertyElement {
  return Properties[type](props as never);
}
