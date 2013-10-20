function GarminTrackPoint(data, options){
  this.data = data;
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
      speed = this.data.querySelector('Speed');
      if(speed) { return this.formattedDistance(new Meters(speed.textContent)).toString(); }
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

GarminTrackPoint.prototype.distanceSelector = GarminCourse.prototype.distanceSelector;
GarminTrackPoint.prototype.formattedDistance = GarminCourse.prototype.formattedDistance;
GarminTrackPoint.prototype.totalDistance = GarminCourse.prototype.totalDistance;
GarminTrackPoint.prototype.getDistance = GarminCourse.prototype.getDistance;