import { Client } from '@notionhq/client';
import { Code, Paragraph, Text } from 'notion-jsx';

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
      title: [<Text>text page!</Text>],
    },
  },
  children: (
    <>
      <Paragraph
        slot={
          <Code language="javascript">
            <Text bold>console</Text>
            .log(a)
          </Code>
        }
      >
        Test {a}
        {b} <Text italic>content</Text>
      </Paragraph>
      <Paragraph>
        <Text>New paragraph</Text>
      </Paragraph>
    </>
  ),
});

console.log(res);
