function shortLink(){

  var input_url = document.getElementById("input_url");

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "inputURL": input_url.value,
    "inputText": ""
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  var output_URL = "";

  fetch("https://linktrim.herokuapp.com/url", requestOptions)
    .then(response => response.json())
    .then( result => obj = result)
    .then(()=>{
      document.getElementById("input_url").value = "Please wait ...";
      output_URL = obj.outputText
      console.log(output_URL);
      document.getElementById("input_url").value = output_URL;
    })
    .catch(error => console.log('error', error));
}