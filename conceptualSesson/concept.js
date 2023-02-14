console.log(document.all);//show the all html collection

//add class and add and remove
const example = document.getElementById('try');
example.className = "salauddin";
example.classList.add('alauddin');
example.classList.remove('salauddin');

//Apply createElement------->
const parentsNode = document.getElementById('ulFind');
const newElement = document.createElement('li');
newElement.innerText = 'salauddin';
console.log(newElement.innerText);
parentsNode.appendChild(newElement);


//setAttribute function----->and getAttribute---->
document.getElementById('jamal').setAttribute('class','kamal');//first index-class,id,value,placeholder and second attribute their name------//

console.log(document.getElementById('salauddin').getAttribute('value/id/class'));




