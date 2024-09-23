//Generate a Random Colour.

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';

    for(let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)]

    //hex[Math.floor(Math.random() * 16)] //This value is basically giving us the indexes of the string hex.
  }

    return color;
};

// console.log(randomColor()); 

let intervalId;
const startChangingColor = function() {
  
  intervalId = setInterval(changeBgColor, 1000);

  function changeBgColor() {
  document.body.style.backgroundColor = randomColor();
  }
  
};

const stopChangingColor = function() {
  clearInterval(intervalId);
};

document.querySelector("#start").addEventListener('click', startChangingColor)

document.querySelector("#stop").addEventListener('click', stopChangingColor)

