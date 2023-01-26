const WORD_BANK = ['andromeda', 'aquarius', 'aries', 'chamaeleon', 'crater', 'dorado', 'hercules', 'hydra'];
const secretWord = WORD_BANK[Math.floor(Math.random() * WORD_BANK.length)]

const spaceman = document.getElementById('spaceman')
const wrongArr = document.getElementById('wrong-letters')
const letters = document.getElementById('letters')
const message = document.querySelector('h3')
const wordEl = document.getElementById('secret-word')


for (let i=0; i<secretWord.length; i++) {
    const letterEl = document.createElement('div')
    wordEl.appendChild(letterEl)
}

letters.addEventListener('click', function(event) {
    const guess = event.target.innerText.toLowerCase();
    
})