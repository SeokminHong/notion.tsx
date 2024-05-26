import type { TextNode } from '../jsx-runtime.ts';
import renderRichText from '../render/rich-text.ts';
import type { Color } from '../types/enum.ts';
import type { RichTextElement } from '../types/rich-text.ts';

interface H3Element {
  type: 'heading_3';
  heading_3: {
    rich_text: RichTextElement[];
    color?: Color;
    is_toggleable?: boolean;
  };
}

interface H3Props {
  children?: TextNode;
  color?: Color;
  toggleable?: boolean;
}

export default function H3({
  children,
  color,
  toggleable,
}: H3Props): H3Element {
  return {
    type: 'heading_3',
    heading_3: {
      rich_text: renderRichText(children),
      color,
      is_toggleable: toggleable,
    },
  };
}

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    heading_3: H3Element;
  }
}
