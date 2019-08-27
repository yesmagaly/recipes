/**
 * Demo of block. Pulls in block assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/block';

// Import demo assets
import twig from './blocks.twig';
import yaml from './blocks.yml';
import markdown from './blocks.md';

export default {
  twig,
  yaml,
  markdown,
};
