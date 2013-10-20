function Meters(value){
  this.value = parseFloat(value);
}

Meters.prototype.toMiles = function() {
  return this.value * 0.000621371;
}

sumOfIntegersInArray = function(arr){
  return arr.reduce(function(previous, current){
    return parseInt(previous) + parseInt(current);
  });
};

function GarminCourse(data, options){
  this.data = data;
  this.distanceUnit = options.distanceUnit || 'mi';
  this.timeUnit = options.timeUnit || 'minute';
};

GarminCourse.prototype.distanceSelector = 'DistanceMeters';
GarminCourse.prototype.durationSelector = 'TotalTimeSeconds';

GarminCourse.prototype.getCalories = function() {
  calorieArray = this.textContentFromNodeList('Calories')

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
  durationArray = this.textContentFromNodeList(this.durationSelector);

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
  maxSpeeds = this.textContentFromNodeList('MaximumSpeed');
  return Math.max.apply(Math, maxSpeeds);
}


GarminCourse.prototype.textContentFromNodeList = function(nodeListSelector) {
  nodeList = this.data.querySelectorAll(nodeListSelector);
  return Array.prototype.map.call(nodeList, this.getTextContent);
}

GarminCourse.prototype.getTextContent = function(element) {
  return element.textContent;
}
