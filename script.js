let checks = document.querySelectorAll("input");
let presentstudent = document.querySelector("#present");
let apcentstudent = document.querySelector("#apsent");
let presentdiv = document.querySelector("#presentdiv");
let apsentdiv = document.querySelector("#apsentdiv");
let summary = document.querySelector("#summary");
let presentcount = document.querySelector("#presentcount");
let apsentcount = document.querySelector("#apsentcount");
let datetime = document.querySelector("#datetime");
let formpresent = document.querySelector("#formpresent");
let formapsent = document.querySelector("#formapsent");
let present = [];
let apcent = [];


let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
let finaldate = `${day}/${month}/${year}`;
datetime.value = finaldate;

//Get form element
var form = document.getElementById("formId");
function submitForm(event) {

  //Preventing page refresh
  event.preventDefault();
  checks.forEach((val) => {
    if (val.checked) {
      present.push(val.value);
    } else {
      apcent.push(val.value);
    }
  })

  apcent.pop();

  for (let i of present) {
    formpresent.value += i + ",";
  }

  for (let i of apcent) {
    formapsent.value += i + ",";
  }

  for (let i = 0; i < present.length; i++) {
    let para = document.createElement("p");
    para.innerText = present[i];
    presentdiv.append(para);
  }



  for (let i = 0; i < apcent.length; i++) {
    let apsentpara = document.createElement("p");
    apsentpara.innerText = apcent[i];
    apsentdiv.append(apsentpara);
  }



  summary.style.display = "block";
  presentcount.innerText = present.length;
  apsentcount.innerText = 11 - present.length;

  const scriptURL = 'https://script.google.com/macros/s/AKfycbzwIAaMZszMu2ic7fCo8ANzg6neCEoIcqNDSxszC9sAjpZcZhmJqFlJlnEnhgi_acmL/exec'
  const form = document.forms['google-sheet']
  
  
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
      .then(response =>{})
      .catch(error => console.error('Error!', error.message))

}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);

presentstudent.onclick = () => {
  presentdiv.style.display = "block";
  apsentdiv.style.display = "none";
}


apcentstudent.onclick = () => {
  presentdiv.style.display = "none";
  apsentdiv.style.display = "block";

}



