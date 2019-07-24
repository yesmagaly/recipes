/**
 * Demo of horizontalFeature. Pulls in horizontalFeature assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/horizontal-feature';

// Import demo assets
import twig from './horizontal-features.twig';
import yaml from './horizontal-features.yml';
import markdown from './horizontal-features.md';

export default {
  twig,
  yaml,
  markdown,
};
