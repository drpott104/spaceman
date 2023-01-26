const WORD_BANK = ['andromeda', 'aquarius', 'aries', 'chamaeleon', 'crater', 'dorado', 'hercules', 'hydra'];
let secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]
let wordArr = secretWord.split('')
const bodyParts = ['right-leg', 'left-leg', 'right-arm', 'left-arm', 'body', 'head']
let numWrong = 0;
let wrongGuesses = '';
let numRight = 0;

const spaceman = document.getElementById('spaceman')
const wrongArr = document.getElementById('wrong-letters')
const letters = document.getElementById('letters')
const message = document.querySelector('h3')
const wordEl = document.getElementById('secret-word')
const playAgn = document.getElementById('playAgn')

for (let i=0; i<secretWord.length; i++) {
    const letterEl = document.createElement('div')
    wordEl.appendChild(letterEl)
}
console.log(secretWord)
letters.addEventListener('click', function(event) {
    if (event.target.tagName !== 'BUTTON') return
    const guess = event.target.innerText.toLowerCase();
    for (let i=0; i<wordArr.length; i++) {
        
        wordArr.some(function() {
            if (guess === wordArr[i]) {
                document.querySelector(`#secret-word :nth-child(${i+1})`).innerText = guess.toUpperCase()
                
            }
        })
    }
    document.getElementById(guess).style.visibility = 'hidden'
    if (secretWord.indexOf(guess) === -1) {
        console.log('wrong')
        numWrong++
        if (numWrong > 5) {
            message.innerText = 'Sorry, you reached the maximum number of guesses'
            for (let i=0; i<26; i++) {
                document.querySelector(`#letters :nth-Child(${i+1})`).style.visibility = 'hidden'
            }
            playAgn.style.visibility = 'visible'
        }
        wrongGuesses += guess
        document.querySelector('span').innerText = wrongGuesses
        document.getElementById(`${bodyParts[numWrong - 1]}`).style.visibility = 'hidden'
        return
    } else {
        numRight += wordArr.filter(char => guess === char).length
        if (numRight === wordArr.length) {
            message.innerHTML = 'Congratulations!!! You guessed the word!'
            playAgn.style.visibility = 'visible'
        }
    }
})
        
function checkLetter(guess) {
    return guess === word
}

playAgn.addEventListener('click', function() {
    numRight = 0;
    for (let i=0; i<wordArr.length; i++) {
        let letter = document.querySelector(`#secret-word :nth-child(${1})`)
        letter.parentNode.removeChild(letter)
    }
    secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]
    wordArr = secretWord.split('')
    for (let i=0; i<secretWord.length; i++) {
        const letterEl = document.createElement('div')
        wordEl.appendChild(letterEl)
    }
    for (let i=0; i<26; i++) {
        document.querySelector(`#letters :nth-Child(${i+1})`).style.visibility = 'visible'
    }
    playAgn.style.visibility = 'hidden'
    letters.style.visibility = 'visible'
    spaceman.style.visibility = 'visible'
    message.innerText = 'Pick a letter'
})