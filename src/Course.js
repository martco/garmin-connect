function Meters(value){
  this.value = parseFloat(value);
}

Meters.prototype.toMiles = function() {
  return this.value * 0.000621371;
}

function GarminCourse(data, options){
  this.data = data;
  this.distanceUnit = options.distanceUnit || 'mile';
  this.timeUnit = options.timeUnit || 'minute';
  this.calories = 0;
  this.distance = {};

  this.addCalories();
  this.setDistance();
};

GarminCourse.prototype.addCalories = function() {
  calorieSum = 0;
  calorieArray = this.nodeListToArray('Calories')

  calorieArray.forEach(function(calorie){
    calorieSum += parseInt(calorie.textContent);
  });

  this.calories = calorieSum;
}

GarminCourse.prototype.setDistance = function() {
  nodes = this.data.querySelectorAll("DistanceMeters");
  distanceSum = new Meters(nodes.item(nodes.length-1).textContent);

  this.distance.value = this.formattedDistance(distanceSum);
}

GarminCourse.prototype.formattedDistance = function(distance) {
  switch(this.distanceUnit) {
    case 'mile':
      return distance.toMiles();
  }
};

GarminCourse.prototype.nodeListToArray = function(nodeListSelector) {
  nodeList = this.data.querySelectorAll(nodeListSelector);
  return Array.prototype.slice.call(nodeList, 0);
}
