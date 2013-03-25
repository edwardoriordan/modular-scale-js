jQuery(document).ready(function($) {
  
  var modular = new ModularScale({
    // baseSize: 24,
    debug: true,
    importantNumber: 500,
    ratio: 'golden'
  });

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
  }

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
  }

  var init = function() {
    $('#special-number').val(modular.get('importantNumber'));
    $('#font-size').val(modular.get('baseSize'));
    $('#ratio').val('golden');
    
    $('#font-size').change();
    showHideNumVales();
  }

  var showHideNumVales = function() {
    $('body').keydown(function(event) {
      if (event.keyCode === 83) {
        $('.ui').toggle();
      }
    });
  }

  setUiEventHandler();
  init();
});

//console.log( msNeg(1) );