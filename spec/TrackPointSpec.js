describe("GarminTrackPoint", function() {
  var trackPoint;

  beforeEach(function() {
    garminDocument = document.querySelector('iframe').contentDocument;
    trackPoint = new GarminTrackPoint(garminDocument.querySelector('Trackpoint'), {});
  })

  describe("getDistance()", function(){
    it("returns the distance in miles covered during the trackPoint", function() {
      expect(trackPoint.getDistance()).toBeCloseTo(0.0021, 2);
    });
  });

});
