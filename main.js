const alphabet = ["Alfa", "Bravo", "Charlie", "Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India", "Juliett", "Kilo", "Lima", "Mike", "November", "Oscar", "Papa", "Quebec", "Romeo", "Sierra", "Tango", "Uniform", "Victor", "Whiskey", "Xray", "Yankee", "Zulu"];
const inputTxt = document.querySelector('textarea');
const divTxt = document.querySelector('.translatedTxt');

const phoneticAlph = (e) => {
    e.preventDefault;
    let translatedTxt = "";
    const inputValue = inputTxt.value;
    for (let i = 0; i < inputValue.length; i++) {
        for (let x = 0; x < alphabet.length; x++) {
            if (inputValue[i].toUpperCase() === alphabet[x][0]) {
                translatedTxt += `${alphabet[x]} `;
                break;
            }
        }
        if (inputValue[i] === "!" || inputValue[i] === "?" || inputValue[i] === "," || inputValue[i] === "." || inputValue[i] === "'" || inputValue[i] === `"`) {
            translatedTxt += `${inputValue[i]} `;
        }
    }
    divTxt.textContent = translatedTxt;
}

inputTxt.addEventListener('keyup', phoneticAlph);