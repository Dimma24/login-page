var myHeaders = new Headers();
myHeaders.append("Access-Token", "aDDBOmb3evOVXi3_xkSsmEfqBZQkbMKYLD1-NaDesu0");
myHeaders.append("Domain", "sandbox.lolafinance.com");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("/users", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));