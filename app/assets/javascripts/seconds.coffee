class @Seconds
  constructor: (value)->
    @value = value

  toMinutes: ->
    minute: parseInt(@value / 60)
    seconds: @value % 60