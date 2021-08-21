//project files
import FormValidate from './component/FormValidate'
import {nameValidation, emailValidation, ageValidation} from './scripts/validator.js'
import './styles/styles.css'

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
      className="login-root"
    >
      <div className="formbg">
        Form Validation App
        <FormValidate validate={validate} initialValues={initialValues} />
      </div>
    </div>
  );
}

export default App;
