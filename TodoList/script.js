let count = 0;
document.getElementById('addItemsBtn').addEventListener('click', function () {
    const tableBody = document.getElementById('tableBodyField');
    const storeName = getInputFieldValue('nameField');
    const storeDepartment = getInputFieldValue('departmentField');

    if(isNaN(storeName) === false || isNaN(storeDepartment) === false || storeName === '' || storeDepartment === ''){
        return alert('Please Enter a valid input')
    }
    count += 1;
    const tr = document.createElement('tr');
    tr.innerHTML = `
    <td>${count}</td>
    <td>${storeName}</td>
    <td>${storeDepartment}</td>
    <td><button type="button" class="btn btn-danger deleteBtn">Delete</button>
    <button type="button" class="btn btn-success doneBtn">Done</button>
    </td>
    `
    tableBody.appendChild(tr);
    //For delete and color change----------->
    const elements = document.querySelectorAll('.deleteBtn');
    for (const value of elements) {
        value.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.display = 'none'
        })
    }

    const elementsDoneBtn = document.getElementsByClassName('doneBtn');
    for (const values of elementsDoneBtn) {
        values.addEventListener('click', function (event) {
            event.target.parentNode.parentNode.style.backgroundColor  = 'green';
            event.target.parentNode.parentNode.style.color  = 'white';
        })
    }

})


