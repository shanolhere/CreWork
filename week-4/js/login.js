
const email = document.querySelector('.email')
const pwd = document.querySelector('.pwd')
const login = document.querySelector('.login')


const eyeOffIcon = document.querySelector('.eyeOffIcon')
const eyeOnIcon = document.querySelector('.eyeOnIcon')

const emailError = document.querySelector('.emailError')
const pwdError = document.querySelector('.pwdError')


var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

//email validation
email.addEventListener('keyup', ()=> {
  //console.log(email.value)
  if(!email.value){
    email.style.borderColor = "red"
    emailError.innerHTML ="Email field can't be blank"
  }
  else if(!pattern.test(email.value)){
    emailError.innerHTML ="Invalid email!"
    email.style.borderColor = "red"
  }
  else{
    email.style.borderColor = ""
    emailError.innerHTML =""
  }
})

//password validation
pwd.addEventListener('keyup', ()=> {
  if(!pwd.value){
    pwd.style.borderColor = "red"
    pwdError.innerHTML ="Password field can't be blank"
  }
  else if(pwd.value.length<4){
    pwd.style.borderColor = "red"
    pwdError.innerHTML ="Password is too short!"
  }
  else if(pwd.value.length>11){
    pwd.style.borderColor = "red"
    pwdError.innerHTML ="Password is too long!"
  }
  else{
    pwd.style.borderColor = ""
    pwdError.innerHTML = ""
  }
})

eyeOffIcon.addEventListener('click', () =>{
  if (pwd.type === "password") {
    pwd.type = "text";
    eyeOffIcon.style.visibility="hidden"
    eyeOnIcon.style.visibility="visible"
  }
})
eyeOnIcon.addEventListener('click', () =>{
  if (pwd.type === "text") {
    pwd.type = "password";
    eyeOffIcon.style.visibility="visible"
    eyeOnIcon.style.visibility="hidden"
  }
})



login.addEventListener('click', (event) =>{
  event.preventDefault();
  console.log(email.value, pwd.value)
  if(!pwd.value ){
    pwd.style.borderColor = "red"
    pwdError.innerHTML ="Password field can't be blank"
  }
  if(!email.value){
    email.style.borderColor = "red"
    emailError.innerHTML ="Email field can't be blank"
  }
  if(pattern.test(email.value) && pwd.value.length>=4 && pwd.value.length<12){
    alert("success")
    window.location = "success.html";
    email.value=""
    pwd.value=""
  }

})
