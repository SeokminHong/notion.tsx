import { PropertyElement } from '../../types/properties.ts';

import type { PropertyPropsBase } from './common.ts';

export interface UrlProperty {
  url: string;
  type: 'url';
}

interface UrlProps extends PropertyPropsBase {
  url: string;
}

export default function Url({ name, url }: UrlProps) {
  return new PropertyElement(name, {
    type: 'url',
    url,
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    url: UrlProperty;
  }
}
