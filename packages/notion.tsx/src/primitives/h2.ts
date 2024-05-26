import type { TextNode } from '../jsx-runtime.ts';
import renderRichText from '../render/rich-text.ts';
import type { Color } from '../types/enum.ts';
import type { RichTextElement } from '../types/rich-text.ts';

interface H2Element {
  type: 'heading_2';
  heading_2: {
    rich_text: RichTextElement[];
    color?: Color;
    is_toggleable?: boolean;
  };
}

interface H2Props {
  children?: TextNode;
  color?: Color;
  toggleable?: boolean;
}

export default function H2({
  children,
  color,
  toggleable,
}: H2Props): H2Element {
  return {
    type: 'heading_2',
    heading_2: {
      rich_text: renderRichText(children),
      color,
      is_toggleable: toggleable,
    },
  };
}

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    heading_2: H2Element;
  }
}
