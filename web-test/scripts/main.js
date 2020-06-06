let myHeading = document.querySelector('h1');
myHeading.textContent = 'HELLO WORLD!';

function multiply(num1, num2) {
	let result = num1 * num2;
	return result;
}
/*
document.querySelector('html').onclick = function() {
	alert('别戳我。');
}
*/
let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/katou_megumi.jpg'){
		myImage.setAttribute('src', 'images/saenai.jpg');
	}
	else {
		myImage.setAttribute('src', 'images/katou_megumi.jpg');
	}
}

let myButton = document.querySelector('button');

function setUserName() {
	let myName = prompt('请输入你的名字');
	localStorage.setItem('name', myName);
	myHeading.textContent = '你好啊，' + myName;
}

if(!localStorage.getItem('name')) {
	setUserName();
}
else {
	let storeName = localStorage.getItem('name');
	myHeading.textContent = '你好啊，' + storeName;
}

myButton.onclick = function() {
	setUserName();
}

function setUserName() {
  let myName = prompt('请输入你的名字。');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = '你好啊' + myName;
  }
}