


// function setFormMessage(formElement, type, message) {
//     const messageElement = formElement.querySelector(".form__message");
//
//     messageElement.textContent = message;
//     messageElement.classList.remove("form__message--success", "form__message--error");
//     messageElement.classList.add(`form__message--${type}`);
// }
//
// function setInputError(inputElement, message) {
//     inputElement.classList.add("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
// }
//
// function clearInputError(inputElement) {
//     inputElement.classList.remove("form__input--error");
//     inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
// }

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();
        alert('login');
        // Perform your AJAX/Fetch login
        verifyUser();

        //setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    createAccountForm.addEventListener("submit", e => {
        e.preventDefault();

        // Perform your AJAX/Fetch login
        addUser();


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
             if(allUsers[i].username == username.value)
             {
               console.log('this username exists already');
               return;
             }

             else if (allUsers[i].username == username.email) {
               console.log('this email is already registered');
               return
             }
           }

          allUsers.push(user);
          localStorage.setItem("users", JSON.stringify(allUsers));
        }
      }

    }

    function verifyUser()
    {
      var username = loginUsername.value;
      var password = loginPassword.value;

      if (localStorage.getItem("users") === null) {

          console.log('Invalid login credentials');
      }

      else {
        {
          var allUsers = JSON.parse(localStorage.getItem("users"));

           for(let i=0;i<allUsers.length;i++)
           {
             if(allUsers[i].username == username && allUsers[i].password == password)
             {
               console.log('Log In Successful.');
               return;
             }
           }

           console.log('Invalid login Credentials');


    }

//     document.querySelectorAll(".form__input").forEach(inputElement => {
//         inputElement.addEventListener("blur", e => {
//             if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
//                 setInputError(inputElement, "Username must be at least 10 characters in length");
//             }
//         });
//
//         inputElement.addEventListener("input", e => {
//             clearInputError(inputElement);
//         });
//     });
// });
