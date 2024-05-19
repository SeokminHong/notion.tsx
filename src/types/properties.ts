// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PropertyMap {}

export type Property = PropertyMap[keyof PropertyMap];

export class PropertyElement {
  constructor(
    readonly name: string,
    readonly property: Property,
  ) {}
}

export type PropertiesMap = Map<string, Property>;

declare module './element.ts' {
  export interface ElementTypeMap {
    property: PropertyElement;
  }
}
