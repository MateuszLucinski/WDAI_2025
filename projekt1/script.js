const namePattern = /^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s-]+$/;
const emailPattern =
  /^[a-zA-Z0-9._%+\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+@[a-zA-Z0-9.\-ąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+\.[a-zA-Z]{2,}$/;

const form = document.getElementById("order");
const name_field = document.getElementById("fullname");
const email_field = document.getElementById("email");

name_field.addEventListener("blur", () => validateName());
email_field.addEventListener("blur", () => validateEmail());

form.addEventListener("submit", (event) => {
  event.preventDefault();
  place();
  window.location.hash = "#summary";
});

function validateName() {
  const fullname = document.getElementById("fullname").value;
  if (!namePattern.test(fullname)) {
    alert("Niepopawne imię lub nazwisko");
    name_field.value = ""; //clear invalid data
  }
}

function validateEmail() {
  const email = document.getElementById("email").value;
  if (!emailPattern.test(email)) {
    alert("Niepopawny adres email");
    email_field.value = ""; //celar invalid data
  }
}

function place() {
  //place valid order and show details
  const fullname = document.getElementById("fullname").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;
  const quantity = document.getElementById("quantity").value;
  var comment = document.getElementById("comment").value;

  let summary = document.getElementById("summary");
  form.reset();
  summary.style.display = "block";

  document.getElementById("sumName").innerHTML = "Imię i nazwisko: " + fullname;
  document.getElementById("sumAddress").innerHTML = "Adres: " + address;
  document.getElementById("sumEmail").innerHTML = "Adres Email: " + email;
  document.getElementById("sumQty").innerHTML = "Zamówiona ilość: " + quantity;
  document.getElementById("sumPrice").innerHTML =
    "Kwota zamówienia: " + quantity * 7.5 + " zł";
  if (comment != "") {
    document.getElementById("sumComment").innerHTML = "Komentaż: " + comment;
  }
}
