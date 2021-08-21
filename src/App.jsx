//project files
import FormValidate from './component/FormValidate'
// import {nameValidation, emailValidation, ageValidation} from './scripts/validator.js'

const word_length = 3;
const age_min = 18;
const age_max = 99;
const regex =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const nameValidation = (fieldName, fieldValue) => {
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

const emailValidation = (email) => {
  if (email.trim() === "") {
    return "Email is required";
  }
  if (regex.test(email)) {
    return null;
  }

  return "Please enter a valid email";
};

const ageValidation = (age) => {
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


const validate = {
  firstName: (name) => nameValidation("First Name", name),
  lastName: (name) => nameValidation("Last Name", name),
  email: emailValidation,
  age: ageValidation
};

const initialValues = {
  age: 80,
  email: 'example@gmail.com',
  firstName: 'Joey',
  lastName: 'Doer'
}
function App() {
  return (
    <div
      className="App"
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: "960px",
        padding: "10px",
      }}
    > Form Validation App
      <FormValidate validate={validate} initialValues={initialValues}/>
    </div>
  );
}

export default App;
