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

var work = true;

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
  } else if (re.test(first_name.value) == false) {
    alert("Name cant have numbers in it");
    work == false;
    console.log("xx");
  }
  if (first_name.value.length > 30) {
    error.innerHTML = "Name too long";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    console.log("čia klaida x");
    work == false;
  } else if (first_name.value.length < 4) {
    error.innerHTML = "Name too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    console.log("čia klaida");
    work == false;
  }
  lastName();
}
function lastName() {
  var re = /^[A-Za-z]+$/;
  if (re.test(last_name.value) == true) {
    error.innerHTML = "";
  } else if (re.test(last_name.value) == false) {
    error.innerHTML = "Surname cant have numbers in it";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    work == false;
  }
  if (last_name.value.length > 30) {
    error.innerHTML = "Surname too long";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    work = false;
  } else if (last_name.value.length < 4) {
    error.innerHTML = "Surname too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    work == false;
  }
}

function phone_email_birth() {
  if (phone_number.value.length < 9) {
    error.innerHTML = "Number too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    work == false;
  } else if (phone_number.value.length > 20) {
    error.innerHTML = "Number too long";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    work == false;
  }
  if (email.value.length < 7) {
    error.innerHTML = "Email is too short";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    work == false;
  } else if (email.value.includes("@") == false) {
    error.innerHTML = "Email must contain a @ sign";
    setTimeout(() => {
      error.innerHTML = "";
    }, 2000);
    work == false;
  } else if (date_of_birth.value == "") {
    error.innerHTML = "Dont leave the date blank";
  }
  setTimeout(() => {
    error.innerHTML = "";
  }, 2000);
  work == false;
}

function save(ev) {
  name();
  phone_email_birth();
  function addContact(ev) {
    let movie = {
      id: Date.now(),
      name: first_name.value,
      surname: last_name.value,
      date: date_of_birth.value,
      phone: phone_number.value,
      email: email.value,
      address: address.value,
    };
    library.push(movie);
    localStorage.setItem("MyContacts", JSON.stringify(library));
  }
  addContact();
  displayData();
}

function displayData() {
  for (
    var i = 0;
    i < JSON.parse(localStorage.getItem("MyContacts")).length;
    i++
  ) {
    var name = JSON.parse(localStorage.getItem("MyContacts"))[i].name;
    var surname = JSON.parse(localStorage.getItem("MyContacts"))[i].surname;
    var birth = JSON.parse(localStorage.getItem("MyContacts"))[i].birth;
    var phone = JSON.parse(localStorage.getItem("MyContacts"))[i].phone;
    var email = JSON.parse(localStorage.getItem("MyContacts"))[i].email;
    var address = JSON.parse(localStorage.getItem("MyContacts"))[i].address;
    var section = document.createElement("div");
    var del_btn = document.createElement("button");
    del_btn.classList.add("del_btn");
    section.classList.add("section");
    del_btn.style.cursor = "pointer";
    del_btn.innerHTML = "delete";
    del_btn.addEventListener("click", function (e) {
      console.log(e);
    });
    section.textContent = `name:${name} surname:${surname}  phone:${phone} email:${email} address:${address}`;
    contacts.appendChild(section);
    section.appendChild(del_btn);
  }
}
displayData();
