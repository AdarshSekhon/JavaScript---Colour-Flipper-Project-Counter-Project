const colors = ["url(js#1.jpg)", "url(js#4.jpg)", "url(js#6.jpg)", "url(js#7.jpg)", "url(js#8.jpeg)"]
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

