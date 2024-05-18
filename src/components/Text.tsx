import type { Color } from '../types.ts';

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

export default function Text({ children, link, ...annotations }: TextProps) {
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
