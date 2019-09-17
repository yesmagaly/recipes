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

/**
 * Implements hook_theme_suggestions_HOOK_alter().
 */
function particle_theme_suggestions_page_alter(array &$suggestions, array $variables) {
  if ($node = \Drupal::routeMatch()->getParameter('node')) {
    $content_type = $node->bundle();
    $suggestions[] = 'page__'.$content_type;
  }
}
