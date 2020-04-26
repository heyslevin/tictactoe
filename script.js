
//Gameboard array
var boardModule = (() => {

	//Select div for board
	let boardContainer = document.querySelector("#boardContainer")
	let boardArray = [];

	//Apply to board container
	const boardGenerator = () => {
		for (let i = 0; i < 9; i++) {

			//Create Square elements
			let square = document.createElement("div")
			square.classList.add("squareStyle")


			//Append to board
			boardContainer.appendChild(square);
		}

	}

	return {
		boardGenerator: boardGenerator
	};

})();


boardModule.boardGenerator();
