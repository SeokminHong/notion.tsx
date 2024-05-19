import { Client } from '@notionhq/client';

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
      title: [<text>text page!</text>],
    },
  },
  children: (
    <>
      <p
        slot={
          <code language="javascript">
            <text bold>console</text>
            .log(a)
          </code>
        }
      >
        Test {a}
        {b} <text italic>content</text>
      </p>
      <p>New paragraph</p>
    </>
  ),
});

console.log(res);
