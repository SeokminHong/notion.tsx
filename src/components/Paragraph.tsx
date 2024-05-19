import type { Node, SlotNode } from '../jsx-runtime.ts';
import renderRichText from '../render/rich-text.ts';
import renderSlotNode from '../render/slot-node.ts';
import type { BlockObject } from '../types/block.ts';
import type { Color } from '../types/enum.ts';
import type { RichTextElement } from '../types/rich-text.ts';

interface ParagraphProps {
  color?: Color;
  children: Node;
  slot?: SlotNode;
}

interface ParagraphElement {
  type: 'paragraph';
  paragraph: {
    rich_text: RichTextElement[];
    color?: Color;
    children?: BlockObject[];
  };
}

export default function Paragraph({
  children,
  color,
  slot,
}: ParagraphProps): ParagraphElement {
  return {
    type: 'paragraph',
    paragraph: {
      rich_text: renderRichText(children),
      color,
      children: renderSlotNode(slot),
    },
  };
}

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    paragraph: ParagraphElement;
  }
}
