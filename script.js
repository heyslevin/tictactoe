
//Gameboard array
var boardModule = (() => {

	//Select div for board
	let boardContainer = document.querySelector("#boardContainer")
	let boardArray = ["","","","","","","","",""];

	//Module Player Selection

	const gameFunctions = (() => {

		// Onclick function for board

		let currentPlayer;

		// Selection module
		const getPlayer = function getter(){

			switch (currentPlayer) {
					case undefined:
						currentPlayer = 1;
					case 1:
						console.log(this);
						this.innerHTML = player1.getmark();
						boardArray[this.id] = player1.getmark();
						winnerCheck(player1);
						return currentPlayer = 2;
					case 2:
						this.innerHTML = player2.getmark();
						boardArray[this.id] = player2.getmark();
						winnerCheck(player2);
						return currentPlayer = 1;

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

			console.log("The array is " + playerA);

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
