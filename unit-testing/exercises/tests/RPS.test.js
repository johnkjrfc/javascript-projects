const {whoWon} = require('../RPS.js')

describe("whoWon", function(){
    
    test("if player1 is equal to player2, return 'TIE!'", function(){
        let output = whoWon('rock', 'rock');
        expect(output).toBe("TIE!");

    }); 
    test("if player1 = rock, and player2 = paper, return 'Player 2 Wins!'", function(){
        let output = whoWon('rock', 'paper');
        expect(output).toBe("Player 2 wins!");
    });
    test("if player1 = paper, and player2 = scissors, return 'Player 2 wins!'", function(){
        let output = whoWon('paper', 'scissors');
        expect(output).toBe('Player 2 wins!');
    });
    test("if player1 = scissors, and player2 = rock, return 'Player 2 wins!'", function(){
        let output = whoWon('scissors', 'rock');
        expect(output).toBe('Player 2 wins!');
    });
})