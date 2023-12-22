// MODIFICATION #3 - Selecting the "Background" link and clicking the button changes the background 
// to a random jpg or jpeg image from the  "colours" array. 
// (See "background.html for code of button's creation")
const colors = ["url(js1.jpg)", "url(js2.jpeg)", "url(js3.jpg)", "url(js4.jpg)", "url(js5.jpg)", "url(js6.jpg)", "url(js7.jpg)", "url(js8.jpeg)"]



const btn = document.getElementById('btn');
const colour = document.querySelector('.colour')

btn.addEventListener('click', function () {
    // get random number between 0 - 6 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
    // const img = images[randomNumber]
    body.style.backgroundImage = colors[randomNumber];
    colour.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
    
}

var body = document.getElementsByTagName('body')[0];
body.style.backgroundImage = "";

