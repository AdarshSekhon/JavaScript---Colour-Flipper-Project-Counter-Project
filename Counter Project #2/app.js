// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector('#value')
const btns = document.querySelectorAll(".btn")
const randomDigit = [1, 2, 3, 4, 5, 6, 7, 8, 9]

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('increase')){
            count++;
        }
        


        // MODIFICATION #1 - Creation of a button that increments the count by 10. 
        // (See index.html for code of button's creation)
        else if(styles.contains('increase-10')){
            count += 10;
        }



        // MODIFICATION #2 - Creation of a button that decrements the count by 10. 
        // (See index.html for code of button's creation)
        else if(styles.contains('decrease-10')){
            count -= 10;
        }



        // MODIFICATION #3 - Creation of a button that increments count by a random number from the array "randomDigit" 
        // when the "sign" variable is equal to 0, and decrements by a random number from the array when the "sign" variable is 1. 
        // (See index.html for code of button's creation)
        else if(styles.contains('random')){
            let sign = Math.floor(Math.random() * 2);
            if (sign == 0){
                count += randomDigit[getRandomNumber()];
            }
            else if (sign == 1){
                count -= randomDigit[getRandomNumber()];
            }   
        }



        else{
            count = 0;
        }
        if(count > 0){
          value.style.color = "green";  
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if(count === 0){
            value.style.color = "#222"
        }
        value.textContent = count;
    })
});

function getRandomNumber() {
    return Math.floor(Math.random() * randomDigit.length);
}