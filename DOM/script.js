//some result practice
console.log(document.getElementsByTagName("li"));
const lists = document.getElementsByTagName("li");
const heading = document.getElementsByTagName("h1");
for (const list of lists) {
    console.log(list.innerText);
}
for (const h1 of heading) {
    console.log(h1.innerText);
}

//use getElementById
/*it is show single element because it is unique*/
console.log(document.getElementById("first-title").innerText = "change the title");


//Use getElementsByClassName
/*it is show array like object. if i its apply only one class this time it also return array like object */
const showClass = document.getElementsByClassName("use-class");
for (const show of showClass) {
    console.log(show.innerText);
}

//User querySelector--->
const item = document.querySelector(".another li");
console.log(item.getAttribute("class"));
console.log(item.classList);

//use querySelectorAll
const items = document.querySelectorAll(".another li");
for (const item1 of items) {
    console.log(item1.style.color="green");
   
}

//classList add remove practice----->
const practice = document.getElementById("apple");
console.log(practice.getAttribute("class"));
console.log(practice.classList.add("bangladesh"));
console.log(practice.classList)
console.log(practice.classList.remove("salauddin"));
console.log(practice.classList);
console.log(practice.setAttribute("title","Hi salaudin"));

//using css style
const tryThis = document.querySelectorAll('section');
for(const tryProject of tryThis){
    tryProject.style.border = "2px solid green";
    tryProject.style.padding = "30px"; 
}

//Using child node---->
const showMe  = document.getElementById("third-section");
const li = document.createElement('li');
console.log(li.innerText = "Hare i add new li")
console.log(li);
console.log(showMe.childNodes);
console.log(showMe.childNodes[1]);
// console.log(showMe.childNodes[2].childNodes[2].nextSibling);


//Append Child practice-------->
const hen = document.getElementById("changeItem");
console.log(hen);
const list = document.createElement("li");
list.innerText = "add korte parce";
hen.appendChild(list);

//main container design
const selectVai = document.getElementById("main-containers");

const createSection = document.createElement("section");

const headings = document.createElement("h1");
headings.innerText = "Name List";
createSection.append(headings);

const ulAdd = document.createElement("ul");

const liAdd = document.createElement("li");
liAdd.innerText = "salauddin";
ulAdd.appendChild(liAdd);

const liAdd2 = document.createElement("li");
liAdd2.innerText = "Ajoy";
ulAdd.appendChild(liAdd2);

const liAdd3 = document.createElement("li");
liAdd3.innerText = "Emon";
ulAdd.appendChild(liAdd3);

selectVai.appendChild(createSection);

//second process---->
const sectionSelect = document.getElementById("main-containers");
const sectionSelects = document.createElement("section");

sectionSelects.innerHTML = `
<h1>My name is salsudin</h1>
<ul>
<li>kamal</li>
<li>jamal</li>
<li>gamal</li>
</ul>
`
sectionSelect.appendChild(sectionSelects);



