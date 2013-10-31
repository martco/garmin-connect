function GarminTrackPointCollection(trackPoints) {
  this.collectedTrackPoints = this.prepareTrackpoints(trackPoints);
};

GarminTrackPointCollection.prototype.prepareTrackpoints = function(trackPoints) {
  var collectedTrackpoints = [];

  for(var i=0; i < trackPoints.length; i=i+30) {
    collectedTrackpoints.push(trackPoints[i]);
  }

  return collectedTrackpoints;
}