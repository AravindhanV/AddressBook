class Contact {
  constructor(...params) {
    this.firstName = params[0];
    this.lastName = params[1];
    this.address = params[2];
    this.city = params[3];
    this.state = params[4];
    this.zipCode = params[5];
    this.phoneNumber = params[6];
    this.email = params[7];
  }

  get firstName() {
    return this._firstName;
  }
  set firstName(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) this._firstName = name;
    else throw "First Name is incorrect";
  }
  get lastName() {
    return this._firstName;
  }
  set lastName(name) {
    let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
    if (nameRegex.test(name)) this._lastName = name;
    else throw "Last Name is incorrect";
  }
  get address() {
    return this._address;
  }
  set address(address) {
    let addressRegex = RegExp("^[A-Z][a-z]{4,}");
    if (addressRegex.test(address)) this._address = address;
    else throw "Address incorrect";
  }
  get city() {
    return this._city;
  }
  set city(city) {
    let cityRegex = RegExp("^[A-Z][a-z]{4,}");
    if (cityRegex.test(city)) this._city = city;
    else throw "City incorrect";
  }
  get state() {
    return this._state;
  }
  set state(state) {
    let stateRegex = RegExp("^[A-Z][a-z]{4,}");
    if (stateRegex.test(state)) this._state = state;
    else throw "State incorrect";
  }
  get zipCode() {
    return this._zipCode;
  }
  set zipCode(zipCode) {
    let zipCodeRegex = RegExp("^[0-9]{3}\\s{0,1}[0-9]{3}$");
    if (zipCodeRegex.test(zipCode)) this._zipCode = zipCode;
    else throw "ZipCode incorrect";
  }
  get phoneNumber() {
    return this._phoneNumber;
  }
  set phoneNumber(phoneNumber) {
    let phoneRegex = RegExp("[0-9]{2,3}\\s[0-9]{10}$");
    if (phoneRegex.test(phoneNumber)) this._phoneNumber = phoneNumber;
    else throw "Phone Number incorrect";
  }
  get email() {
    return this._email;
  }
  set email(email) {
    let emailRegex = RegExp(
      "[a-zA-Z]{1,}([\\.\\_\\-\\+]?[a-zA-Z0-9]+)@[a-z0-9]+[.][a-z]+[.]?[a-z]{2,3}?$"
    );
    if (emailRegex.test(email)) this._email = email;
    else throw "Email incorrect";
  }

  toString() {
    return (
      "first name=" +
      this.firstName +
      ",last name=" +
      this.lastName +
      ", address=" +
      this.address +
      ", city=" +
      this.city +
      ", state=" +
      this.state +
      ", zip=" +
      this.zip +
      ", phone=" +
      this.phoneNumber +
      ", email=" +
      this.email +
      "\n"
    );
  }
}

let addressBook = new Array();

function addContact(newcontact) {
  let duplicate = addressBook.find(
    (contact) =>
      contact._firstName == newcontact._firstName &&
      contact._lastName == newcontact._lastName
  );
  if (duplicate == -1) addressBook.push(newcontact);
  else throw "Duplicate contact" + newcontact;
}

try {
  addContact(
    new Contact(
      "A",
      "B",
      "AB Address",
      "City1",
      "State1",
      "560100",
      "1234567890",
      "ab@gmail.com"
    )
  );
  addContact(
    new Contact(
      "C",
      "D",
      "CD Address",
      "City2",
      "State1",
      "560200",
      "2345678901",
      "cd@gmail.com"
    )
  );
} catch (e) {
  console.error(e);
}

function editContact(firstName, lastName, fieldToBeEdited, newField) {
  let contact = addressBook.find(
    (contact) =>
      contact._firstName == firstName && contact._lastName == lastName
  );
  switch (fieldToBeEdited) {
    case "firstName":
      contact._firstName = newField;
      break;
    case "lastName":
      contact._lastName = newField;
      break;
    case "address":
      contact._address = newField;
      break;
    case "city":
      contact._city = newField;
      break;
    case "state":
      contact.state = newField;
      break;
    case "zipCode":
      contact._zipCode = newField;
      break;
    case "phoneNumber":
      contact._phoneNumber = newField;
      break;
    case "email":
      contact._email = newField;
      break;
    default:
      console.log("Invalid Field");
  }
}

function deleteContact(firstName, lastName) {
  let indexToBeDeleted = addressBook.findIndex(
    (contact) =>
      contact._firstName == firstName && contact._lastName == lastName
  );
  if (indexToBeDeleted != -1) {
    addressBook.splice(indexToBeDeleted, 1);
    console.log("Contact Deleted");
  } else throw "Contact not found";
}

function getCountOfContacts() {
  let count = addressBook.reduce((count) => (count += 1), 0);
  return count;
}

function searchInCity(firstName, lastName, cityName) {
  let contact = addressBook.find(
    (contact) =>
      contact._firstName == firstName &&
      contact._lastName == lastName &&
      contact.city == cityName
  );
  if (contact != null) console.log("Contact found: " + contact);
  else throw "Contact not found";
}

function getContactsByCity(cityName) {
  let contacts = addressBook.filter((contact) => contact._city == cityName);
  return contacts;
}

function getContactsByState(stateName) {
  let contacts = addressBook.filter((contact) => contact._state == stateName);
  return contacts;
}

function getCountInCityOrState(fieldName, fieldValue) {
  let count = 0;
  switch (fieldName) {
    case "city":
      count = addressBook
        .filter((contact) => contact._city == fieldValue)
        .reduce((countOfContacts) => (countOfContacts += 1));
      break;
    case "state":
      count = addressBook
        .filter((contact) => contact._city == fieldValue)
        .reduce((countOfContacts) => (countOfContacts += 1));
      break;
    default:
      console.log("Invalid field name");
  }
  return count;
}

function sortAddressBook() {
  let sortedBook = addressBook.sort((contact1, contact2) =>
    contact1.firstName.localeCompare(contact2.firstName)
  );
  return sortedBook;
}

function sortAddressBookByCity() {
  let sortedBook = addressBook.sort((contact1, contact2) =>
    contact1.city.localeCompare(contact2.city)
  );
  return sortedBook;
}

function sortAddressBookByState() {
  let sortedBook = addressBook.sort((contact1, contact2) =>
    contact1.state.localeCompare(contact2.state)
  );
  return sortedBook;
}

function sortAddressBookByZipCode() {
  let sortedBook = addressBook.sort((contact1, contact2) =>
    contact1.zipCode.localeCompare(contact2.zipCode)
  );
  return sortedBook;
}
