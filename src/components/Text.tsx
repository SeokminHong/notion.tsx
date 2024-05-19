import type { TextNode } from '../jsx-runtime.ts';
import renderTextNode from '../render/text-node.ts';
import type { Color, RichTextItem } from '../types.ts';
import { tag } from '../types.ts';

interface TextProps {
  children: TextNode;
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
      content: renderTextNode(children),
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
