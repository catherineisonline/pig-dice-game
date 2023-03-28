<img src="https://github.com/catherineisonline/pig-dice-game/blob/main/images/project-preview.png?raw=true"/>

# Pig Dice Game

[Live Preview](https://pig-dice-game-beta.vercel.app/)

This is a web-based implementation of the classic dice game Pig, created using HTML, CSS, and vanilla JavaScript.

## How to Play
The objective of the game is to be the first player to reach a total score of 100 or more points. Each turn, a player repeatedly rolls a die until either a 1 is rolled or the player decides to "hold" and end their turn:

If the player rolls a 1, their turn ends and they receive no points for the turn.
If the player rolls any other number, it is added to their turn total and they can choose to either roll again or hold. If they choose to hold, their turn total is added to their score, and the turn ends.
Players can also choose to use additional rules or variations, such as requiring a minimum score to start adding to their total, playing with two or more dice, or allowing the option to "double" or "triple" their score with certain rolls.

## How to Run
To run the Pig Dice Game, simply open the index.html file in a web browser. No additional installation or setup is required.

## Features
This implementation of the Pig Dice Game includes the following features:

Two players take turns rolling a single die.
Each player's turn total and total score are displayed.
Players can choose to hold their turn total and add it to their total score.
Rolling a 1 ends the player's turn and forfeits their turn total.
The game automatically switches turns after each turn ends.
The game ends and declares a winner when a player reaches a total score of 100 points.