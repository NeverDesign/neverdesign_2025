/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
// THIRD PARTY
// this "modifies" the jquery module: adding behavior to it
const $ = require('jquery');
// create global $ and jQuery variables
global.$ = global.jQuery = $;
// the bootstrap module doesn't export/return anything
require('bootstrap');

// Styles
import './styles/app.scss';

// Scripts
import './scripts/core.js'

