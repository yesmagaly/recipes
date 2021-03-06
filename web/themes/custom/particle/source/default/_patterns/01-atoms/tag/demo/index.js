/**
 * Demo of tag. Pulls in tag assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'atoms/tag';

// Import demo assets
import twig from './tags.twig';
import yaml from './tags.yml';
import markdown from './tags.md';

export default {
  twig,
  yaml,
  markdown,
};
