const singular = "bottle";
const plural = "bottles";
let word = plural;
let count = 99;

while (count > 0) {
    console.log(`${count} ${word} of beer on the wall`);
    console.log(`${count} ${word} of beer,`);
    console.log("Take one down, pass it around,");

    count--;

    if (count > 0) {
        if (count === 1) {
            word = singular;
        }
        console.log(`${count} ${word} of bear on the wall.`);
    }
}

console.log(`No more ${plural} of beer on the wall,`);
