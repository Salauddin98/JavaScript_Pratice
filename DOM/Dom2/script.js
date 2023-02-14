//process ---1
function eventTime() {
    document.body.style.backgroundColor = "black";
}

//process----2
const whiteColor = document.getElementById('white');
whiteColor.onclick = eventTime2;
function eventTime2() {
    document.body.style.backgroundColor = "white";
}

//process---3
const redColor = document.getElementById('red');
redColor.onclick = function eventTime3() {
    document.body.style.backgroundColor = "red";
}

//process---4
const yellowColor = document.getElementById('yellow');
yellowColor.addEventListener('click', function eventTime4() {
    document.body.style.backgroundColor = "yellow";

})

//process ---5 (This process we use most of the time)--->
document.getElementById('orange').addEventListener('click', function () {
    document.body.style.backgroundColor = 'orange';
    const inputValue = document.getElementById('inputFiled');
    const storeInputValue = inputValue.value;

    const showInputValue = document.getElementById('para');
    showInputValue.innerText = storeInputValue;
    inputValue.value = '';

})


//show name ---------->
function changeName() {
    const myName = document.getElementById('name').innerText = "My name is salauddin";

}


//input value change-----> 
document.getElementById('salauddin').addEventListener('click', function () {
    const inputValue = document.getElementById('inputFiled');
    const storeInputValue = inputValue.value;

    const showInputValue = document.getElementById('para');
    showInputValue.innerText = storeInputValue;
    inputValue.value = '';
})


//textarea practice
document.getElementById('clickme').addEventListener('click',function(){
    const textArea = document.getElementById('lastPractice');
    const textValue = textArea.value;
    
    const Add = document.getElementById('addPara');
    const newElement = document.createElement('p');
    newElement.innerText = textValue;
    textArea.value = '';
    
    Add.appendChild(newElement);

})

