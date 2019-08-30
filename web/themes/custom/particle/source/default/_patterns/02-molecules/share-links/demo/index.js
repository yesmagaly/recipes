/**
 * Demo of shareLinks. Pulls in shareLinks assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/share-links';

// Import demo assets
import twig from './share-linkss.twig';
import yaml from './share-linkss.yml';
import markdown from './share-linkss.md';

export default {
  twig,
  yaml,
  markdown,
};
