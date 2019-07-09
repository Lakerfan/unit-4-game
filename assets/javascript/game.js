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

                crystalCollector.crystal1 = Math.floor(Math.random() * 12) + 1;
                console.log("crystal-1: " + crystalCollector.crystal1);

                crystalCollector.crystal2 = Math.floor(Math.random() * 12) + 1;
                console.log("crystal-2: " + crystalCollector.crystal2);

                crystalCollector.crystal3 = Math.floor(Math.random() * 12) + 1;
                console.log("crystal-3: " + crystalCollector.crystal3);

                crystalCollector.crystal4 = Math.floor(Math.random() * 12) + 1;
                console.log("crystal-4: " + crystalCollector.crystal4);

                //This rests the score back to 0
                crystalCollector.totalScore=0;

                //This displays the current vlaue of the total score counter in the wins and losses
                $("#wins").html(crystalCollector.wins);
                $("#losses").html(crystalCollector.losses);
                $("#totalScore").htnl(crystalCollector.totalScore);

                crystalClick: function(event) {
                var crystalClick = event.trget.id;
                crystalCollector.totalScore += crystalCollector[crystalClick];
                $("#totalScore").html(crystalCollector.totalScore);
                }
            }
        }
});