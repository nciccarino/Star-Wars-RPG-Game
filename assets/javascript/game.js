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

var characterSelect = false;

var defenderSelected = false;

var character = {};

var defender = {};

var enemiesDefeated = 0;

var gameOver = false; 

//Objects for Characters

	//obi

	//tried document.getElementById("") but didn't work
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
	character.name = choseCharacter.name 
	character.HP = choseCharacter.HP
	character.baseAttack = choseCharacter.baseAttack
	character.attack = choseCharacter.attack
}

//choose defender
function loadDefender (choseDefender) {
	character.name = choseDefender.name 
	character.HP = choseDefender.HP
	character.baseAttack = choseDefender.baseAttack
	character.attack = choseDefender.attack
}

//move others to enemies--- tried in clicks section 
function moveEnemies () {
	$(".available-characters").removeClass("available-characters").addClass("listEnemies");
	$("#choose-attack").append($(".listEnemies")); 
}

//move character selected
function moveCharacter () {
	$(".available-characters").removeClass("available-characters").addClass("chosen-character");
	$("#chose-character").append($(".chosen-character")); 
}

//move defender selected
function moveDefender () {
	$(".available-characters").removeClass("available-characters").addClass("defend-character");
	$("#defend-area").append($(".defend-character")); 
}

//reset game 



//-------------------clicks and if/else statements-------

 $(document).ready(function(){

 //--------------------First Attempt----------------------
// 	$(".char-image").on("click", function(){
// 		$(this).removeClass("available-characters");
// 		$(this).attr("id", "chose-character");
// 		//$(this).appendTo("#chose-character");


// 		$(".char-image").not(this).each(function(){
// 			$(this).removeClass("available-characters");
// 			$(this).attr("id", "choose-attack");
// 			//$(this).appendTo("#choose-attack");

// 			//$(this).appendTo("#chose-character");

// 		});

// 		$(".char-image").on("click", function(){
// 			$(this).appendTo("#defend-area");
// 			$(this).attr("id", "#defender"); 
// 		});

// 	});
//--------------------End First Attempt-------------------

	$(".char-image").on("click", function(){
		console.log("Character Selected");

		if(characterSelect == false) {
			$("#message-area").empty();

			loadCharacter(this);
			characterSelect = true; 

			moveCharacter(this); 

			moveEnemies();

		} else if ((characterSelect == true) && (defenderSelected == false)) {
			if ($(this).hasClass("listEnemies")){
				$("message-area").empty(); 

				loadDefender(this);
				defenderSelected = true; 

				moveDefender(this); 
			}

		}
	});

});
