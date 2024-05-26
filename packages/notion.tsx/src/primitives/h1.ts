import type { TextNode } from '../jsx-runtime.ts';
import renderRichText from '../render/rich-text.ts';
import type { Color } from '../types/enum.ts';
import type { RichTextElement } from '../types/rich-text.ts';

interface H1Element {
  type: 'heading_1';
  heading_1: {
    rich_text: RichTextElement[];
    color?: Color;
    is_toggleable?: boolean;
  };
}

interface H1Props {
  children?: TextNode;
  color?: Color;
  toggleable?: boolean;
}

export default function H1({
  children,
  color,
  toggleable,
}: H1Props): H1Element {
  return {
    type: 'heading_1',
    heading_1: {
      rich_text: renderRichText(children),
      color,
      is_toggleable: toggleable,
    },
  };
}

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    heading_1: H1Element;
  }
}
