# Spaceman

## Pick a letter to guess the word

<disappearing spaceman>

___  ___  ___  ___  ___

A B C D E F G…..<buttons>

## Wrong Guesses: 
T S W

Play Again




# Psuedocode

## constants
word bank
secret word
body parts

## cached elements
body parts
alphabet buttons
message
secret word
wrong guesses array

## logic

pick a button
    is letter in secret word
        if letter is in word
            add letter to secret word array, (may have duplicate letters)
        if not
            add letter to wrong guesses array
            body part disappears
        button clicked disappears
