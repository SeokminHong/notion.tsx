import type { Client } from '@notionhq/client';

export type Color =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background';

export declare const tag: unique symbol;

type ArrayElement<T> = T extends Array<infer U> ? U : never;

type Children = ArrayElement<
  Parameters<Client['blocks']['children']['append']>[0]['children']
>;
export type RichTextItem = ArrayElement<
  Extract<Children, { type?: 'paragraph' }>['paragraph']['rich_text']
>;

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ElementTypeMap {}
