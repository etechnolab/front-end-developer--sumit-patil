function setMessage(id, message) {
  document.getElementById(id).innerHTML = message;
};

function register() {
  console.log("clicked")
  var firstname = document.getElementById("firstname").value;
  var lastname = document.getElementById("lastname").value;
  var birthdate = document.getElementById("birthdate").value;
  var contactNo = document.getElementById("contact-number").value;
  var address = document.getElementById("address").value;
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var tnc = document.getElementById("tnc").checked;
  var isInvalidInput = false;
  if (!firstname) {
    isInvalidInput = true;
    setMessage("firstname-error", "Please enter a valid firstname.");
  }
  if (!lastname) {
    isInvalidInput = true;
    setMessage("lastname-error", "Please enter a valid lastname.");
  }
  if (!contactNo || contactNo < 0) {
    isInvalidInput = true;
    setMessage("contact-number-error", "Please enter a valid contact number.");
  }
  if (!email || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
    isInvalidInput = true;
    setMessage("email-error", "Please enter a valid email.");
  }
  if (!password || !(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password))) {
    isInvalidInput = true;
    setMessage("password-error", "Password must be between 8 to 15 characters which contain at least one lowercase letter, one uppercase letter, one numeric digit, and one special character.");
  }
  if (!tnc) {
    isInvalidInput = true;
    setMessage("tnc-error", "Please agree to T&C.");
  }
  if (!isInvalidInput) {
    document.getElementById("registration-form").style.display = "none";
    console.log("Registering with details", {
      firstname,
      lastname,
      birthdate,
      contactNo,
      address,
      email,
      password,
      tnc,
    });
    document.getElementById("success-message").style.display = "block";
  }
};
