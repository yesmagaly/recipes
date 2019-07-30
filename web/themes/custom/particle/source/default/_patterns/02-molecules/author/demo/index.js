/**
 * Demo of author. Pulls in author assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/author';

// Import demo assets
import twig from './authors.twig';
import yaml from './authors.yml';
import markdown from './authors.md';

export default {
  twig,
  yaml,
  markdown,
};
