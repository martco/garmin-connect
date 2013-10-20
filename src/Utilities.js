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

getTextContent = function(element) {
  return element.textContent;
}

textContentFromNodeList = function(nodeList) {
  return Array.prototype.map.call(nodeList, getTextContent);
}