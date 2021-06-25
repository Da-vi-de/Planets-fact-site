// The function below will create a new instance of
// a XMLHttpRequest and load asynchronously the content
// of data.json
function loadJSON(callback) {   
    const request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open('GET', './data.json', true);
    request.onreadystatechange = function () {
      if (request.readyState == 4 && request.status == "200") {
        callback(JSON.parse(request.responseText));
      }
    };
    request.send(null);  
  }

   function init() {
    loadJSON(function(response) {   
       console.log(response);
    });
   }

 init();