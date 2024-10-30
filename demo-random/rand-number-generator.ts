function rollDie(): number {
    return Math.floor(Math.random() * 6) + 1;

}


let dieRolls: number[] = [];
for (let index = 0; index < 20; index++) {
    let dieRoll: number = Math.floor(Math.random() * 6) + 1;
    dieRolls.push(dieRoll);
}