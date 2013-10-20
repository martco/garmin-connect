function Seconds(value){
  this.value = parseInt(value);
}

Seconds.prototype.toMinutes = function() {
  return {
    minute: parseInt(this.value / 60),
    seconds: this.value % 60
  };
}
