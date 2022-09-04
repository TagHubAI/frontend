import createImageUrlBuilder from '@sanity/image-url';
import {
  SanityImageSource,
  SanityProjectDetails,
} from '@sanity/image-url/lib/types/types';
import { createPreviewSubscriptionHook, ProjectConfig } from 'next-sanity';
import { sanityConfig } from './config';

export const imageBuilder = createImageUrlBuilder(
  sanityConfig as SanityProjectDetails
);

export const urlForImage = (source: SanityImageSource) =>
  imageBuilder.image(source).auto('format').fit('max');

export const usePreviewSubscription = createPreviewSubscriptionHook(
  sanityConfig as ProjectConfig
);
