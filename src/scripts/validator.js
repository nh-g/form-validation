
const word_length = 3
const age_min = 18
const age_max = 99
const regex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
export const nameValidation = (fieldName, fieldValue) => {
  if (fieldValue.trim() === "") {
    return `${fieldName} is required`;
  }
  if (/[^a-zA-Z -]/.test(fieldValue)) {
    return "Invalid characters";
  }
  if (fieldValue.trim().length < word_length) {
    return `${fieldName} must be at least three characters`;
  }
  return null;
};

export const emailValidation = (email) => {
  if (email.trim() === "") {
    return "Email is required";
  }
  if (regex.test(email)
  ) {
    return null;
  }

  return "Please enter a valid email";
};

export const ageValidation = (age) => {
  if (!age) {
    return "Age is required";
  }
  if (age < age_min) {
    return `Age must be at least ${age_min}`;

  }
  if (age > age_max) {
    return `Age must be under ${age_max}`;
  }
  return null;
};
