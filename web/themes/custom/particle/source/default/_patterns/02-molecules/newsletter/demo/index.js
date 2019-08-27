/**
 * Demo of newsletter. Pulls in newsletter assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/newsletter';

// Import demo assets
import twig from './newsletters.twig';
import yaml from './newsletters.yml';
import markdown from './newsletters.md';

export default {
  twig,
  yaml,
  markdown,
};
