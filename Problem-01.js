function totalFine(fare) {
    if (typeof fare !== 'number' || fare <= 0) {
        return "Invalid";
    }
    return fare + (fare * 0.20) + 30;
}

console.log(totalFine(552));
