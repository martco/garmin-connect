function GarminTrackPoint(data, options){
  this.data = data;
  // TODO: these properties don't need to be set on creation of every trackpoint
  this.distanceUnit = options.distanceUnit || 'mi';
  this.timeUnit = options.timeUnit || 'minute';
};

GarminTrackPoint.prototype.getTimestamp = function() {
  t = this.data.querySelector('Time');
  return t.textContent;
}

GarminTrackPoint.prototype.getSpeed = function() {
  ext = this.data.querySelector('Extensions');
  if(ext) {
    tpx = this.data.querySelector('TPX');
    if(tpx) {
      // a number representing the meters per second
      // this assumes each TrackPoint lasts one second
      meters = new Meters(this.data.querySelector('Speed').textContent);

      // miles per second (fraction, obviously)
      milesPerSecond = this.formattedDistance(meters);

      // how many seconds per mile?
      if(meters) { return 1 / milesPerSecond; }
    } 
  }
}

GarminTrackPoint.prototype.getPosition = function() {
  var position = this.data.querySelector('Position');

  if(position) {
    var latitude = position.querySelector('LatitudeDegrees').textContent,
        longitude = position.querySelector('LongitudeDegrees').textContent;

    return {
      latitude: latitude,
      longitude: longitude
    };
  }
}

GarminTrackPoint.prototype.distanceSelector  = GarminCourse.prototype.distanceSelector;
GarminTrackPoint.prototype.formattedDistance = GarminCourse.prototype.formattedDistance;
GarminTrackPoint.prototype.totalDistance     = GarminCourse.prototype.totalDistance;
GarminTrackPoint.prototype.getDistance       = GarminCourse.prototype.getDistance;