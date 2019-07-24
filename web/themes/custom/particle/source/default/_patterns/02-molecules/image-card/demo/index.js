/**
 * Demo of imageCard. Pulls in imageCard assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/image-card';

// Import demo assets
import twig from './image-cards.twig';
import yaml from './image-cards.yml';
import markdown from './image-cards.md';

export default {
  twig,
  yaml,
  markdown,
};
