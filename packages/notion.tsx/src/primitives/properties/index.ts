import type { PropertyMap } from '../../types/properties.ts';

import MultiSelect from './multi-select.ts';
import Number from './number.ts';
import People from './people.ts';
import Select from './select.ts';
import Title from './title.ts';
import Url from './url.ts';

const Properties = {
  'multi-select': MultiSelect,
  number: Number,
  people: People,
  select: Select,
  title: Title,
  url: Url,
} as const satisfies {
  [K in keyof PropertyMap]: unknown;
};

export default Properties;
