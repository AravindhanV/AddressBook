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
  
  let firstName = "";
  let lastName = "";
  let address = "";
  let city = "";
  let state = "";
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
  