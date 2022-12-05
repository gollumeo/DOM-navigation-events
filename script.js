const OL = document.querySelector("ol *:last-child");
// const LAST_CHILD = OL.lastChild;

console.log(OL);

const MAIN = document.querySelector('main');
const secondSection = MAIN.children[1];
const thirdSection = MAIN.children[2];
const secondTitle = secondSection.querySelector('h2');
const thirdTitle = thirdSection.querySelector('h2');

secondSection.appendChild(thirdTitle);
thirdSection.appendChild(secondTitle);

const secondSectionFirstChild = secondSection.children[0];
secondSection.insertBefore(thirdTitle, secondSectionFirstChild);

const thirdSectionFirstChild = thirdSection.children[0];
thirdSection.insertBefore(secondTitle, thirdSectionFirstChild);

MAIN.removeChild(thirdSection);