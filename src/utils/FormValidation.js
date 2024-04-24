export const CheckInput = (formInput) => {
  const error = {};

  // Regex pattern for checking name.
  var nameRegex = /^[a-zA-Z ]{2,30}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const phoneRegex = /^([+]\d{2}[ ])?\d{11}$/

  //   Name Validaton
  if (!formInput.name || formInput.name.trim().length === 0) {
    error.name = "Name is required";
  } else if (!nameRegex.test(formInput.name)) {
    error.name = "Enter a valid name(only letters, min 2char)";
  }

  //   Phone Validation
  if (!formInput.email || formInput.phone.trim().length === 0) {
    error.phone = "Phone number is required!";
  } else if (!phoneRegex.test(formInput.phone)) {
    error.phone = "Enter a valid phone number!";
  }

  //   Email Validation
  if (!formInput.email || formInput.email.trim().length === 0) {
    error.email = "Email is required";
  } else if (!emailRegex.test(formInput.email)) {
    error.email = "Enter a valid email!";
  }

  return error;
};
