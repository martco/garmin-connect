function Meters(value){
  this.value = parseFloat(value);
}

Meters.prototype.toMiles = function() {
  return this.value * 0.000621371;
}

function Seconds(value){
  this.value = parseInt(value);
}

Seconds.prototype.toMinutes = function() {
  return {
    minute: parseInt(this.value / 60),
    seconds: this.value % 60
  };
}


function GarminCourse(data, options){
  this.data = data;
  this.distanceUnit = options.distanceUnit || 'mi';
  this.timeUnit = options.timeUnit || 'minute';
  this.calories = 0;
  this.distance = {};
  this.duration = {};
  this.pace = {};

  this.addCalories();
  this.setDuration();
};

GarminCourse.prototype.addCalories = function() {
  calorieSum = 0;
  calorieArray = this.nodeListToArray('Calories')

  calorieArray.forEach(function(calorie){
    calorieSum += parseInt(calorie.textContent);
  });

  this.calories = calorieSum;
}

GarminCourse.prototype.getDistance = function() {
  return this.formattedDistance(this.totalDistance());
}

GarminCourse.prototype.totalDistance = function() {
  nodes = this.data.querySelectorAll(this.distanceSelector());
  distanceSum = new Meters(nodes.item(nodes.length-1).textContent);

  return distanceSum;
}

GarminCourse.prototype.setDuration = function() {
  durationSum = 0;
  durationArray = this.nodeListToArray(this.durationSelector());

  durationArray.forEach(function(duration){
    durationSum += parseInt(duration.textContent);
  });

  this.duration.value = durationSum;
}

GarminCourse.prototype.getDuration = function() {
  return this.duration.value;
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

GarminCourse.prototype.distanceSelector = function() {
  return 'DistanceMeters';
}

GarminCourse.prototype.durationSelector = function() {
  return 'TotalTimeSeconds';
}

GarminCourse.prototype.nodeListToArray = function(nodeListSelector) {
  nodeList = this.data.querySelectorAll(nodeListSelector);
  return Array.prototype.slice.call(nodeList, 0);
}
