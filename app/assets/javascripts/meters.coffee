class @Meters
  constructor: (value) ->
    @value = parseFloat(value)

  toMiles: ->
    @value * 0.000621371