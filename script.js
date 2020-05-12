
//Gameboard array
var boardModule = (() => {

	//Select div for board
	let boardContainer = document.querySelector("#boardContainer")
	let boardArray = ["x","o","x","o","x","o","x","o","x"];

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
						this.innerHTML = "1 THIS SHIT WORKS";
						return currentPlayer = 2;
					case 2:
						this.innerHTML = "2 THIS SHIT WORKS"
						return currentPlayer = 1;
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

		boardArray.forEach( element => {
			let square = document.createElement("div")
			square.classList.add("squareStyle")
			square.innerHTML = element
			square.addEventListener("click", gameFunctions.getPlayer);

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
		gameFunctions
	};

})();


boardModule.boardGenerator();
