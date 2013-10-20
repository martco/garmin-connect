function GarminCourse(data, options){
  this.data = data;
  this.distanceUnit = options.distanceUnit || 'mi';
  this.timeUnit = options.timeUnit || 'minute';
};

GarminCourse.prototype.distanceSelector = 'DistanceMeters';
GarminCourse.prototype.durationSelector = 'TotalTimeSeconds';

GarminCourse.prototype.getCalories = function() {
  nodeList = this.data.querySelectorAll('Calories');
  calorieArray = textContentFromNodeList(nodeList)

  return sumOfIntegersInArray(calorieArray);
}

GarminCourse.prototype.getDistance = function() {
  return this.formattedDistance(this.totalDistance());
}

GarminCourse.prototype.totalDistance = function() {
  nodes = this.data.querySelectorAll(this.distanceSelector);
  totalDistance = new Meters(nodes.item(nodes.length-1).textContent);

  return totalDistance;
}

GarminCourse.prototype.totalDuration = function() {
  nodeList = this.data.querySelectorAll(this.durationSelector);
  durationArray = textContentFromNodeList(nodeList);

  return sumOfIntegersInArray(durationArray);
}

GarminCourse.prototype.getDuration = function() {
  return this.totalDuration();
}

GarminCourse.prototype.getPace = function() {
  return this.getDuration() / this.getDistance();
}

GarminCourse.prototype.formattedDistance = function(distance) {
  switch(this.distanceUnit) {
    case 'mi':
      return distance.toMiles();
  }
};

GarminCourse.prototype.topMetersPerSecond = function() {
  nodeList = this.data.querySelectorAll('MaximumSpeed') 
  maxSpeeds = textContentFromNodeList(nodeList);

  return Math.max.apply(Math, maxSpeeds);
}


