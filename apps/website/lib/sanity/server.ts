/**
 * Server-side Sanity utilities. By having these in a separate file from the
 * utilities we use on the client side, we are able to tree-shake (remove)
 * code that is not used on the client side.
 */
import { createClient, SanityClient } from 'next-sanity';
import { sanityConfig } from './config';

export const sanityClient: SanityClient = createClient(sanityConfig);

export const previewClient: SanityClient = createClient({
  ...sanityConfig,
  useCdn: false,
  token:
    process.env.SANITY_API_READ_TOKEN || process.env.SANITY_API_WRITE_TOKEN,
});

export const getClient = (preview: boolean): SanityClient =>
  preview ? previewClient : sanityClient;
