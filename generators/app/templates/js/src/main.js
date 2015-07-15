require.config({
  baeUrl: 'js',
  paths: {
    jquery: '../node_modules/jquery/dist/jquery.min',
    hogan: '../node_modules/hogan.js/dist/hogan-3.0.2.min.amd'
  }
});

requirejs(['jquery', 'card'], function ($, card) {
  $('#intro').hide();

  // shows 10 cards
  for (var i = 0; i < 10; i++) {
    // TODO
  }
});

