/**
 * Demo of highlightedText. Pulls in highlightedText assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'atoms/highlighted-text';

// Import demo assets
import twig from './highlighted-texts.twig';
import yaml from './highlighted-texts.yml';
import markdown from './highlighted-texts.md';

export default {
  twig,
  yaml,
  markdown,
};
