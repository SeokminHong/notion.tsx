# Notion.jsx

## How to use

```sh
npm install notion.jsx @notionhq/client
```

```jsonc
// tsconfig.json
{
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "notion.jsx",
  },
}
```

## Example

### Code

```tsx
import { Client, Page, Property } from 'notion.jsx';

const client = new Client({
  auth: process.env.NOTION_API_KEY,
});

await client.pages.create(
  <Page parentDatabaseId={databaseId}>
    <Property.Title name="Name">text page!</Property.Title>
    <p
      slot={
        /** Child block */
        <code language="javascript">
          <text bold>console</text>
          .log(a)
        </code>
      }
    >
      {/** Block content */}
      Test <text italic>content</text>
    </p>
    123
    <p>New paragraph</p>
  </Page>,
);
```

### Result

![Result page](./assets/example-screenshot.png)

## Supported Syntaxes

### Block elements

- [x] `p`: Paragraph block
- [x] `code`: Code block
- [ ] `embed`
- [ ] `bookmark`
- [ ] `img`
- [ ] `video`
- [ ] `pdf`
- [ ] `file`
- [ ] `audio`
- [ ] `math`
- [ ] `divider`
- [ ] `breadcrumb`
- [ ] `toc`
- [ ] `a`
- [ ] `table`
- [ ] `tr`
- [ ] `column`
- [ ] `h1`
- [ ] `h2`
- [ ] `h3`
- [ ] `ul`
- [ ] `ol`
- [ ] `todo`
- [ ] `li`
- [ ] `q`
- [ ] `summary`
- [ ] `template`
- [ ] `callout`
- [ ] `sync`

### Rich text elements

- [x] `text`: `string` children are also fell back to `text` element
- [ ] `a`
- [ ] `user`
- [ ] `time`
- [ ] `page`
- [ ] `database`
- [ ] `template-mention`: ?
- [ ] `math`