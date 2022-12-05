const _initTime = Date.now()

const getElapsedTime = () => {
  return Number((Date.now() - _initTime) / 1000).toFixed(2) + 's'
}

const clickOnSquare = (e) => {

  console.log(e.target.classList[1])
  console.log(getElapsedTime())

  let newDiv = document.createElement('div');
  newDiv.classList = e.target.classList;
  newDiv.classList.toggle("displayedsquare");
  let wrapper = document.querySelector('.displayedsquare-wrapper');
  wrapper.appendChild(newDiv);

  let list = document.querySelector('ul');
  let newPin = document.createElement('li')
  newPin.innerText = e.target.classList[1] + " generated in " + getElapsedTime();
  list.appendChild(newPin);
}

const actionSquares = document.querySelectorAll('.actionsquare')
for (let actionSquare of actionSquares) {
  actionSquare.addEventListener('click', clickOnSquare)

}

let random = () => { return Math.random() * 256 }

document.body.addEventListener('keydown', e => {
  if (e.code === "Space") {
    document.body.style.backgroundColor = 'rgb(' + random() + ', ' + random() + ', ' + random() + ')';
    list = document.querySelector('ul');
    let spacePressed = document.createElement('li');
    spacePressed.innerText = "Background randomly generated in " + getElapsedTime();
    list.appendChild(spacePressed);


    } else if (e.code === "KeyL") {
      li = document.querySelector('li');
      list = document.querySelector('ul');
      while (list.childElementCount > 0) {
        list.removeChild(list.lastElementChild);
      }
    }
  }
);