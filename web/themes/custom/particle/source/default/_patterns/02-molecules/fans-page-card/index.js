/**
 * fansPageCard
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module styles
import './_fans-page-card.scss';

// Module template
import './_fans-page-card.twig';

export const name = 'fansPageCard';

export const defaults = {
  dummyClass: 'js-fansPageCard-exists',
};

/**
 * Components may need to run clean-up tasks if they are removed from DOM.
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Pertinent settings
 */
// eslint-disable-next-line no-unused-vars
export function disable($context, settings) {}

/**
 * Each component has a chance to run when its enable function is called. It is
 * given a piece of DOM ($context) and a settings object. We destructure our
 * component key off the settings object and provide an empty object fallback.
 * Incoming settings override default settings via Object.assign().
 *
 * @param {jQuery} $context - A piece of DOM
 * @param {Object} settings - Settings object
 */
export function enable($context, { fansPageCard = {} }) {
  // Find our component within the DOM
  const $fansPageCard = $('.fansPageCard', $context);
  // Bail if component does not exist
  if (!$fansPageCard.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = Object.assign(defaults, fansPageCard);
  // An example of what could be done with this component
  $fansPageCard.addClass(settings.dummyClass);
}

export default enable;
