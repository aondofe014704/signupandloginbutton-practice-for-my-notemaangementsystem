var loginButton = document.getElementById('login');
var registerButton = document.getElementById('register');
var btnButton = document.getElementById('btn');


function register(){ 
    loginButton.style.left = "-400px";
    registerButton.style.left = "50px";
    btnButton.style.left = "110px";
}
function login(){ 
    loginButton.style.left = "50px";
    registerButton.style.left = "450px";
    btnButton.style.left = "0";
}