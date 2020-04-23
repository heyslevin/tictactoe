const gameElements = (() => {
	const board = () => foo;


	return {

	};
})();

board = function() {
	//Select div for board
	let boardContainer = document.querySelector("#boardContainer")

	//Define square grid element size
	let squareSize = "50px";

	//Apply to board container
	for (let i = 0; i < 6; i++) {

		//Create Square elements
		let square = document.createElement("div")
		square.classList.add("squareStyle")


		//Append to board
		boardContainer.appendChild(square);
	}

	//Apply size to all squares

	squareSelector = document.querySelectorAll(".squareStyle")
	squareSelector.forEach( element => {
		element.height = squareSize;
	});

	return console.log("Done creating board")
}

board();