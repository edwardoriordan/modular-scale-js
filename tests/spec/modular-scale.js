describe("modular-scale", function() {
  
  var modularScaleGolden;
  var scaleGoldenShouldBe;
  
  var modularScalePerfectFifth;
  var scalePerfectFifth;

  beforeEach(function() {

    // http://modularscale.com/scale/?px1=16&px2=1000&ra1=1.618&ra2=0
    scaleGoldenShouldBe = [ 
      16.000,
      21.290,
      25.888,
      34.447,
      41.887,
      55.735,
      67.773,
      90.179,
      109.657,
      145.910,
      177.425
    ];
    scaleGoldenMinusShouldBe = [
      16.000,
      13.158,
      9.889,
      8.132,
      6.112,
      5.026,
      3.778
    ];

    scaleGoldenShouldBe = scaleGoldenShouldBe.map(function(val) {
      return Math.round(val);
    });
    scaleGoldenMinusShouldBe = scaleGoldenMinusShouldBe.map(function(val) {
      return Math.round(val);  
    });

    modularScaleGolden = new ModularScale({
      baseSize: 16,
      importantNumber: 1000,
      ratio: 'golden',
      roundToDecimalPlaces: 0
    });

    modularScalePerfectFifth = new ModularScale({
      baseSize: 24,
      importantNumber: 500,
      ratio: 'fifth',
      roundToDecimalPlaces: 0
    });

    // http://modularscale.com/scale/?px1=24&px2=500&ra1=1.5&ra2=0
    scalePerfectFifth = [
      24.000,
      29.263,
      36.000,
      43.895,
      54.000,
      65.843,
      81.000,
      98.765,
      121.500,
      148.148,
      182.250
    ];
    scalePerfectFifthMinus = [
      24.000,
      19.509,
      16.000,
      13.006,
      10.667,
      8.671,
      7.111
    ];

    scalePerfectFifth = scalePerfectFifth.map(function(val) {
      return Math.round(val);
    });
    scalePerfectFifthMinus = scalePerfectFifthMinus.map(function(val) {
      return Math.round(val);
    });
  });

  it("for scale 0 to 10 all should match [baseSize: 16, importantNumber: 1000, ratio: 'golden']", function() {
    for (var i = 0; i <= 10; i++) {
      expect(modularScaleGolden.ms(i)).toEqual(scaleGoldenShouldBe[i]);
    }
  });
  it("for scale 0 to -6 all should match [baseSize: 16, importantNumber: 1000, ratio: 'golden']", function() {
    for (var i = 0; i <= 6; i++) {
      expect(modularScaleGolden.ms(i * -1)).toEqual(scaleGoldenMinusShouldBe[i]);
    }
  });

  it("for scale 0 to 10 all should match [baseSize: 22, importantNumber: 500, ratio: 'fifth']", function() {
    for (var i = 0; i <= 10; i++) {
      expect(modularScalePerfectFifth.ms(i)).toEqual(scalePerfectFifth[i]);
    }
  });
  it("for scale 0 to -6 all should match [baseSize: 22, importantNumber: 500, ratio: 'fifth']", function() {
    for (var i = 0; i <= 6; i++) {
      expect(modularScalePerfectFifth.ms(i * -1)).toEqual(scalePerfectFifthMinus[i]);
    }
  });
});