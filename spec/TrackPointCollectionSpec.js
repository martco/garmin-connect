describe("GarminTrackPointCollection", function(){

  var trackPoints;
  var garminDocument;
  var trackPointCollection;

  beforeEach(function(){
    garminDocument = document.querySelector('iframe').contentDocument;
    trackPoints = garminDocument.querySelectorAll('Trackpoint');

    trackPointCollection = new GarminTrackPointCollection(trackPoints);
  });

  it('collectedTrackpoints has a length equal to trackPoints.length / 30 (every 30th trackpoint)', function(){
    expect(trackPointCollection.collectedTrackPoints.length).toEqual(Math.ceil(trackPoints.length / 30));
  });

});