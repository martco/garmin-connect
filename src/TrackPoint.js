function GarminTrackPoint(data, options){
  this.data = data;
  this.distanceUnit = options.distanceUnit || 'mi';
  this.timeUnit = options.timeUnit || 'minute';
};

GarminTrackPoint.prototype.distanceSelector = GarminCourse.prototype.distanceSelector;
GarminTrackPoint.prototype.formattedDistance = GarminCourse.prototype.formattedDistance;
GarminTrackPoint.prototype.totalDistance = GarminCourse.prototype.totalDistance;
GarminTrackPoint.prototype.getDistance = GarminCourse.prototype.getDistance;