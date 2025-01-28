
const randomButton = document.getElementById('random-button');

function formatRGB(red, green, blue) {
  return `rgb(${red}, ${green}, ${blue})`;
}


function changeBackground() {

  for (let i = 0; i < 1; i++) { 
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);


    document.body.style.backgroundColor = formatRGB(red, green, blue);
  }
}


randomButton.addEventListener('click', changeBackground);
