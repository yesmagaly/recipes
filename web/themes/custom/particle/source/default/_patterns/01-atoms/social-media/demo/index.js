/**
 * Demo of socialMedia. Pulls in socialMedia assets, and provides demo-only assets.
 *
 * (This file is NOT imported by the design system, but is included as part of
 * a Pattern Lab app.)
 */

// Import component assets
import 'atoms/social-media';

// Import demo assets
import twig from './social-medias.twig';
import yaml from './social-medias.yml';
import markdown from './social-medias.md';

export default {
  twig,
  yaml,
  markdown,
};
