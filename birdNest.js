//write a function Nesting Birds that, given an array of characters and nested sub-arrays,
//concatenates the characters and returns the name of the bird in the nest.



let chars = ['r', 'b', ['b', ['i'], 'n']];

function nestingBird(chars) {
    let birdName = '';
    for (let i = 0; i < chars.length; i++) {
        let currentChar = chars[i];
        if (Array.isArray(currentChar)) {
            birdName += nestingBird(currentChar);
        }
        else {
            birdName += currentChar;
        }
    }
    console.log(birdName);
    return birdName;
}