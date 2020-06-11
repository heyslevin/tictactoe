
//Gameboard array
var boardModule = (() => {

	////////////////////////
	////////////////////////
	////////////////////////
	////////////////////////	
	//Form Actions


	const checkForm = function(player1,player2) {


		return function (e) {
			event.preventDefault();
			boardPlayer.player1.setname(document.querySelector('input[name="player1"]').value);
			boardPlayer.player2.setname(document.querySelector('input[name="player2"]').value);

			console.log(welcomeScreen)

			reset(e);
			submit.style.visibility = "hidden"

		}



	}

	const reset = function(e) {
		e.preventDefault();
		boardContainer.innerHTML = "";
		boardArray = ["","","","","","","","",""];
		boardModule.boardGenerator();
		submit.style.visibility = "visible";
	}

	const welcomeScreen = (() => {

		//Query Selectors

		let submit = document.querySelector("#submit");
		let clear = document.querySelector("#clear");
		let player1Form;
		let player2Form;

		submit.addEventListener("click",checkForm(player1Form,player2Form))
		clear.addEventListener("click", reset)
			
		return {
			player1Form,
			player2Form,
		}


	})();




	//Select div for board
	let boardContainer = document.querySelector("#boardContainer")
	let boardArray = ["","","","","","","","",""];
	

	////////////////////////
	////////////////////////
	////////////////////////
	////////////////////////	
	//Module Player Selection

	const gameFunctions = (() => {

		// Onclick function for board

		
		let spaceChecker = function(id,player,currentBox) {
			if (boardArray[id] == "") {
				boardArray[id] = player.getmark();
				currentBox.innerHTML = player.getmark();
				winnerCheck(player);
				if (boardGenerator.currentPlayer == 1) {
					boardGenerator.currentPlayer = 2
				} else {
					boardGenerator.currentPlayer = 1
				}
			} else {
				alert("This space is taken")
			}
		};




		// Array Checker for winner
		const winnerCheck = function (player) {

			

			const winnerCombos = [
				[0,3,6],
				[0,1,2],
				[0,4,8],
				[1,7,4],
				[3,4,5],
				[2,4,6],
				[2,5,8],
				[6,7,8]

			];

			

			let playerA = boardArray.reduce(function(playerArray,curr,i) {

				if ( curr === player.getmark() ) {
					playerArray.push(i)
				}

				return playerArray;

			},[]);

			let playername = player.getname();


			for (let i = 0; i < winnerCombos.length; i++) {
				let winners = winnerCombos[i];
				if ( winners.every(j => playerA.includes(j)) ) {
					alert(playername + " wins")
				} else if (!boardArray.includes("")) {
					alert("Tie bitches");
					break;
				}
			}			




				
		};
		

		return {
			spaceChecker,
			winnerCheck
		}


	})();
		



	////////////////////////
	////////////////////////
	////////////////////////
	////////////////////////	
	//Module: Built board with for each

	const boardGenerator = () => {


		let currentPlayer;


		boardArray.forEach( function(element,i) {
			let square = document.createElement("div")
			square.classList.add("squareStyle")
			square.innerHTML = element
			square.addEventListener("click", getPlayer);
			square.id = i;

			//Append to board
			boardContainer.appendChild(square);

		});

		return {
			currentPlayer
		}
	}

	////////////////////////
	////////////////////////
	////////////////////////
	////////////////////////
	// Selection module
	const getPlayer = function getter(){


		switch (boardGenerator.currentPlayer) {
				case undefined:
					boardGenerator.currentPlayer = 1;
				case 1:
					//Check if board is in use
					gameFunctions.spaceChecker(this.id,boardPlayer.player1,this);
					break;

				case 2:
					gameFunctions.spaceChecker(this.id,boardPlayer.player2,this);
					break;

			}


		};	

	////////////////////////
	////////////////////////
	////////////////////////
	////////////////////////	
	//Module: Build players

	const Player = (name,mark) => {

		return {
			getmark: function() {return mark},
			getname: function() {return name},
			setname: function(value) {name = value}
		}
	}

	const boardPlayer = (() => {

		player1 = Player("Them Titties","X");
		player2 = Player("Are Titties","0");

		return {
			player1,
			player2
		}

	})();


	////////////////////////
	////////////////////////
	////////////////////////
	////////////////////////	
	//Module: Square Selector


	return {
		boardGenerator,
		gameFunctions,
		boardArray,
		welcomeScreen,
		boardPlayer,
		getPlayer
	};

})();
