describe("GarminCourse", function() {
  var course;

  beforeEach(function() {
    garminDocument = document.querySelector('iframe').contentDocument;
    course = new GarminCourse(garminDocument, {});
  })

  describe("distanceUnit", function(){
    it("has a default distanceUnit of 'mi'", function() {
      expect(course.distanceUnit).toBe('mi');
    });

    it("can receive and set a distanceUnit", function() {
      course = new GarminCourse(garminDocument, {distanceUnit: 'km'});
      expect(course.distanceUnit).toBe('km');
    });
  })

  describe("timeUnit", function(){
    it("has a default timeUnit of 'minute'", function() {
      expect(course.timeUnit).toBe('minute');
    });

    it("can receive and set a timeUnit", function() {
      course = new GarminCourse(garminDocument, {timeUnit: 'seconds'});
      expect(course.timeUnit).toBe('seconds');
    });

  });

  describe("getCalories()", function(){
    it("returns the calories", function() { 
      expect(course.getCalories()).toEqual(407);
    });
  });

  describe("getDuration()", function(){
    it("returns the total duration of the activity", function() { 
      expect(course.getDuration()).toEqual(2406);
    });
  });

  describe("getDistance()", function(){
    it("returns the total distance of the activity", function() {
      expect(course.getDistance()).toBeCloseTo(4.03, 2);
    });
  });

  describe("getPace()", function(){
    it("returns the seconds value in seconds per mi", function() {
      expect(course.getPace()).toBeCloseTo(596.46, 2);
    });
  });
  describe("topMetersPerSecond()", function(){
    it("returns the highest value in MaximumSpeed", function() {
      expect(course.topMetersPerSecond()).toEqual(17.238000869750977);
    });
  });
});
