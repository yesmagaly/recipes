/**
 * Demo of album. Pulls in album assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/album';

// Import demo assets
import twig from './albums.twig';
import yaml from './albums.yml';
import markdown from './albums.md';

export default {
  twig,
  yaml,
  markdown,
};
