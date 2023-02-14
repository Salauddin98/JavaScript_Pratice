document.getElementById('submit-btn').addEventListener('click',function(event){
    const gmail = document.getElementById('user-gmail').value;
    const password = document.getElementById('user-pass').value;
    if(gmail==='smd@gmail.com' && password==='1234'){
       window.location.href = 'deposit.html'

    }else{
        alert("Please Enter Your Valid Information For Login");

    }

})