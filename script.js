
//Gameboard array
var boardModule = (() => {

	//Select div for board
	let boardContainer = document.querySelector("#boardContainer")
	let boardArray = ["x","o","x","o","x","o","x","o","x"];

	//Built board with for each

	var boardGenerator = () => {
		boardArray.forEach( element => {
			let square = document.createElement("div")
			square.classList.add("squareStyle")
			square.innerHTML = element

			//Append to board
			boardContainer.appendChild(square);

		});
	}

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


	return {
		boardGenerator: boardGenerator,
	};

})();


boardModule.boardGenerator();
