import { Client } from '@notionhq/client';

import { PageElement } from '../components/page.ts';
import type { JSX } from '../jsx-runtime.ts';

type CreateFunction = (
  element: JSX.Element,
) => ReturnType<Client['pages']['create']>;

export interface Pages extends Omit<Client['pages'], 'create'> {
  create: CreateFunction;
}

export function makeCreate(client: Client): CreateFunction {
  return async (args) => {
    if (args instanceof PageElement) {
      return client.pages.create(args as never);
    }
    throw new TypeError('A `Page` element expected!');
  };
}
