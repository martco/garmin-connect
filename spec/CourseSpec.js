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

  describe("distance", function(){
    it("sets the distance's value property", function() {
      expect(course.distance.value).toBeCloseTo(4.03, 2);
    });
  });
});
