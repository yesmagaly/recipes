<?php

/**
 * @file
 * Functions to support theming page layout in the Particle theme.
 */

/**
 * Implements hook_preprocess_HOOK().
 */
function particle_preprocess_page(&$variables) {
  $moduleHandler = \Drupal::service('module_handler');
  if ($moduleHandler->moduleExists('components')) {
    $variables['has_components_module'] = TRUE;
  }

  // Load the site name out of configuration.
  $config = \Drupal::config('system.site');
  $variables['site_name'] = $config->get('name');
  $variables['site_slogan'] = $config->get('slogan');
}
