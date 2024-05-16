import { Client } from '@notionhq/client';

import 'dotenv/config';

const client = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.DATABASE_UUID;

await client.databases.retrieve({
  database_id: databaseId,
});
type Color =
  | 'default'
  | 'gray'
  | 'brown'
  | 'orange'
  | 'yellow'
  | 'green'
  | 'blue'
  | 'purple'
  | 'pink'
  | 'red'
  | 'gray_background'
  | 'brown_background'
  | 'orange_background'
  | 'yellow_background'
  | 'green_background'
  | 'blue_background'
  | 'purple_background'
  | 'pink_background'
  | 'red_background';

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

function Text({ children, link, ...annotations }: TextProps) {
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
        rich_text: [<Text>Test content</Text>],
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
