/**
 * Demo of infoBlock. Pulls in infoBlock assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/info-block';

// Import demo assets
import twig from './info-blocks.twig';
import yaml from './info-blocks.yml';
import markdown from './info-blocks.md';

export default {
  twig,
  yaml,
  markdown,
};
