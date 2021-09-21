

//File Validation


document.getElementById("file").addEventListener("change", validateFile)

function validateFile(){

        const allowedExtensions =  ['txt','json','doc','pdf'],
        sizeLimit = 1000000; // 1 megabyte

         try {
           const { name:fileName, size:fileSize } = this.files[0];

           const fileExtension = fileName.split(".").pop();

           if(!allowedExtensions.includes(fileExtension)){
             throw new Error("file type not allowed! \nOnly txt, doc, json, pdf files are allowed");

           }else if(fileSize > sizeLimit){
              throw new Error("file size too large");
           }
         } catch (e) {

                alert(e.message);
                this.value = null;

         }

   }


//File Upload


document.getElementById('submit').addEventListener('click', upload);
let mainContainer = document.getElementById("output-response");
const url =  'https://jsonplaceholder.typicode.com/posts';

function upload(){

  try {


    let h = new Headers();
    h.append('Accept', 'application/json');
    let fd = new FormData();


    let myFile = document.getElementById('file').files[0];
    fd.append('Uploaded_files', myFile);

    let req = new Request(url, {
        method: 'POST',
        headers: h,
        mode: 'no-cors',
        body: fd
    });

    fetch(req)
        .then( (response)=>{
          var div = document.createElement("div");
          div.innerHTML = "Response received from server! File uploaded.";
          mainContainer.appendChild(div);
        })
        .catch( (err) =>{
            var div = document.createElement("div");
            div.innerHTML = 'Error: '+ err;
            mainContainer.appendChild(div);
        });

  } catch (e) {



    var div = document.createElement("div");
    div.innerHTML = 'Error: '+ e;
    mainContainer.appendChild(div);

  }
}



//File Download

document.getElementById("download").addEventListener('click', download)

function download(ev)
{

      fetch('https://jsonplaceholder.typicode.com/posts/1/comments', {
          method: 'GET',
          headers: new Headers({
              "Authorization": "Bearer "
          }),
            mode: 'no-cors'
      })
      .then(response => response.blob())
      .then(blob => {
          var url = window.URL.createObjectURL(blob);
          var a = document.createElement('a');
          a.href = url;
          a.download = "fileName.txt";
          document.body.appendChild(a);
          a.click();
          a.remove();

          var div = document.createElement("div");
          div.innerHTML = 'File downloaded!';
          mainContainer.appendChild(div);
      });

}
