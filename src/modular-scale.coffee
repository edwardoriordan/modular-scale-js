class ModularScale

  baseOptions = 
    ratio: 'golden'
    baseSize: 16
    importantNumber: 100
    roundToDecimalPlaces: 2
    debug: false

  constructor: (@options = baseOptions) ->
    @scale = []

    @ratios =
      double_octave: 4/1
      major_twelfth: 3/1
      major_eleventh: 8/3
      major_tenth: 5/2
      octave: 2/1
      major_seventh: 15/8
      minor_seventh: 16/9
      major_sixth: 5/3
      minor_sixth: 8/5
      fifth: 3/2
      augmented_fourth: Math.sqrt(2) / 1
      fourth: 4/3
      major_third: 5/4
      minor_third: 6/5
      major_second: 9/8
      minor_second: 16/15
      golden : 1/2 + (Math.sqrt(5) / 2)

    # if passed in options don't exist
    # use defaults instead
    @options.baseSize = baseOptions.baseSize if not @options.baseSize?
    @options.importantNumber = baseOptions.ratio if not @options.importantNumber?
    @options.debug = baseOptions.debug if not @options.debug?
    @options.roundToDecimalPlaces = baseOptions.roundToDecimalPlaces if not @options.roundToDecimalPlaces?
    @options.ratio = if @options.ratio? then @ratios[@options.ratio] else @ratios[baseOptions.ratio]

    @_createScale()

  # API
  ms: (multiple) ->
    indexOfBase = @scale.indexOf(@options.baseSize)
    @_roundToDecimalPlaces(@scale[indexOfBase + multiple], @options.roundToDecimalPlaces)

  set: (prop, value) ->
    @options[prop] = value
    @_createScale()
    return @options[prop]

  get: (prop) ->
    @options[prop]

  # Private
  _createScale: () ->
    @scale = [];
    @scale = @scale.concat(
      @_createFontValuesFrom(@options.baseSize), 
      @_createFontValuesFrom(@options.importantNumber)
    ).sort((a, b) -> a - b);

    @_debug() if @options.debug 
    
    return @scale

  _createFontValuesFrom: (sizeValue) ->
    @_createFontValue(sizeValue, i) for i in [-15..15]

  _createFontValue: (sizeValue, i) ->
    value = Math.pow(@options.ratio, i) * sizeValue
    @_roundToDecimalPlaces(value, 4)

  _roundToDecimalPlaces: (number, decimalPlaces) ->
    decimalPlaces = 0 if decimalPlaces < 0
    if decimalPlaces > 1
      Math.round( number * (10 * decimalPlaces) ) / (10 * decimalPlaces)
    else
      Math.round(number)
    
    

  _debug: ->
    console.log("------------------------------")
    console.log("font size: " + @options.baseSize)
    console.log("important number: " + @options.importantNumber)
    console.log("ratio: " + @options.ratio)
    console.log(@scale)
    console.log(@_makeMsUrl(
      @options.baseSize, @options.importantNumber, @options.ratio)
    )

  _makeMsUrl: (px1, px2, ra1) -> 
    "http://modularscale.com/scale/?px1="+px1+"&px2="+px2+"&ra1="+ra1

# Export
if module? && require?
  module.exports = ModularScale 
else
  @ModularScale = ModularScale