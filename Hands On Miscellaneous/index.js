
var loginText = document.querySelector(".title-text .login");
var loginForm = document.querySelector("form.login");
var loginBtn = document.querySelector("label.login");
var signupBtn = document.querySelector("label.signup");
var signupLink = document.querySelector("form .signup-link a");

var getStarted = document.getElementById("getStarted");
var loginBottom = document.getElementById("Login");
var loginUsername = document.getElementById("loginUsername");
var loginPassword = document.getElementById("loginPassword");

signupBtn.onclick = (()=>{
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});
loginBtn.onclick = (()=>{
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});
signupLink.onclick = (()=>{
  signupBtn.click();
  return false;
});



getStarted.addEventListener("click", e => {

    e.preventDefault();
    addUser();

});

loginBottom.addEventListener("click", e => {


    e.preventDefault();
      alert('me clicked');
    verifyUser();

});

function addUser()
{
  var username = document.querySelector("#signupUsername");
  var useremail = document.querySelector("#signupUseremail");
  var userpwd = document.querySelector("#signupUserpwd");
  var confirmpwd = document.querySelector("#signupUsercpwd");

  var user =
  {
    username: username.value,
    email: useremail.value,
    password: userpwd.value,
    confirm: confirmpwd.value
  }

  if (localStorage.getItem("users") === null) {

       var allUsers = [];
       allUsers.push(user);
       localStorage.setItem("users",JSON.stringify(allUsers));
  }

  else {
    {
      var allUsers = JSON.parse(localStorage.getItem("users"));

       for(let i=0;i<allUsers.length;i++)
       {
         if(allUsers[i].username == user.username)
         {
           document.getElementById("signupMsg").innerHTML="";

           console.log('this username exists already');

           var p = document.createElement("p");
           p.innerHTML = "This Username is already taken."
           p.setAttribute("id", "userError");
           var parent = document.getElementById("SignUp");
           parent.insertBefore(p, parent.children[1]);
           
           return;
         }

         else if (allUsers[i].email == user.email) {

           document.getElementById("signupMsg").innerHTML="";

           console.log('this email is already registered');

           var p = document.createElement("p");
           p.innerHTML = "This Email is already registered."
           p.setAttribute("id", "emailError");
           var parent = document.getElementById("SignUp");
           parent.insertBefore(p, parent.children[2]);

           return
         }
       }

      allUsers.push(user);
      localStorage.setItem("users", JSON.stringify(allUsers));

      document.getElementById("signupMsg").innerHTML="<p>Successfully Registered</p>"
      document.getElementById("SignUp").reset();

      if(document.getElementById("userError")!==null )
      {
        document.getElementById("userError").remove();
      }

      if(document.getElementById("emailError")!==null)
      {
        document.getElementById("emailError").remove();
      }
    }
  }

}

function verifyUser()
{
  var username = loginUsername.value;
  var password = loginPassword.value;

  if (localStorage.getItem("users") === null) {


      console.log('Invalid login credentials');
      var div = document.createElement("div");
      div.innerHTML = "<p> Invalid user Credentials</p>"
      document.getElementById('validationDisplay').append(div);

  }

  else {

      var allUsers = JSON.parse(localStorage.getItem("users"));

       for(let i=0;i<allUsers.length;i++)
       {
         if(allUsers[i].username == username && allUsers[i].password == password)
         {
           console.log('Log In Successful.');
           //document.getElementById("forgotPass").remove();
           if(document.getElementById('newSignup')!==null)
           {
             document.getElementById("newSignup").remove();
           }
           document.getElementById("notMemeber").innerHTML = "<p>Logged In Successfully!</p>"
           return;
         }
       }

       console.log('Invalid login Credentials');
       var forgotPass = document.getElementById("notMemeber");
       forgotPass.innerHTML = "<p>Inavalid User Credential!</p>"

       var div = document.createElement("div");
       div.classList.add("signup-link");

       div.innerHTML = "Not a User?"
       var a = document.createElement("a");
       div.setAttribute("id", "newSignup");
       a.innerHTML = " Signup now"
       a.href="";
       div.append(a);
       document.getElementById('validationDisplay').append(div);

       var newSignup = document.getElementById("newSignup");
       newSignup.onclick = (()=>{
         signupBtn.click();
         return false;
       });




}

}
