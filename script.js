const ship = {
  max: 4,
  passengers: [],
  onBoard: function(name) {
    if(this.passengers.length == this.max) {
      console.log("This ship is full");
      for(let i = 0; i < this.passengers.length; i++){
        console.log(`${this.passengers[i]} is our passengers`);
      }
      return this.passengers
    } else {
      this.passengers.push(name);
      console.log(`${name} on Board`);
    }
  }
}
ship.onBoard('nico');
ship.onBoard('jiaho');
ship.onBoard('yoyo');
ship.onBoard('nodoka');
ship.onBoard('muyako');