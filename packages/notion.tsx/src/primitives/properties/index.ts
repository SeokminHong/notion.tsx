import type { PropertyMap } from '../../types/properties.ts';

import MultiSelect from './multi-select.ts';
import Select from './select.ts';
import Title from './title.ts';

const Properties = {
  title: Title,
  select: Select,
  'multi-select': MultiSelect,
} as const satisfies {
  [K in keyof PropertyMap]: unknown;
};

export default Properties;
