import type { Color, RichTextItem } from '../types.ts';
import { tag } from '../types.ts';

interface TextProps {
  children: string;
  link?: string;
  bold?: boolean;
  italic?: boolean;
  strikethrough?: boolean;
  underline?: boolean;
  code?: boolean;
  color?: Color;
}

type TextElement = Extract<RichTextItem, { type?: 'text' }>;

function Text({ children, link, ...annotations }: TextProps): TextElement {
  return {
    text: {
      content: children,
      link:
        link === undefined
          ? undefined
          : {
              url: link,
            },
    },
    annotations,
  };
}

export default Text as typeof Text & {
  [tag]: 'text';
};

declare module '../types.ts' {
  export interface ElementTypeMap {
    text: TextElement;
  }
}
