/**
 * Demo of blockTitle. Pulls in blockTitle assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'atoms/block-title';

// Import demo assets
import twig from './block-titles.twig';
import yaml from './block-titles.yml';
import markdown from './block-titles.md';

export default {
  twig,
  yaml,
  markdown,
};
