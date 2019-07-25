/**
 * Demo of fansPageCard. Pulls in fansPageCard assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/fans-page-card';

// Import demo assets
import twig from './fans-page-cards.twig';
import yaml from './fans-page-cards.yml';
import markdown from './fans-page-cards.md';

export default {
  twig,
  yaml,
  markdown,
};
