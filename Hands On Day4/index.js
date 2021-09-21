let usr_input = document.getElementById('user-inp');
let btn_submit = document.getElementById('submit-btn');
let usr_out = document.getElementById('output');
let err_out = document.getElementById('error');


btn_submit.addEventListener('click',function()
{
    err_out.value='';

    stringReverse(usr_input.value);
});


function stringReverse(str)
{
  let len = str.length;

  try
  {
    if(str.charAt(0)=='"' && str.charAt(len-1)=='"')
    {
       str = str.split('').reverse().join('');

    }

    else
    {
      throw new TypeError('Your input is not of type string!', "index.js", 19)
    }
  }

  catch(err)
  {
      err_out.value = (err.message+ "\nError Name: " + err.name +"\nStack: "+err.stack);
  }

  finally
 {
   usr_out.value = str;
 }

}
