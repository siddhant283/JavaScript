

let fetch_btn = document.getElementById('fetch-btn');
let mainContainer = document.getElementById("myData");
let icon = document.getElementById('icon');

function appendData(data) {


    for (var i = 0; i < data.length; i++) {
        var div = document.createElement("div");
        div.innerHTML = 'AlbumId: '+ (i+1) + ',  Title: ' + data[i].title;
        mainContainer.appendChild(div);
    }

  document.getElementById('icon').remove();
}


function fetchData()
{
 fetch('https://jsonplaceholder.typicode.com/photos')
              .then(function (response) {
                  return response.json();
              })
              .then(function (data) {
                  //setTimeout(()=>appendData(data),3000);
                  appendData(data);
              })
              .catch(function (err) {
                var div = document.createElement("div");
                div.innerHTML = 'Error: '+ err;
                mainContainer.appendChild(div);
                document.getElementById('icon').remove();
              });
}




fetch_btn.addEventListener('click',function()
{
    fetchData();
    icon.innerHTML = "&#xf110 <span> Loading...</span>"

});
