Meters = (value) ->
  @value = parseFloat(value)
Seconds = (value) ->
  @value = parseInt(value)
GarminCourse = (data, options) ->
  @data = data
  @distanceUnit = options.distanceUnit or "mi"
  @timeUnit = options.timeUnit or "minute"
Meters::toMiles = ->
  @value * 0.000621371

Seconds::toMinutes = ->
  minute: parseInt(@value / 60)
  seconds: @value % 60

sumOfIntegersInArray = (arr) ->
  arr.reduce (previous, current) ->
    parseInt(previous) + parseInt(current)


GarminCourse::distanceSelector = "DistanceMeters"
GarminCourse::durationSelector = "TotalTimeSeconds"
GarminCourse::getCalories = ->
  calorieArray = @textContentFromNodeList("Calories")
  sumOfIntegersInArray calorieArray

GarminCourse::getDistance = ->
  @formattedDistance @totalDistance()

GarminCourse::totalDistance = ->
  nodes = @data.querySelectorAll(@distanceSelector)
  totalDistance = new Meters(nodes.item(nodes.length - 1).textContent)
  totalDistance

GarminCourse::totalDuration = ->
  durationArray = @textContentFromNodeList(@durationSelector)
  sumOfIntegersInArray durationArray

GarminCourse::getDuration = ->
  @totalDuration()

GarminCourse::getPace = ->
  @getDuration() / @getDistance()

GarminCourse::formattedDistance = (distance) ->
  switch @distanceUnit
    when "mi"
      distance.toMiles()

GarminCourse::topMetersPerSecond = ->
  maxSpeeds = @textContentFromNodeList("MaximumSpeed")
  Math.max.apply Math, maxSpeeds

GarminCourse::textContentFromNodeList = (nodeListSelector) ->
  nodeList = @data.querySelectorAll(nodeListSelector)
  Array::map.call nodeList, @getTextContent

GarminCourse::getTextContent = (element) ->
  element.textContent