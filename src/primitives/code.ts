import type { Node } from '../jsx-runtime.ts';
import renderRichText from '../render/rich-text.ts';
import type { Language } from '../types/enum.ts';
import type { RichTextElement } from '../types/rich-text.ts';

interface CodeProps {
  language: Language;
  children: Node;
  caption?: Node;
}

interface CodeElement {
  type: 'code';
  code: {
    rich_text: RichTextElement[];
    language: Language;
    caption?: RichTextElement[];
  };
}

export default function Code({
  language,
  children,
  caption,
}: CodeProps): CodeElement {
  return {
    type: 'code',
    code: {
      language,
      rich_text: renderRichText(children),
      caption: renderRichText(caption),
    },
  };
}

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    code: CodeElement;
  }
}
