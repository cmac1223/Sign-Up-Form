// Validate form password using javascript
// var password = document.getElementById('#password').value;
// var confirmPassword = document.getElementById('#password_confrim').value;
// console.log(password)
// const button = document.querySelector('button');

// button.addEventListener("click", (event) =>{

// })

// just need to make an edit
function matchPassword() {
  debugger;
  var pw1 = document.getElementById('password');
  var pw2 = document.getElementById('password_confirm');
  if(pw1.value != pw2.value){
    alert('Passwords did not match');
  } else {
    alert('Password created successfully');
  }
}

