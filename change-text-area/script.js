//Font Style change--------------------------->
document.getElementById('bold').addEventListener('click', function () {
    const changeTextArea = document.getElementById('textArea');
    changeTextArea.style.fontWeight = 'bold';
})
document.getElementById('italic').addEventListener('click', function () {
    const changeValueItalic = document.getElementById('textArea');
    changeValueItalic.style.fontStyle = 'italic';
})

document.getElementById('underline').addEventListener('click', function () {
    const changeValueUnderline = document.getElementById('textArea');
    changeValueUnderline.style.textDecoration = 'underline';

})




//Text align part practice----------------->
document.getElementById('left').addEventListener('click', function () {
    const changeValueLeft = document.getElementById('textArea');
    changeValueLeft.style.textAlign = 'left';
})
document.getElementById('center').addEventListener('click', function () {
    const changeValueCenter = document.getElementById('textArea');
    changeValueCenter.style.textAlign = 'center';
})
document.getElementById('right').addEventListener('click', function () {
    const changeValueRight = document.getElementById('textArea');
    changeValueRight.style.textAlign = 'right';
})
document.getElementById('justify').addEventListener('click', function () {
    const changeValueRight = document.getElementById('textArea');
    changeValueRight.style.textAlign = 'justify';
})

//Add font size part-------------->
document.getElementById('fontSize').addEventListener('click', function (event) {
    const getFontValue = document.getElementById('textArea');
    const storeValue = event.target.value;
    // console.log(storeValue)
    getFontValue.style.fontSize = storeValue + 'px';
})


// Another part---------------------------------------------------|
// const fontTextArea = document.getElementById('textArea');      |
// function changeNewFontSize(event){                             | 
//     fontTextArea.style.fontSize = event.target.value + 'px';   |
// }                                                              |
// Another part---------------------------------------------------|

//change text color dynamically------------------>
const colorTextArea = document.getElementById('textArea');
function changeTextArea(event) {
    colorTextArea.style.color = event.target.value;

}
