
var traverse = require('traverse');


/**
 * Expose `parent`.
 */

module.exports = parent;


/**
 * Get the previous sibling for an `el`.
 *
 * @param {Element} el
 * @param {String} selector (optional)
 */

function parent (el, selector) {
  el = traverse('parentNode', el, selector)[0];
  return el || null;
}