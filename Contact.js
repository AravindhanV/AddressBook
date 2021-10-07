class Contact {
  firstName;
  lastName;
  address;
  city;
  state;
  zip;
  phone;
  email;

  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zip = params[5];
    this.phone = params[6];
    this.email = params[7];
  }
}

function validateName(name) {
  return RegExp("^[A-Z][a-z]{2,}$").test(name);
}

function validateLocation(location) {
  return RegExp(".{4,}");
}

let firstName = "";
if (!validateName(firstName)) throw "Invalid First Name";

let lastName = "";
if (!validateName(lastName)) throw "Invalid Last Name";

let address = "";
if (!validateLocation(address)) throw "Invalid address";

let city = "";
if (!validateLocation(city)) throw "Invalid city";

let state = "";
if (!validateLocation(state)) throw "Invalid state";

let zip = -1;
let phone = -1;
let email = "";
let contact = new Contact(
  firstName,
  lastName,
  address,
  city,
  state,
  zip,
  phone,
  email
);
