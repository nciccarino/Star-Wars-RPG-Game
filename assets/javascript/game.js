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

//move others to enemies
function moveEnemies () {
	$(".available-characters").removeClass("available-characters").addClass("listEnemies");
	$("#choose-attack").append($(".listEnemies")); 
}

//move character selected
function moveCharacter (characterId) {
	$("#" + characterId).removeClass("available-characters").addClass("chosen-character");
	$("#chose-character").append($(".chosen-character")); 
}

//move defender selected
function moveDefender (defenderId) {
	$("#" + defenderId).removeClass("available-characters").addClass("defendCharacter");
	$("#defend-area").append($(".defendCharacter")); 
}

$(document).ready(function(){
//-------------------Section 1 movement------------------

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
				$("#game-alert").html("<p>You chose " + defender.name + " as your enemy</p>")
		}
	});

//-------------------Section 2 points--------------------

	$("#attackButton").on("click", function(){
		console.log("Attack clicked"); 

		//Character is ready to attack the defender
		if (characterSelect && defenderSelect&& !gameOver) {
			//Character attacks the defender and decreases the defender's HP
			defender.HP = defender.HP - character.attack; 
			$(".defendCharacter").children(".HP").html(defender.HP); 
			console.log(defender.HP);
			$("#game-alert").html("<p>You attacked " + defender.name + " for " + character.attack + " damage</p>");
			//Character's attack power increases
			character.attack = character.attack + character.baseAttack;
			//If defender is still alive, they counter the character
			if (defender.HP > 0) {
				character.HP = character.HP - defender.baseAttack; 
				$(".chosen-character").children(".HP").html(character.HP); 

				//check if character survives the attack 
				if (character.HP > 0) {
					$("#game-alert").append("<p>" + defender.name + " attacked you back for " + defender.baseAttack + " damage.</p>");
				} else { //if he doesnt survive the attack
					gameOver = true; 
					$("#game-alert").html("<p>You were defeated!</p><p>Play again?</p>");
          			$("#restart").show();
				} 
			}	else { //defender is defeated-- remove them
				$(".defendCharacter").hide();
				enemiesDefeated++; 
				defenderSelect = false; 
				$("#game-alert").html("<p>You have defeated " + defender.name + ". Choose another enemy.</p>");
				if (enemiesDefeated === 3) { //check if the character has won the game by beating 3 defenders
					gameOver = true; 
					$("#game-alert").html("<p>You won!</p><p>Play again?</p>");
				}
			} 
		}

	});

//-------------------Section 3 reset---------------------

	$("#restart").on("click", function(){
		console.log("restart clicked");
		location.reload(); 

	}); //reset area


}); //end of $(document).ready
