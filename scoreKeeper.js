var p1Button = document.getElementById("p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var p1Score = 0;
var p2Score = 0;
var p1Display = document.querySelector("#scoreOne");
var p2Display = document.querySelector("#scoreTwo");
var winningScoreDisplay = document.getElementById("winningScoreDisplay");

var gameOver = false;
var numInput = document.querySelector("input");
var winningScore = 0;


p1Button.addEventListener("click", function() {
	if (!gameOver) {
	p1Score++;
	if (p1Score === winningScore) {
		p1Display.classList = "winner";
		gameOver = !gameOver;
		alert("Player One Wins!");
	}
	p1Display.textContent = p1Score;
	}
})

p2Button.addEventListener("click", function() {
	if (!gameOver) {
	p2Score++;
	if (p2Score === winningScore) {
		p2Display.classList = "winner";
		gameOver = !gameOver;
		alert("Player Two Wins!");
	}
	p2Display.textContent = p2Score;
	}
})

resetButton.addEventListener("click", function() {
	reset();
});

function reset() {
p1Score = 0;
	p2Score = 0;
	p1Display.textContent = p1Score;
	p2Display.textContent = p1Score;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}

numInput.addEventListener("change", function() {
	winningScoreDisplay.textContent = this.value;
	winningScore = Number(this.value);
	reset();
})