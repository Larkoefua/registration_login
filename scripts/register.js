// alert('JavaScript Works!');
// select form by id
/*what is done on the left is a variable declaration----for variables we have const and let*/ const registerForm = document.getElementById('register_form');
// Handle form submit event; 
// when an event happens we want something to handle it and thats called function; whenever you think of handler, think of functions
// function registerUser(){

// }
// registerForm.onsubmit = registerUser;
// the name is infererd from the left and that makes it an anonimous function. this is used when the function would be used only once
registerForm.onsubmit = function () {
    //collect user name
    //collect email
    //collect password
    //save user information
    //send confirmation email
} // the curlly braces acts like a room which is a scope and it acts as a boundary
