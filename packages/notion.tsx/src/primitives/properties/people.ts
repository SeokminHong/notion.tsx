import type { Node } from '../../jsx-runtime.ts';
import renderPeople from '../../render/people.ts';
import type { ElementTypeMap } from '../../types/element.ts';
import { PropertyElement } from '../../types/properties.ts';

import type { PropertyPropsBase } from './common.ts';

export interface PeopleProperty {
  people: Array<ElementTypeMap['person']>;
  type: 'people';
}

interface PeopleProps extends PropertyPropsBase {
  children?: Node;
}

export default function People({ name, children }: PeopleProps) {
  return new PropertyElement(name, {
    type: 'people',
    people: renderPeople(children),
  });
}

declare module '../../types/properties.ts' {
  export interface PropertyMap {
    people: PeopleProperty;
  }
}
