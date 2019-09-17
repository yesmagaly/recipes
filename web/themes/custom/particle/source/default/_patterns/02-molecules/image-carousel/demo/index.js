/**
 * Demo of imageCarousel. Pulls in imageCarousel assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/image-carousel';

// Import demo assets
import twig from './image-carousels.twig';
import yaml from './image-carousels.yml';
import markdown from './image-carousels.md';

export default {
  twig,
  yaml,
  markdown,
};
