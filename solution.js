// problem-01 solution
function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    return fare + (fare * 0.20) + 30;
}

// problem-02 solution
function onlyCharacter(str) {
    if (typeof str !== "string") {
        return "Invalid";
    }
    return str.split(' ').join('').toUpperCase();
}

// problem-03 solution
function bestTeam(player1, player2) {
    if (typeof player1 !== "object" || typeof player2 !== "object" || player1 === null || player2 === null) {
        return "Invalid";
    }

    const total1 = player1.foul + player1.cardY + player1.cardR;
    const total2 = player2.foul + player2.cardY + player2.cardR;

    if (total1 < total2) {
        return player1.name;
    }
    else if (total2 < total1) {
        return player2.name;
    }
    else {
        return "Tie";
    }
}