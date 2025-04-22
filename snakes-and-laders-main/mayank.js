let currentPosition = 1;

const snakes = {
    75: 55,
    60: 40,
    44: 22,
    33: 13,
    20: 5
};

const ladders = {
    4: 25,
    9: 35,
    23: 42,
    34: 53,
    47: 67
};

const boxes = document.querySelectorAll('.box');
const button = document.querySelector('button');
const diceNumberDiv = document.getElementById('dice-number');

function getBoxByPosition(position) {
    for (let box of boxes) {
        if (box.textContent.trim() === position.toString()) {
            return box;
        }
    }
    return null;
}

function movePlayer(newPosition) {
    boxes.forEach(box => box.classList.remove('player'));
    const box = getBoxByPosition(newPosition);
    if (box) {
        box.classList.add('player');
    }
}

function rollDice() {
    const dice = Math.floor(Math.random() * 6) + 1;
    diceNumberDiv.textContent = `🎲 Number: ${dice}`;

    let nextPosition = currentPosition + dice;

    if (nextPosition > 78) {
        alert("You need exact number to reach the Winner box!");
        return;
    }

    if (snakes[nextPosition]) {
        alert(`Oops! Snake at ${nextPosition}, go back to ${snakes[nextPosition]}`);
        nextPosition = snakes[nextPosition];
    } else if (ladders[nextPosition]) {
        alert(`Yay! Ladder at ${nextPosition}, climb to ${ladders[nextPosition]}`);
        nextPosition = ladders[nextPosition];
    }

    currentPosition = nextPosition;
    movePlayer(currentPosition);

    if (currentPosition === 78) {
        alert("🎉 You won the game!");
    }
}

button.addEventListener('click', rollDice);

movePlayer(currentPosition);
