let runs = 0;
let wickets = 0;
let balls = 0;

function updateScore() {
    document.getElementById("score").innerText =
        runs + "/" + wickets;

    let overs = Math.floor(balls / 6) + "." + (balls % 6);
    document.getElementById("overs").innerText = overs;

    let totalOvers = balls / 6;
    let runRate = totalOvers > 0 ? (runs / totalOvers).toFixed(2) : "0.00";
    document.getElementById("runrate").innerText = runRate;
}

function addRun(run) {
    runs += run;
    balls++;
    updateScore();
}

function addWicket() {
    wickets++;
    balls++;
    updateScore();
}

function addBall() {
    balls++;
    updateScore();
}
