// ------------------------------------------------------------------------------------------ //
// --------------------------##############################---------------------------------- //
// -------------------#######     VARIABLES & FUNCTIONS    #######--------------------------- //
// --------------------------##############################---------------------------------- //
// ------------------------------------------------------------------------------------------ //

const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

random = () => { return Math.random() * 256 } //randomly generated a number between 0 & 255

list = document.querySelector('ul');
wrapper = document.querySelector('.displayedsquare-wrapper');
generatedSquares = wrapper.querySelector('div');

// ------------------------------------------------------------------------------------------ //
// --------------------------##############################---------------------------------- //
// -------------------#######        THE ACTUAL CODE       #######--------------------------- //
// --------------------------##############################---------------------------------- //
// ------------------------------------------------------------------------------------------ //

const clickOnSquare = (e) => {

  console.log(e.target.classList[1])
  console.log(getElapsedTime())
  newDiv = document.createElement('div');
  newDiv.classList = e.target.classList;
  newDiv.classList.toggle("displayedsquare");
  wrapper.appendChild(newDiv);
  newPin = document.createElement('li');

  newPin.innerText = e.target.classList[1] + " generated in " + getElapsedTime();
  newDiv.addEventListener('click', () => {
    window.alert(newDiv.classList[1])
  })
  list.appendChild(newPin);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)
}

document.body.addEventListener('keydown', e => {
  if (e.code === "Space") {
    document.body.style.backgroundColor = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
    let spacePressed = document.createElement('li');
    spacePressed.innerText = "Background randomly generated in " + getElapsedTime();
    list.appendChild(spacePressed);

  } else if (e.code === "KeyL") {
    while (list.childElementCount > 0) {
      list.removeChild(list.lastElementChild);
    }
  } else if (e.code === "KeyS") {
    while (wrapper.childElementCount > 0) {
      wrapper.removeChild(wrapper.lastElementChild);
    }
  }
}
);