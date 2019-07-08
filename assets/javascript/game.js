/*Javascript*/
$(document).ready(function() {
// variables for the game creates an object for the game and gives each element a property
        var crystalCollector = {
        
            rnumber: 0,
            wins: 0,
            losses: 0,
            crystal1: 0,
            crystal2: 0,
            crystal3: 0,
            crystal4: 0,
            totalScore: 0,

            startGame: function() {
                //jquery set rnumber equal to value between 19 and 120. The totals to reach in the game
                crystalCollector.rnumber = Math.floor(Math.random() * 120) + 19;
                $("#rnumber").html(crystalCollector.rnumber);
                console.log("the computer random number is: " + crystalCollector.rnumber);
            }
        }
});