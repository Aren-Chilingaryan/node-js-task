const x = document.getElementsByClassName("card");
const numbers = [1, 2, 32, 5];
let dataNumbers = [];

function numberInDiv(array) {
  for (i = 0; i < x.length; i++) {
    x[i].innerHTML = array[i];
  }
}

async function getUsers() {
  let response = await fetch("http://localhost:3000/api/array");
  let data = await response.json();
  dataNumbers = data;
  return data;
}
getUsers().then((data) => console.log(data));
