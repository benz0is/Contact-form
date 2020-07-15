function show() {
  document.querySelector(".sidebar").classList.toggle("active");
}
const first_name = document.querySelector(".First_name");
const last_name = document.querySelector(".Last_Name");
const date_of_birth = document.querySelector(".Date_of_birth");
const phone_number = document.querySelector(".Phone_number");
const email = document.querySelector(".Email");
const address = document.querySelector(".Address");
const error = document.querySelector(".error_message");
const contacts = document.querySelector(".contact_list");
const bandom = document.querySelector(".bandom");

var surname_work = true;
var email_work = true;
var phone_work = true;
var name_work = true;
var birth_work = true;

var library = [];

function Contacts(name, surname, birth, phone, email, address) {
  (this.name = name),
    (this.surname = surname),
    (this.birth = birth),
    (this.phone = phone),
    (this.email = email),
    (this.address = address);
}

function name() {
  var re = /^[A-Za-z]+$/;
  if (re.test(first_name.value) == true) {
    error.innerHTML = "";
    return (name_work = true);
  } else if (first_name.value != "") {
    if (re.test(first_name.value) == false) {
      alert("Name cant have numbers in it");
      console.log("neveikia");
      return (name_work = false);
    }
  } else if (first_name.value.length > 30) {
    error.innerHTML = "Name too long";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (name_work = false);
  } else if (first_name.value.length < 4) {
    error.innerHTML = "Name too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (name_work = false);
  }
  console.log("qweqw");
  return (name_work = true);
}
function lastName() {
  var re = /^[A-Za-z]+$/;
  if (re.test(last_name.value) == true) {
    error.innerHTML = "";
    return (surname_work = true);
  } else if (re.test(last_name.value) == false) {
    error.innerHTML = "Surname cant have numbers in it";
    console.log("surname turi sk");
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (surname_work = false);
  } else if (last_name.value.length > 30) {
    error.innerHTML = "Surname too long";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (surname_work = false);
  } else if (last_name.value.length < 4) {
    error.innerHTML = "Surname too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (surname_work = false);
  }
  console.log(surname_work);
  return (surname_work = true), console.log(surname_work);
}

function phone_email_birth() {
  if (phone_number.value.length < 9) {
    error.innerHTML = "Number too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (phone_work = false);
  } else if (phone_number.value.length > 20) {
    error.innerHTML = "Number too long";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (phone_work = false);
  } else if (email.value.length < 7) {
    error.innerHTML = "Email is too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (email_work = false);
  } else if (email.value.includes("@") == false) {
    error.innerHTML = "Email must contain a @ sign";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (email_work = false);
  } else if (date_of_birth.value == "") {
    error.innerHTML = "Dont leave the date blank";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    return (birth_work = false);
  } else return (phone_work = true), (birth_work = true), (email_work = true);
}

function save(ev) {
  name();
  lastName();
  phone_email_birth();
  console.log(name_work, surname_work, birth_work, phone_work, email_work);
  if (
    name_work == surname_work &&
    name_work == phone_work &&
    phone_work == birth_work &&
    birth_work == phone_work &&
    phone_work == email_work
  ) {
    error.innerHTML = "Contact added successfully";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    function addContact(ev) {
      let kontaktas = {
        id: Date.now(),
        name: first_name.value,
        surname: last_name.value,
        date: date_of_birth.value,
        phone: phone_number.value,
        email: email.value,
        address: address.value,
      };
      library.push(kontaktas);
      localStorage.setItem("MyContacts", JSON.stringify(library));
      library = JSON.parse(localStorage.getItem("MyContacts"));
    }
    addContact();
    displayData();
  }
}
let i = 0;
function displayData() {
  console.log("qwe");
  for (i; i < JSON.parse(localStorage.getItem("MyContacts").length); i++) {
    console.log(i);
    var name = JSON.parse(localStorage.getItem("MyContacts"))[i].name;
    var surname = JSON.parse(localStorage.getItem("MyContacts"))[i].surname;
    var birth = JSON.parse(localStorage.getItem("MyContacts"))[i].birth;
    var phone = JSON.parse(localStorage.getItem("MyContacts"))[i].phone;
    var email = JSON.parse(localStorage.getItem("MyContacts"))[i].email;
    var address = JSON.parse(localStorage.getItem("MyContacts"))[i].address;

    var section = document.createElement("div");
    section.classList.add("section");
    section.textContent = `name:${name} birth:${birth} surname:${surname}  phone:${phone} email:${email} address:${address}`;
    contacts.appendChild(section);
    console.log(library);
    console.log(JSON.parse(localStorage.getItem("MyContacts")));
    var del_btn = document.createElement("button");
    del_btn.setAttribute("data", library.length - 1);
    console.log(library);

    del_btn.classList.add("del_btn");
    del_btn.style.cursor = "pointer";
    del_btn.innerHTML = "delete";
    section.appendChild(del_btn);

    del_btn.addEventListener("click", function (e) {
      const cell = e.target;
      const clicked_item = cell.getAttribute("data");
      console.log(clicked_item);
      contacts.removeChild(section);
      library.splice(clicked_item, 1);
      localStorage.removeItem("MyContacts");
      localStorage.setItem("MyContacts", JSON.stringify(library));
    });
    i++;
  }
}
displayData();
function delete_section() {
  console.log("hey");
}
