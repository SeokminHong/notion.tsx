import type { Node } from '../jsx-runtime.ts';
import renderPage from '../render/page.tsx';
import type { BlockObject } from '../types/block.ts';
import type { Property } from '../types/properties.ts';

type PageParent =
  | {
      parentDatabaseId: string;
      parentPageId?: never;
    }
  | {
      parentPageId: string;
      parentDatabaseId?: never;
    };

interface PagePropsBase {
  children: Node;
  // TODO
  // icon: Emoji | External
  // cover: External
}

type PageProps = PageParent & PagePropsBase;

function getParentField(value: PageParent) {
  if (value.parentPageId !== undefined) {
    return {
      type: 'page_id',
      page_id: value.parentPageId,
    };
  }
  return {
    type: 'database_id',
    database_id: value.parentDatabaseId,
  };
}

export class PageElement {
  constructor(
    readonly parent: ReturnType<typeof getParentField>,
    readonly properties: Record<string, Property>,
    readonly children: BlockObject[],
  ) {}
}

export default function Page({
  children,
  ...parentProps
}: PageProps): PageElement {
  const { properties, children: content } = renderPage(children);

  return new PageElement(
    getParentField(parentProps),
    Object.fromEntries(properties.entries()),
    content,
  );
}

declare module '../types/element.ts' {
  export interface ElementTypeMap {
    page: PageElement;
  }
}
