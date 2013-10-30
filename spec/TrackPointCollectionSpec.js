describe("GarminTrackPointCollection", function(){

  var trackPoints;
  var garminDocument;

  beforeEach(function(){
    garminDocument = document.querySelector('iframe').contentDocument;
  });

  it('defines the garminDocument', function() {
    expect(garminDocument).toBeDefined();
  });

  xit('returns the first trackPoint as the first element in the collection', function(){

  });

  // there appears to be one trackpoint per second. Facebook wants one trackpoint for every
  // 30 seconds of activity. 
  xit('returns the 30th trackPoint as the second element in the collection', function(){

  });

});