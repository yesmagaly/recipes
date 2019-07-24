/**
 * Demo of date. Pulls in date assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'atoms/date';

// Import demo assets
import twig from './dates.twig';
import yaml from './dates.yml';
import markdown from './dates.md';

export default {
  twig,
  yaml,
  markdown,
};
