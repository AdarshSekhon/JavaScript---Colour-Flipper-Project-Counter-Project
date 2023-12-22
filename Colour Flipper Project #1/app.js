// MODIFICATION #1 - Selecting the "Christmas" link and clicking the button changes the background 
// to a random gradient background from the "colours" array, comprised of Christmas colours only (red, green, and white). 
// (See "index.html" for code of button's creation). 
const colours = ["linear-gradient(to right, red, green, white)", "linear-gradient(white, green, red)", "linear-gradient(to left, red, green, white)", "linear-gradient(to bottom right, red, green, white", "linear-gradient(to bottom left, red, green, white)", "linear-gradient(to top left, red, green, white)", "linear-gradient(to top right, red, green, white)"];



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