'use strict';
/*global $*/

$(function() {
  $('#to-projects').on('click', () => {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 1000);
  });

  $('#to-landing-page').on('click', () => {
    $('html, body').animate({
      scrollTop: $('#landing').offset().top
    }, 1000);
  });
});