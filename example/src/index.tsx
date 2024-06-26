import { Client } from "@notionhq/client";
import { notionTsx, Page } from "notion.tsx";

import "dotenv/config";

const client = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.DATABASE_UUID;

if (databaseId === undefined) {
  throw new Error("env DATABASE_UUID is not provided.");
}

await client.databases.retrieve({
  database_id: databaseId,
});

const a = undefined as number | undefined;
const b = 3 as number | undefined;

await notionTsx(client).createPage(
  <Page parentDatabaseId={databaseId}>
    <property type="title" name="Name">
      text page!
    </property>
    <property type="select" name="Test Select">
      <option name="aaa" />
    </property>
    <property type="multi-select" name="Tags">
      <option name="Notion" />
      <option name="API" />
    </property>
    <property type="number" name="Number" value={25} />
    <property type="url" name="URL" url="https://github.com" />
    <property type="people" name="Person" />
    <h1>Title!</h1>
    <h2 toggleable>test</h2>
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
    123
    <p>New paragraph</p>
  </Page>
);
