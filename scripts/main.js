let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/shark.jpg') {
      myImage.setAttribute('src','images/shark2.jpg');
    } else {
      myImage.setAttribute('src','images/shark.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  console.log('myName = ' + myName);
  console.log('name = ' + localStorage.getItem);
  if (myName === null && localStorage.getItem('name')) {
      myHeading.textContent = 'Mozilla is cool, ' + localStorage.getItem('name');
  } else if (!myName) {
      setUserName();
  } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Mozilla is cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
