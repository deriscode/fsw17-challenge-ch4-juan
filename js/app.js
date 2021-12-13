const batuPlayer = document.getElementById("batu");
const kertasPlayer = document.getElementById("kertas");
const guntingPlayer = document.getElementById("gunting");

const buttonCom = document.querySelectorAll(".pilihan-com");

const sign = document.querySelector(".game-content__sign h1:nth-child(1)");
const resultWin = document.querySelector(".game-content__sign h1:nth-child(2)");
const resultLose = document.querySelector(".game-content__sign h1:nth-child(3)");
const resultDraw = document.querySelector(".game-content__sign h1:nth-child(4)");

const refresh = document.getElementById("refresh");

function getPilihanComputer() {
	const pilihan = ["batu", "kertas", "gunting"];
	const pilihanRandom = Math.floor(Math.random(pilihan) * 3);

	if (pilihanRandom == 0) {
		buttonCom.item(0).style.backgroundColor = "#c4c4c4";
		buttonCom.item(0).style.borderRadius = "30px";
		buttonCom.item(1).style.backgroundColor = "transparent";
		buttonCom.item(2).style.backgroundColor = "transparent";
	} else if (pilihanRandom == 1) {
		buttonCom.item(1).style.backgroundColor = "#c4c4c4";
		buttonCom.item(1).style.borderRadius = "30px";
		buttonCom.item(0).style.backgroundColor = "transparent";
		buttonCom.item(2).style.backgroundColor = "transparent";
	} else {
		buttonCom.item(2).style.backgroundColor = "#c4c4c4";
		buttonCom.item(2).style.borderRadius = "30px";
		buttonCom.item(0).style.backgroundColor = "transparent";
		buttonCom.item(1).style.backgroundColor = "transparent";
	}

	return pilihan[pilihanRandom];
}

function win() {
	sign.style.display = "none";
	resultWin.removeAttribute("style");
	resultLose.style.display = "none";
	resultDraw.style.display = "none";
}

function lose() {
	sign.style.display = "none";
	resultLose.removeAttribute("style");
	resultWin.style.display = "none";
	resultDraw.style.display = "none";
}

function draw() {
	sign.style.display = "none";
	resultDraw.removeAttribute("style");
	resultWin.style.display = "none";
	resultLose.style.display = "none";
}

function game(pilihanPlayer) {
	const pilihanComputer = getPilihanComputer();
	switch (pilihanPlayer + pilihanComputer) {
		case "batugunting":
			batuPlayer.style.backgroundColor = "#c4c4c4";
			kertasPlayer.style.backgroundColor = "transparent";
			guntingPlayer.style.backgroundColor = "transparent";
			return win();
		case "kertasbatu":
			kertasPlayer.style.backgroundColor = "#c4c4c4";
			batuPlayer.style.backgroundColor = "transparent";
			guntingPlayer.style.backgroundColor = "transparent";
			return win();
		case "guntingkertas":
			guntingPlayer.style.backgroundColor = "#c4c4c4";
			batuPlayer.style.backgroundColor = "transparent";
			kertasPlayer.style.backgroundColor = "transparent";
			return win();
		case "batukertas":
			batuPlayer.style.backgroundColor = "#c4c4c4";
			kertasPlayer.style.backgroundColor = "transparent";
			guntingPlayer.style.backgroundColor = "transparent";
			return lose();
		case "kertasgunting":
			kertasPlayer.style.backgroundColor = "#c4c4c4";
			batuPlayer.style.backgroundColor = "transparent";
			guntingPlayer.style.backgroundColor = "transparent";
			return lose();
		case "guntingbatu":
			guntingPlayer.style.backgroundColor = "#c4c4c4";
			batuPlayer.style.backgroundColor = "transparent";
			kertasPlayer.style.backgroundColor = "transparent";
			return lose();
		case "batubatu":
			batuPlayer.style.backgroundColor = "#c4c4c4";
			kertasPlayer.style.backgroundColor = "transparent";
			guntingPlayer.style.backgroundColor = "transparent";
			return draw();
		case "kertaskertas":
			kertasPlayer.style.backgroundColor = "#c4c4c4";
			batuPlayer.style.backgroundColor = "transparent";
			guntingPlayer.style.backgroundColor = "transparent";
			return draw();
		case "guntinggunting":
			guntingPlayer.style.backgroundColor = "#c4c4c4";
			batuPlayer.style.backgroundColor = "transparent";
			kertasPlayer.style.backgroundColor = "transparent";
			return draw();
	}
}

batuPlayer.addEventListener("click", () => {
	game("batu");
});

kertasPlayer.addEventListener("click", () => {
	game("kertas");
});

guntingPlayer.addEventListener("click", () => {
	game("gunting");
});

refresh.addEventListener("click", () => {
	batuPlayer.style.backgroundColor = "transparent";
	kertasPlayer.style.backgroundColor = "transparent";
	guntingPlayer.style.backgroundColor = "transparent";
	buttonCom.item(0).style.borderRadius = "transparent";
	buttonCom.item(1).style.backgroundColor = "transparent";
	buttonCom.item(2).style.backgroundColor = "transparent";
	sign.style.display = "block";
	resultWin.style.display = "none";
	resultLose.style.display = "none";
	resultDraw.style.display = "none";
});
