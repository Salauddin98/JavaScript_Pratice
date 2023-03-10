//Font Style change--------------------------->
document.getElementById('bold').addEventListener('click', function () {
    // const changeTextArea = document.getElementById('textArea');
    // changeTextArea.style.fontWeight = 'bold';
    storeTextArea('textArea').style.fontWeight = 'bold';

})

document.getElementById('italic').addEventListener('click', function () {
    // const changeValueItalic = document.getElementById('textArea');
    // changeValueItalic.style.fontStyle = 'italic';
    storeTextArea('textArea').style.fontStyle = 'italic';

})

document.getElementById('underline').addEventListener('click', function () {
    // const changeValueUnderline = document.getElementById('textArea');
    // changeValueUnderline.style.textDecoration = 'underline';
    storeTextArea('textArea').style.textDecoration = 'underline';
})




//Text align part practice----------------->
document.getElementById('left').addEventListener('click', function () {
    // const changeValueLeft = document.getElementById('textArea');
    // changeValueLeft.style.textAlign = 'left';
    storeTextArea('textArea').style.textAlign = 'left';
})
document.getElementById('center').addEventListener('click', function () {
    // const changeValueCenter = document.getElementById('textArea');
    // changeValueCenter.style.textAlign = 'center';
    storeTextArea('textArea').style.textAlign = 'center';
})
document.getElementById('right').addEventListener('click', function () {
    // const changeValueRight = document.getElementById('textArea');
    // changeValueRight.style.textAlign = 'right';
    storeTextArea('textArea').style.textAlign = 'right';
})
document.getElementById('justify').addEventListener('click', function () {
    // const changeValueRight = document.getElementById('textArea');
    // changeValueRight.style.textAlign = 'justify';
    storeTextArea('textArea').style.textAlign = 'justify';
})

//Add font size part-------------->
document.getElementById('fontSize').addEventListener('click', function (event) {
    const getFontValue = storeTextArea('textArea');
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
const colorTextArea = storeTextArea('textArea');
function changeTextArea(event) {
    colorTextArea.style.color = event.target.value;

}
