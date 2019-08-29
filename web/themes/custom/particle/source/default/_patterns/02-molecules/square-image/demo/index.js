/**
 * Demo of squareImage. Pulls in squareImage assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'molecules/square-image';

// Import demo assets
import twig from './square-images.twig';
import yaml from './square-images.yml';
import markdown from './square-images.md';

export default {
  twig,
  yaml,
  markdown,
};
