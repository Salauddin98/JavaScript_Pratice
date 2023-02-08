//some result practice
console.log(document.getElementsByTagName("li"));
const lists = document.getElementsByTagName("li"); 
const heading = document.getElementsByTagName("h1");
for(const list of lists ){
    console.log(list.innerText);
}
for(const h1 of heading ){
    console.log(h1.innerText);
}

//use getElementById
/*it is show single element because it is unique*/
console.log(document.getElementById("first-title").innerText = "change the title");


//Use getElementsByClassName
/*it is show array like object. if i its apply only one class this time it also return array like object */
const showClass = document.getElementsByClassName("use-class");
for(const show of showClass){
    console.log(show.innerText);
}
