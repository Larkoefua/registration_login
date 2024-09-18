const loginForm = document.querySelector('#login_form');
console.log(loginForm);
loginForm.addEventListener('submit', function (event) {
    console.log(event.target)
    event.preventDefault();
    const formData = new FormData(event.target);  //this is a way to create a object in a more organized structure
    console.log(
        
        formData.get('email'),
        formData.get('password')
    );

    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account Logged In Successfully!';

});