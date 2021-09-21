function changeColor(event)
        {
          var x=document.getElementById("theme-stylesheet").getAttribute("href");
          if(x=="style_dark.css")
          {
            document.getElementById("theme-stylesheet").setAttribute("href","style_light.css");
            var y = document.getElementById("theme-stylesheet").getAttribute("href");

            if (typeof(Storage) !== "undefined") {
              // Store
              localStorage.setItem("preferred", y);
              // Retrieve
              
            } else {
              document.getElementById("theme-stylesheet").setAttribute("href","Sorry, your browser does not support Web Storage...");
            }
          
        }
          else
          {
            document.getElementById("theme-stylesheet").setAttribute("href","style_dark.css");

          }

          var y = document.getElementById("theme-stylesheet").getAttribute("href");

            if (typeof(Storage) !== "undefined") {
              // Store
              localStorage.setItem("preferred", y);
              // Retrieve
              
            } else {
              document.getElementById("theme-stylesheet").setAttribute("href","Sorry, your browser does not support Web Storage...");
            }


        }    



  function myFunction(event)
  {
       
    document.getElementById("theme-stylesheet").setAttribute("href",localStorage.getItem("preferred"));
  }      

