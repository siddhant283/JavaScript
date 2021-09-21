console.log("This is project 4");
const name = document.getElementById("name");
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById("password");
const url = document.getElementById("url");
const ip = document.getElementById('ip');
const dob = document.getElementById("dob");
const phone = document.getElementById('phone');
const address = document.getElementById('address');
let validName = false;
let validUser = false;
let validEmail = false;
let validPhone = false;
let validPassword = false;
let validURL = false;
let validIP = false;
let validDOB = false;
let validAddress = false;

$('#failure').hide();
$('#success').hide();

// console.log(name, email, phone);

name.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^([a-zA-Z ]){2,20}$/;
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your name is valid');
        name.classList.remove('is-invalid');
        validName = true;
    }
    else{
        console.log('Your name is not valid');
        name.classList.add('is-invalid');
        validName = false;

    }
})





username.addEventListener('blur', ()=>{
    console.log("name is blurred");
    // Validate name here
    let regex = /^[a-zA-Z]([0-9a-zA-Z_\*]){7,10}$/;
    let str = username.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your username is valid');
        username.classList.remove('is-invalid');
        validUser = true;
    }
    else{
        console.log('Your username is not valid');
        username.classList.add('is-invalid');
        validUser = false;

    }
})

email.addEventListener('blur', ()=>{
    console.log("email is blurred");
    // Validate email here
    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your email is valid');
        email.classList.remove('is-invalid');
        validEmail = true;
    }
    else{
        console.log('Your email is not valid');
        email.classList.add('is-invalid');
        validEmail = false;
    }
})



password.addEventListener('blur', ()=>{
    console.log("password is blurred");
    // Validate email here
    let regex = /^([_\-\.\*0-9a-zA-Z]+){7,20}$/;
    let str = password.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your password is valid');
        password.classList.remove('is-invalid');
        validPassword = true;
    }
    else{
        console.log('Your password is not valid');
        password.classList.add('is-invalid');
        validPassword = false;
    }
})



url.addEventListener('blur', ()=>{
    console.log("url is blurred");
    // Validate email here
    let regex = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    let str = url.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your url is valid');
        url.classList.remove('is-invalid');
        validURL = true;
    }
    else{
        console.log('Your url is not valid');
        url.classList.add('is-invalid');
        validURL = false;
    }
})

ip.addEventListener('blur', ()=>{
    console.log("ip is blurred");
    // Validate email here
    let regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    let str = ip.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your IP is valid');
        ip.classList.remove('is-invalid');
        validIP = true;
    }
    else{
        console.log('Your IP is not valid');
        ip.classList.add('is-invalid');
        validIP = false;
    }
})


dob.addEventListener('blur', ()=>{
    console.log("dob is blurred");
    // Validate email here
    let regex =/^\d{2}:\d{2}:\d{4}([ ])\d{2}:\d{2}:\d{2}$/;;
    let str = dob.value;

   var valid = (str.search(regex) != -1) &&
               (str.substr(0,2) >= 1 && str.substr(0,2) <= 31) &&  (str.substr(3,2) >= 1 && str.substr(3,2) <= 12) &&   (str.substr(6,4) >= 1900 && str.substr(6,4) <= 2020)
               && (str.substr(11,2) >= 0 && str.substr(11,2) <= 24) &&  (str.substr(14,2) >= 0 && str.substr(14,2) <= 59) &&   (str.substr(17,2) >= 0 && str.substr(17,2) <= 59);


    console.log(regex, str);
    if(valid){
        console.log('Your DOB is valid');
        dob.classList.remove('is-invalid');
        validDOB = true;
    }
    else{
        console.log('Your url is not valid');
        dob.classList.add('is-invalid');
        validDOB = false;
    }
})



phone.addEventListener('blur', ()=>{
    console.log("phone is blurred");
    // Validate phone here
    let regex = /^[\+\-]([0-9]{2})[-. ]([0-9]{3})([-. ])([0-9]{3})([-. ])([0-9]{4})$/;
    let str = phone.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your phone is valid');
        phone.classList.remove('is-invalid');
        validPhone = true;
    }
    else{
        console.log('Your phone is not valid');
        phone.classList.add('is-invalid');
        validPhone = false;

    }
})

address.addEventListener('blur', ()=>{
    console.log("address is blurred");
    // Validate phone here
    let regex = /^[a-zA-Z0-9_.,\s-]{1,256}$/;
    let str = address.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log('Your address is valid');
        address.classList.remove('is-invalid');
        validAddress = true;
    }
    else{
        console.log('Your phone is not valid');
        address.classList.add('is-invalid');
        validAddress = false;

    }
})

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault();

    console.log('You clicked on submit');
    console.log(validName,validEmail, validUser, validPhone,validDOB,validIP,validURL,validAddress,validPassword);

    // Submit your form here
    if(validName && validEmail && validUser && validPhone && validDOB && validURL && validAddress && validPassword && validIP){
        let failure = document.getElementById('failure');

        console.log('Phone, email and user are valid. Submitting the form');
        let success = document.getElementById('success');
        success.classList.add('show');
        // failure.classList.remove('show');
        // $('#failure').alert('close');
        $('#failure').hide();
        $('#success').show();

    }
    else{
        console.log('One of Phone, email or user are not valid. Hence not submitting the form. Please correct the errors and try again');
        let failure = document.getElementById('failure');
        failure.classList.add('show');
        // success.classList.remove('show');
        // $('#success').alert('hide');
        $('#success').hide();
        $('#failure').show();
        }



})
