#= require course
describe "Seconds", ->
  it "can translate seconds to a minutes object", ->
    seconds = new Seconds(191)
    expect(seconds.toMinutes()).toEqual
      minute: 3
      seconds: 11

describe "GarminCourse", ->
  course = undefined
  beforeEach ->
    garminDocument = document.querySelector("iframe").contentDocument
    course = new GarminCourse(garminDocument, {})

  describe "distanceUnit", ->
    it "has a default distanceUnit of 'mi'", ->
      expect(course.distanceUnit).toBe "mi"

    it "can receive and set a distanceUnit", ->
      course = new GarminCourse(garminDocument, distanceUnit: "km")
      expect(course.distanceUnit).toBe "km"

  describe "timeUnit", ->
    it "has a default timeUnit of 'minute'", ->
      expect(course.timeUnit).toBe "minute"

    it "can receive and set a timeUnit", ->
      course = new GarminCourse(garminDocument, timeUnit: "seconds")
      expect(course.timeUnit).toBe "seconds"

  it "returns the calories", ->
    expect(course.getCalories()).toEqual 407

  it "returns the total duration", ->
    expect(course.getDuration()).toEqual 2406

  describe "getDistance()", ->
    it "returns the distance's value property", ->
      expect(course.getDistance()).toBeCloseTo 4.03, 2


  describe "getPace()", ->
    it "returns the seconds value in seconds per mi", ->
      expect(course.getPace()).toBeCloseTo 596.46, 2


  describe "topMetersPerSecond()", ->
    it "returns the highest value in MaximumSpeed", ->
      expect(course.topMetersPerSecond()).toEqual 17.238000869750977


