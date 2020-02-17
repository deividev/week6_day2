// XMLHttp Asíncrono
var req = new XMLHttpRequest();
req.open('GET', 'https://reqres.in/api/users?page=2', true);
req.onreadystatechange = function (aEvt) {
  debugger
  if (req.readyState == 4) {
     if(req.status == 200)
      console.log(req.responseText);
     else
      console.log("Error loading page\n");
  }
};
req.send(null);
console.log('codigo de despues 2') 

