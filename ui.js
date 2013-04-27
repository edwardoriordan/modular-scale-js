jQuery(document).ready(function($) {

  var modular = new ModularScale({
    baseSize: 18,
    debug: true,
    importantNumber: 150,
    ratio: 'golden'
  });

  addSelectlistContent('#font-family', FONT_OBJECTS);
  addSelectlistContent('#font-family-headings', FONT_OBJECTS);

  var applyFontSize = function() {
    $('.ms0').css('font-size', modular.ms(0));
    $('.ms1').css('font-size', modular.ms(1));
    $('.ms2').css('font-size', modular.ms(2));
    $('.ms3').css('font-size', modular.ms(3));
    $('.ms4').css('font-size', modular.ms(4));
    $('.ms5').css('font-size', modular.ms(5));
    $('.ms6').css('font-size', modular.ms(6));
    $('.ms7').css('font-size', modular.ms(7));
    $('.ms8').css('font-size', modular.ms(8));
    $('.ms9').css('font-size', modular.ms(9));
    $('.intro').css('font-size', modular.ms(-1));
  };

  var setUiEventHandler = function() {
    $('#special-number').change(function(){
      modular.set('importantNumber', $(this).val() * 1);
      applyFontSize();
    });

    $('#ratio').change(function(){
      modular.set('ratio', modular.ratios[$(this).val()]);
      applyFontSize();
    });

    $('#font-size').change(function(){
      modular.set('baseSize', $(this).val() * 1);
      applyFontSize();
    });

    $('.class-range').change(function() {
      $(this).parent().removeClass().addClass('ms' + $(this).val());
      applyFontSize();
    });

    $('.class-range').change(function() {
      $(this).parent().removeClass().addClass('ms' + $(this).val());
      applyFontSize();
    });

    $('.css-property').change(function(event) {
      var cssProperty = this.getAttribute('data-css-property');

      var cssObj = {};
      cssObj[cssProperty] = $(this).val();
      $('.content').css(cssObj);
    });

    $('#font-family').on('change', function(){
      var id = $(this).val();
      $('.content').css({
          'font-family': FONT_OBJECTS[id].fontName,
          'font-weight': FONT_OBJECTS[id].weight,
          'font-style': FONT_OBJECTS[id].style
      });
    });
    $('#font-family-headings').on('change', function(){
      var id = $(this).val();
      $('h1,h2,h3,h4,h5,h6').css({
          'font-family': FONT_OBJECTS[id].fontName,
          'font-weight': FONT_OBJECTS[id].weight,
          'font-style': FONT_OBJECTS[id].style
      });
    });
  };

  var init = function() {
    $('#special-number').val(modular.get('importantNumber'));
    $('#font-size').val(modular.get('baseSize'));
    $('#ratio').val('golden');
    $('#font-size').change();
    showHideNumVales();
  };

  var showHideNumVales = function() {
    $('body').keydown(function(event) {
      // 's'
      if (event.keyCode === 83) {
        $('.ui').toggleClass('hide');
      }
    });

    // $('h1, h2, h3, h4, h5, h6').keydown(function(event) {
    //   var scale;
    //   if (event.keyCode === 38) {
    //     scale = getScale(this) + 1;
    //     $(this).removeClass().addClass('ms' + scale);
    //     applyFontSize();
    //   }
    //   if (event.keyCode === 40) {
    //     scale = getScale(this) - 1;
    //     $(this).removeClass().addClass('ms' + scale);
    //     applyFontSize();
    //   }
    // });
  };

  var headingScales = function() {
    $('.class-range').hide();
    $('h1, h2, h3, h4, h5, h6').hover(function() {
      $(this).find('.class-range').show();
    }, function() {
      $(this).find('.class-range').hide();
    });
  };

  var getScale = function(elem) {
    return elem.className.replace('ms', '') * 1;
  };

  headingScales();
  setUiEventHandler();
  init();
});

//console.log( msNeg(1) );