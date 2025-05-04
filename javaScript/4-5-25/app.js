// for(var i=0; i<10; i++){
//     console.log("Shhabaz")
//     console.log("Shhabaz")
//     console.log("Shhabaz")
//     console.log("Shhabaz")
//     console.log("Shhabaz")
//     console.log("Shhabaz")
// }




// function abc(){

//     var userName = "Faisal"
//     return userName




// }

//console.log("userName=====>",userName)

//"Faisal"
//console.log(abc()) //faisal
//abc()


function toss() {
    console.log("we are Here in Lahore Gaddafi stadium to play Between Match Karachi vs Lahore")
    var toss = Math.round(Math.random())

    if (toss == 0) {
        console.log("Karachi Won The Toss and Choose to Bat First")
        var karacScore = innings("Karachi")
        var lahoreScore = innings("lahore", karacScore)
    }
    else {
        console.log("Lahore Won The Toss and Choose to Bat First")
        var lahoreScore = innings("lahore")
        var karacScore = innings("Karachi", lahoreScore)
    }

}

toss()

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}


function innings(team, target) {
    console.log(team + " has started the innings")

    var score = 0;
    var wicket = 0
    var over = 1


    overLoop: for (var i = 0; i < over; i++) {

        console.log("Over is started ", (i + 1))

        for (var j = 1; j <= 6; j++) {
            console.log("Ball #" + i + "." + j + " Bowled")
            var runs = Math.floor(Math.random() * 6)

            if (runs === 0) {
                console.log("******")
                console.log("What a Bold,Wow! Out")
                console.log("******")
                wicket++
                if (wicket == 2) {
                    if (target !== undefined && target > score) {
                        console.log(team + " has not chase the Target successfully")
                        console.log(team + "  has lost the match by" + (target - score) + " runs")


                    }

                    else if (target == score) {
                        console.log("Match is Tie")
                    }
                    else {
                        console.log(team + " has given the target " + score)
                    }

                }

                console.log(team + " Score is " + score + "/ " + wicket)
                break overLoop
            }
            else {
                score = score + runs
                console.log("Runs Scored  ", runs)

                if (target !== undefined && score > target) {
                    //console.log(team + " has won the Match")
                    console.log(team + " has won the macth by " + (2 - wicket) + " wickets")
                    break overLoop
                }
            }

            sleep(2000);

            console.log(team + " Score is " + score + "/ " + wicket)

        }

        sleep(4000);

    }

    if (target !== undefined) {
        if (score < target && wicket < 2) {
            console.log(team + " has won the Match")
            console.log(team + " has won the macth by " + (2 - wicket) + " wickets")
        }
        else if (score == target) {
            console.log("Match is Tie")

        }
        
    }

    else {
        console.log(team + " has given the target " + score)
    }
    return score

    //console.log(team +"  has given the target "+ score)

}

