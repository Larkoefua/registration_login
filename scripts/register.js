// alert('JavaScript Works!');
// select form by id
// /*what is done on the left is a variable declaration----for variables we have const and let*/ const registerForm = document.getElementById('register_form');
// console.log(registerForm);
const registerForm = document.querySelector('#register_form');
console.log(registerForm);
// Handle form submit event;
registerForm.addEventListener('submit', function (event) {
    // when an event happens we want something to handle it and thats called function; whenever you think of handler, think of functions
    // function registerUser(){

    // } DOM- document obeject model
    // registerForm.onsubmit = registerUser;
    // the name is infererd from the left and that makes it an anonimous function. this is used when the function would be used only once
    //registerForm.onsubmit = function () {
    //collect user name
    //collect email
    //collect password
    // instead of collecting the above one after the other we would do it one
    // collect form data
    // console.log(event.target);
    console.log(event.target)
    event.preventDefault();
    const formData = new FormData(event.target);  //this is a way to create a object in a more organized structure
    console.log(
        formData.get('username'),
        formData.get('email'),
        formData.get('password')
    );
    //save user information
    //send confirmation email
    //} // the curlly braces acts like a room which is a scope and it acts as a boundary------- we have onchange, onsumit, onclick
    // display success message
    const messageH1 = document.querySelector('#message');
    messageH1.textContent = 'Account Registered Successfully!';

});

//age variable
const age = 44
//square age
function squareAge(age) {
    const squareAge = age ** 2;
    return squareAge;
}

//const squareAge = squareAge (45);
console.log(squareAge(45));

//function to get fullName

function fullName(firstName, lastName) {
    // return firstName + lastName;
    return `${firstName} ${lastName}`;
}
const myFullName = fullName('Larko', 'Djabatey')
console.log(myFullName);
