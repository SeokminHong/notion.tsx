interface PersonProps {
  id: string;
}

interface PersonElement {
  id: string;
  person: {};
  type: 'person';
}

export default function Person({ id }: PersonProps) {
  return {
    id,
    person: {},
    type: 'person',
  };
}

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    person: PersonElement;
  }
}
