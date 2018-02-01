import { contactForm } from './contact-jquery.js'
import { initMap } from './map.js';
import { nav } from './nav.js';

window.initMap = initMap;

document.addEventListener('DOMContentLoaded', function() {
    contactForm();
    nav();
});