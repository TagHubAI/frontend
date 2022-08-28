import { createConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { media } from 'sanity-plugin-media';
import { visionTool } from '@sanity/vision';

import { schemaTypes } from './schemas';

export default createConfig({
  name: 'default',
  title: 'TagHub',

  projectId: 'd78zdkxc',
  dataset: 'production',

  plugins: [deskTool(), media(), visionTool()],

  schema: {
    types: schemaTypes,
  },
});
