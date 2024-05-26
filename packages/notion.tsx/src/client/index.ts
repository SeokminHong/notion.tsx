import { Client } from '@notionhq/client';

import { PageElement } from '../components/page.ts';
import type { JSX } from '../jsx-runtime.ts';

export default function notionTsx(client: Client) {
  return {
    createPage: async (args: JSX.Element) => {
      if (args instanceof PageElement) {
        return client.pages.create(args as never);
      }
      throw new TypeError('A `Page` element expected!');
    },
  };
}
