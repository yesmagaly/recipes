/**
 * Demo of header. Pulls in header assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/header';

// Import demo assets
import twig from './headers.twig';
import yaml from './headers.yml';
import markdown from './headers.md';

export default {
  twig,
  yaml,
  markdown,
};
