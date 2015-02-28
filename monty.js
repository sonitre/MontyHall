//Javascript file that proves the Monty Hall Problem. Creates a Monty Hall object and allows
//a user to run the game as many times as they would like!

//Constructs a MontyHall object
function MontyHall(games){
	this.prize;
	this.userChoice;
	this.hostChoice;
	this.switchChoice;
	this.firstChoiceWin = 0;
	this.switchChoiceWin = 0;
	this.games = games;
};

//Method that randomly chooses a door between 1 and 3, 
//taking into account constraints (such as doors already being assigned).
MontyHall.prototype.pickDoor = function(constraint1, constraint2){
	var door = Math.floor(Math.random() * 3);
	while(door === constraint1 || door === constraint2){
		door = Math.floor(Math.random() * 3);
	}
	return door;
};

//Assigns the prize to a door, has the user choose a door,
//and then has the host show the door without the prize
MontyHall.prototype.runMonty = function(){
	for(var i = 0; i < this.games; i++){
		this.prize = this.pickDoor();
		this.userChoice = this.pickDoor();
		this.hostChoice = this.pickDoor(this.prize, this.userChoice);
		this.switchChoice = this.pickDoor(this.userChoice, this.hostChoice);
		//Logs how many tiems switching wins vs. sticking with first choice
		if(this.userChoice === this.prize){
			this.firstChoiceWin++;
		}
		else if(this.switchChoice === this.prize){
			this.switchChoiceWin++;
		}
	}
};

//Logs percentage of wins to the console
MontyHall.prototype.logResults = function(){
	console.log("Sticking with the first choice won " + (100 * this.firstChoiceWin/this.games) + "% of the time.");
	console.log("And switching choices won " + (100 * this.switchChoiceWin/this.games) + "% of the time!");
};

//Creates a new MontyHall object and runs it 1000 times
var monty = new MontyHall(1000);
monty.runMonty();
monty.logResults();