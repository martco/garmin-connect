describe("GarminTrackPoint", function() {
  var trackPoint;
  var garminDocument;

  beforeEach(function() {
    garminDocument = document.querySelector('iframe').contentDocument;
    trackPoint = new GarminTrackPoint(garminDocument.querySelector('Trackpoint'), {});
  })

  describe("getDistance()", function(){
    it("returns the distance in miles covered during the trackPoint", function() {
      expect(trackPoint.getDistance()).toBeCloseTo(0.0021, 2);
    });
  });

  describe("getTimestamp()", function(){
    it("returns the timestamp in the trackpoint", function() {
      expect(trackPoint.getTimestamp()).toBe("2013-09-06T17:58:22.000Z");
    });
  });

  describe("getPosition()", function(){
    it("returns the latitude in the trackpoint if the trackpoint has position", function() {
      expect(trackPoint.getPosition()).not.toBeDefined();

      var garminTrackPoint = garminDocument.querySelectorAll('Trackpoint')[1122],
          trackPointWithPosition = new GarminTrackPoint(garminTrackPoint, {}),
          position = trackPointWithPosition.getPosition();

      expect(position.latitude).toBe("41.92142511717975");
      expect(position.longitude).toBe("-87.76414157822728");
    });
  });

  describe("getSpeed()", function(){
    it("returns miles per second", function() {
      expect(trackPoint.getSpeed()).toBeCloseTo(0.0021, 2);
    });
  });

});
