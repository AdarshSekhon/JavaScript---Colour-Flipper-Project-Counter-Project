// MODIFICATION #2 - Selecting the "Halloween" link and clicking the button changes the background 
// to a random gradient background from the colour's array, comprised of Halloween colours only (orange,  yellow, and black). 
// (See "hex.html" for code of button's creation).
const colours = ["linear-gradient(to right, #F75F1C, black, #331800)", "linear-gradient(#F75F1C, black, #331800)", "linear-gradient(to left, #F75F1C, black, #331800)", "linear-gradient(to bottom right, #F75F1C, black, #331800", "linear-gradient(to bottom left, #F75F1C, black, #331800)", "linear-gradient(to top left, #F75F1C, black, #331800)", "linear-gradient(to top right, #F75F1C, black, #331800)"];



const btn = document.getElementById('btn');
const colour = document.querySelector('.colour')

btn.addEventListener('click', function () {
    // get random number between 0 - 6 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundImage = colours[randomNumber];
    colour.textContent = colours[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colours.length);
    
}