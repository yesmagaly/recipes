/**
 * Demo of columns. Pulls in columns assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/columns';

// Import demo assets
import twig from './columnss.twig';
import yaml from './columnss.yml';
import markdown from './columnss.md';

export default {
  twig,
  yaml,
  markdown,
};
