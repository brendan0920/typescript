"use strict";
let dieRolls = [];
for (let index = 0; index < 20; index++) {
    let dieRoll = Math.floor(Math.random() * 6) + 1;
    dieRolls.push(dieRoll);
}
