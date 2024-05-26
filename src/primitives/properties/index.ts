import type { PropertyMap } from '../../types/properties.ts';

import Title from './title.ts';

const Properties = {
  title: Title,
} as const satisfies {
  [K in keyof PropertyMap]: unknown;
};

export default Properties;
