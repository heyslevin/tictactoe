var welcomeScreen = (() => {

//Query Selectors

let submit = document.querySelector("#submit");

submit.addEventListener("click",checkForm)

function checkForm(e) {
	e.preventDefault();
	let player1Form = document.querySelector('input[name="player1"]').value;
	let player2Form = document.querySelector('input[name="player2"]').value;
}



})();

//Form Actions




//Gameboard array
var boardModule = (() => {

	//Select div for board
	let boardContainer = document.querySelector("#boardContainer")
	let boardArray = ["","","","","","","","",""];

	//Module Player Selection

	const gameFunctions = (() => {

		// Onclick function for board

		let currentPlayer;
		let spaceChecker = function(id,player,currentBox) {
			if (boardArray[id] == "") {
				boardArray[id] = player.getmark();
				currentBox.innerHTML = player.getmark();
				winnerCheck(player);
				if (currentPlayer == 1) {
					currentPlayer = 2
				} else {
					currentPlayer = 1
				}
			} else {
				alert("This space is taken")
			}
		};

		// Selection module
		const getPlayer = function getter(){

			switch (currentPlayer) {
					case undefined:
						currentPlayer = 1;
					case 1:
						//Check if board is in use
						spaceChecker(this.id,player1,this);
						break;

					case 2:
						spaceChecker(this.id,player2,this);
						break;

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
				}
			}			




				
		};
		


		return {
				getPlayer
			};

		})();
		



		// var selection = function playerSelection() {
		// 	this.innerHTML = "THIS SHIT WORKS"
		// }

		// return {
		// 	selection
		// };



	//Module: Built board with for each

	const boardGenerator = () => {


		boardArray.forEach( function(element,i) {
			let square = document.createElement("div")
			square.classList.add("squareStyle")
			square.innerHTML = element
			square.addEventListener("click", gameFunctions.getPlayer);
			square.id = i;

			//Append to board
			boardContainer.appendChild(square);

		});
	}

	//Module: Build players

	const Player = (name,mark) => {
		getname = () => name;
		getmark = () => mark;

		const welcome = person => {
			console.log(`Welcome to ${person.getname()}`)
		}

		return {
			getname,
			getmark,
			welcome
		}
	}

	player1 = Player("player1","X");
	player2 = Player("player2","0");

	//Module: Square Selector


	return {
		boardGenerator,
		gameFunctions,
		boardArray
	};

})();


boardModule.boardGenerator();
