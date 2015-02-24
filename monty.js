function MontyHall(){
	this.prize;
	this.userChoice;
	this.hostChoice;
	this.switchChoice;
	this.firstChoiceWin = 0;
	this.switchChoiceWin = 0;
};

MontyHall.prototype.pickDoor = function(constraint1, constraint2){
	var door = Math.floor(Math.random() * 3);
	while(door === constraint1 || door === constraint2){
		door = Math.floor(Math.random() * 3);
	}
	return door;
};

MontyHall.prototype.run1000 = function(){
	for(var i = 0; i < 1000; i++){
		this.prize = this.pickDoor();
		this.userChoice = this.pickDoor();
		this.hostChoice = this.pickDoor(this.prize, this.userChoice);
		this.switchChoice = this.pickDoor(this.userChoice, this.hostChoice);

		if(this.userChoice === this.prize){
			this.firstChoiceWin++;
		}
		else if(this.switchChoice === this.prize){
			this.switchChoiceWin++;
		}
	}
};

MontyHall.prototype.logResults = function(){
	console.log("Sticking with the first choice won " + (100 * this.firstChoiceWin/1000) + "% of the time.");
	console.log("And switching choices won " + (100 * this.switchChoiceWin/1000) + "% of the time!");
};

var monty = new MontyHall();
monty.run1000();
monty.logResults();