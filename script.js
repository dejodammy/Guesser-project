let numbers;
let value;
let guesses;

function startGame() {
    numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    shuffleArray(numbers);
    value = getRandomValue(numbers);
    guesses = 3; // Set the maximum number of guesses

    document.getElementById("game-container").style.display = "block";
    document.getElementById("message").innerText = "";
    document.getElementById("range").innerText = "";
    document.getElementById("user-input").value = "";
    document.getElementById("guesses-left").innerText = `Guesses left: ${guesses}`;
    document.querySelector("button").style.display = "none";
}

function hiOrLow() {
    const userGuess = parseInt(document.getElementById("user-input").value);

    if (!isNaN(userGuess)) {
        if (userGuess > value) {
            document.getElementById("range").innerText = "The value is lower.";
        } else if (userGuess == value) {
            document.getElementById("range").innerText = "";
        } else {
            document.getElementById("range").innerText = "The value is higher.";
        }
    } else {
        alert("Please enter a valid number.");
    }
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById("user-input").value);

    if (guesses > 0) {
        if (!isNaN(userGuess)) {
            guesses--;

            if (userGuess === value) {
                document.getElementById("message").innerText = "You got the correct value! Hurray!";
                document.getElementById("guesses-left").innerText = "";
                document.querySelector("button").style.display = "block";
            } else {
                const guessesLeft = guesses;
                document.getElementById("message").innerText = `Wrong guess! Try again. You have ${guessesLeft} guess(es) left.`;

                if (guessesLeft === 0) {
                    document.getElementById("message").innerText = "You ran out of chances. GG's!";
                    document.getElementById("guesses-left").innerText = "";
                    document.querySelector("button").style.display = "block";
                } else {
                    document.getElementById("guesses-left").innerText = `Guesses left: ${guessesLeft}`;
                }
            }
        } else {
            alert("Please enter a valid number.");
        }
    }
}

function playAgain() {
    startGame();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function getRandomValue(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function handleEnter(event) {
    if (event.key === 'Enter') {
        checkGuess();
        hiOrLow();
    }
}
