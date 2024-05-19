import type { Node } from '../../jsx-runtime.ts';
import renderRichText from '../../render/rich-text.ts';
import type { ElementTypeMap } from '../../types/element.ts';
import { PropertyElement } from '../../types/properties.ts';

import type { PropertyPropsBase } from './common.ts';

export interface TitleProperty {
  title: Array<ElementTypeMap['text']>;
  type: 'title';
}

interface TitleProps extends PropertyPropsBase {
  children: Node;
}

export default function Title({ name, children }: TitleProps) {
  return new PropertyElement(name, {
    type: 'title',
    title: renderRichText(children),
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    title: TitleProperty;
  }
}
