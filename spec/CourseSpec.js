describe("Seconds", function(){
  it("can translate seconds to a minutes object", function(){
    var seconds = new Seconds(191);
    expect(seconds.toMinutes()).toEqual({ minute: 3, seconds: 11 });
  });

});


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

  it("sets the calories", function() { 
    expect(course.calories).toEqual(407);
  });

  it("sets the total duration", function() { 
    expect(course.duration.value).toBeCloseTo(2406);
  });

  describe("getDistance()", function(){
    it("returns the distance's value property", function() {
      expect(course.getDistance()).toBeCloseTo(4.03, 2);
    });
  });

  describe("getPace()", function(){
    it("returns the seconds value in seconds per mi", function() {
      expect(course.getPace()).toBeCloseTo(596.46, 2);
    });
  });
});
