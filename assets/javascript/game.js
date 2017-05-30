//Pick Character function 
	//moves to your character area 
	//moves enemies to available area 

//Pick Defender function 
	//moves to defender area 
	//defeated is removed 

//Attack function
	//HP counters

//Messages 
	//Messages appear 
	//after you are defeated or win restart appears 

//maybe add a wins and losses function as well but not required 

//----------------Start Here------------------

//Global Variables 

var character = {};

var defender = {};

var characterSelect = false;

var defenderSelect = false;

var enemiesDefeated = 0; 

var gameOver = false; 

//Objects for Characters

		//obi
	var obi = {
		name: "Obi-Wan Kenobi",
		HP: 120,
		baseAttack: 8,
		attack: 8
	};
		//luke
	var luke = {
		name: "Luke Skywalker",
		HP: 100,
		baseAttack: 6,
		attack: 6, 
	};
		//sidious
	var sidious = {
		name: "Darth Sidious",
		HP: 150,
		baseAttack: 12, 
		attack: 12, 
	};
		//vader
	var vader = {
		name: "Darth Vader",
		HP: 180,
		baseAttack: 14,
		attack: 14, 
	};

//-------------------Functions---------------------------

//choose character
function loadCharacter (choseCharacter) {
	if (choseCharacter == "obi" ) {
		character = obi; 
		console.log("Obi-Wan Kenobi selected")
		//$("#game-alert").html("<p>You chose Obi-Wan Kenobi as your character</p>")
	}
	if (choseCharacter == "luke" ) {
		character = luke; 
		console.log("Luke Skywalker selected")
	}
	if (choseCharacter == "sidious" ) {
		character = sidious; 
		console.log("Darth Sidious selected")
	}
	if (choseCharacter == "vader" ) {
		character = vader; 
		console.log("Darth Vader selected")
	}
}

//choose defender
function loadDefender (choseDefender) {
	if (choseDefender == "obi" ) {
		defender = obi; 
		console.log("Obi-Wan Kenobi selected")
	}
	if (choseDefender == "luke" ) {
		defender = luke; 
		console.log("Luke Skywalker selected")
	}
	if (choseDefender == "sidious" ) {
		defender = sidious; 
		console.log("Darth Sidious selected")
	}
	if (choseDefender == "vader" ) {
		defender = vader; 
		console.log("Darth Vader selected")
	}

}

//move others to enemies--- tried in clicks section 
function moveEnemies () {
	$(".available-characters").removeClass("available-characters").addClass("listEnemies");
	$("#choose-attack").append($(".listEnemies")); 
}

//move character selected USED FOR SECOND ATTEMPT
function moveCharacter (characterId) {
	$("#" + characterId).removeClass("available-characters").addClass("chosen-character");
	$("#chose-character").append($(".chosen-character")); 
}

//move defender selected USED FOR SECOND ATTEMPT
function moveDefender (defenderId) {
	$("#" + defenderId).removeClass("available-characters").addClass("defendCharacter");
	$("#defend-area").append($(".defendCharacter")); 
}

//restart game 



//-------------------clicks and if/else statements-------

$(document).ready(function(){

	$(".char-image").on("click", function(){ //if no characters are selected
		console.log("Character Selected");
		console.log(this);
		console.log(this.id);

		if(characterSelect === false) { //if no characters are selected
			$("#message-area").empty();

				var characterId = $(this).attr("id"); //picks your character

				loadCharacter(characterId);
				moveCharacter(characterId);
				moveEnemies(); 
				characterSelect = true;
				$("#game-alert").html("<p>You chose " + character.name + " as your character</p>")

		} else if ((characterSelect === true) && (defenderSelect === false)) { //if your character is selected but not an enemy
			
				var defenderId = $(this).attr("id"); //picks your enemy

				loadDefender(defenderId);
				moveDefender(defenderId); 
				defenderSelect = true; 
				$("#game-alert2").html("<p>You chose " + defender.name + " as your enemy</p>")
		}
	});

	$("#attackButton").on("click", function(){
		console.log("Attack clicked"); 

		//Character is ready to attack the defender
		if (characterSelect && defenderSelect && !gameOver) {
			//Character attacks the defender and decreases the defender's HP
			defender.HP = defender.HP - character.attack; 
			$("#defend-area").children(".HP").html(defender.HP); 
			//Character's attack power increases

			//If defender is still alive, they counter the character

				//check if character survives the attack 

				//defender is defeated-- remove them 

				//check if the character has won the game by beating 3 defenders

		}; 

	});

	$("#restart").on("click", function(){
		console.log("restart clicked");

		restartGame(); 
	}); //reset area


}); //end of $(document).ready
