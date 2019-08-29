/**
 * Demo of verticalLinks. Pulls in verticalLinks assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/vertical-links';

// Import demo assets
import twig from './vertical-linkss.twig';
import yaml from './vertical-linkss.yml';
import markdown from './vertical-linkss.md';

export default {
  twig,
  yaml,
  markdown,
};
