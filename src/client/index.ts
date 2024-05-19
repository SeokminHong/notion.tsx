import { Client as RawClient } from '@notionhq/client';

import type { Pages } from './pages.ts';
import { makeCreate } from './pages.ts';

export default class Client {
  private readonly client: RawClient;
  readonly pages: Pages;

  constructor(options?: ConstructorParameters<typeof RawClient>[0]) {
    this.client = new RawClient(options);

    this.pages = {
      create: makeCreate(this.client),
      retrieve: async (args) => this.client.pages.retrieve(args),
      update: async (args) => this.client.pages.update(args),
      properties: {
        retrieve: async (args) => this.client.pages.properties.retrieve(args),
      },
    };
  }

  request: RawClient['request'] = async (params) => this.client.request(params);

  readonly blocks: RawClient['blocks'] = {
    retrieve: async (args) => this.client.blocks.retrieve(args),
    update: async (args) => this.client.blocks.update(args),
    delete: async (args) => this.client.blocks.delete(args),
    children: {
      append: async (args) => this.client.blocks.children.append(args),
      list: async (args) => this.client.blocks.children.list(args),
    },
  };

  readonly databases: Omit<RawClient['databases'], 'list'> = {
    retrieve: async (args) => this.client.databases.retrieve(args),
    query: async (args) => this.client.databases.query(args),
    create: async (args) => this.client.databases.create(args),
    update: async (args) => this.client.databases.update(args),
  };

  readonly users: RawClient['users'] = {
    retrieve: async (args) => this.client.users.retrieve(args),
    list: async (args) => this.client.users.list(args),
    me: async (args) => this.client.users.me(args),
  };

  readonly comments: RawClient['comments'] = {
    create: async (args) => this.client.comments.create(args),
    list: async (args) => this.client.comments.list(args),
  };

  search: RawClient['search'] = async (args) => this.client.search(args);

  readonly oauth: RawClient['oauth'] = {
    token: async (args) => this.client.oauth.token(args),
  };
}
