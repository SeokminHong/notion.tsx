import type { TextNode } from '../jsx-runtime.ts';
import renderTextNode from '../render/text-node.ts';
import type { Annotations } from '../types/common.ts';

interface TextProps extends Annotations {
  children: TextNode;
  link?: string;
}

interface TextElement {
  type: 'text';
  text: {
    content: string;
    link?: {
      url: string;
    } | null;
  };
  annotations?: Annotations;
}

export default function Text({
  children,
  link,
  ...annotations
}: TextProps): TextElement {
  return {
    type: 'text',
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

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    text: TextElement;
  }
}
