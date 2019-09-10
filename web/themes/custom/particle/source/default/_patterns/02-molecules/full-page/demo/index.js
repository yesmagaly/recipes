/**
 * Demo of fullPage. Pulls in fullPage assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/full-page';

// Import demo assets
import twig from './full-pages.twig';
import yaml from './full-pages.yml';
import markdown from './full-pages.md';

export default {
  twig,
  yaml,
  markdown,
};
