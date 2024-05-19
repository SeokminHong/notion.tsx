import { Client } from '@notionhq/client';
import { Text } from 'notion-jsx';

import 'dotenv/config';

const client = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.DATABASE_UUID;

if (databaseId === undefined) {
  throw new Error('env DATABASE_UUID is not provided.');
}

await client.databases.retrieve({
  database_id: databaseId,
});

const a = undefined as number | undefined;
const b = 3 as number | undefined;

const res = await client.pages.create({
  parent: {
    database_id: databaseId,
  },
  properties: {
    Name: {
      type: 'title',
      title: [
        {
          type: 'text',
          text: {
            content: 'test page!',
          },
        },
      ],
    },
  },
  children: [
    {
      paragraph: {
        rich_text: [
          <Text>
            Test {a}
            {b} content
          </Text>,
        ],
        children: [
          {
            code: {
              language: 'javascript',
              rich_text: (
                <>
                  <Text bold>console</Text>
                  <Text>.log(a)</Text>
                </>
              ),
            },
          },
        ],
      },
    },
    {
      paragraph: {
        rich_text: [<Text>New paragraph</Text>],
      },
    },
  ],
});

console.log(res);
