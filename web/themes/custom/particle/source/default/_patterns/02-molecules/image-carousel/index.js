/**
 * imageCarousel
 */

import $ from 'jquery';

// Module dependencies
import 'protons';

// Module styles
import './_image-carousel.scss';

// Module template
import './_image-carousel.twig';

// Slick carousel library
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const name = 'imageCarousel';

export const defaults = {
  dummyClass: 'js-imageCarousel-exists',
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
export function enable($context, { imageCarousel = {} }) {
  // Find our component within the DOM
  const $imageCarousel = $('.imageCarousel', $context);
  // Bail if component does not exist
  if (!$imageCarousel.length) {
    return;
  }
  // Merge defaults with incoming settings
  const settings = Object.assign(defaults, imageCarousel);
  // An example of what could be done with this component
  $imageCarousel.addClass(settings.dummyClass);
}

$('.image-carousel').slick({
  dots: true,
  slidesToshow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
});
export default enable;
