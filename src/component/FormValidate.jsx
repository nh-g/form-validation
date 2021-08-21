//npm packages
import { useState } from "react"

//project files
import Form from "./Form"
import Debugger from "./Debugger";

export default function FormValidate({validate, initialValues}) {
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    console.log("validate", validate)

    const handleChange = (event) => {
        const {name, value: newValue, type} = event.target;
        //only allow number in number input field type
        const value = type === 'number'? +newValue: newValue;
        //save field input values
        setValues({
            ...values,
            [name]: value,
        })
        //set the field was touched/modified
        setTouched({
            ...touched,
            [name]: true
        })
    }

    const handleBlur = (event) => {
        const { name, value} = event.target;
        //remove whatever error was there previously
        const {[name]: removedError, ...rest} = errors;
        //check for a new error
        const error = validate[name](value)
        //validate the field if the value has been touched
        setErrors({
            ...rest,
            ...(error && {[name]: touched[name] && error})
        })
    }

    const handleSubmit = (event) => {
      event.preventDefault();

      //validate the form
      const formValidation = Object.keys(values).reduce(
        (acc, key) => {
          const newError = validate[key](values[key]);
          const newTouched = { [key]: true };
          return {
            errors: {
              ...acc.errors,
              ...(newError && { [key]: newError }),
            },
            touched: {
              ...acc.touched,
              ...newTouched,
            },
          };
        },
        {
          errors: { ...errors },
          touched: { ...touched },
        }
      );

      setErrors(formValidation.errors);
      setTouched(formValidation.touched);

      if (
        !Object.values(formValidation.errors).length && //errors object is empty
        Object.values(formValidation.touched).length ===
          Object.values(values).length && //all fields were touched
        Object.values(formValidation.touched).every((t) => t === true) // every touched field is true
      ) {
        alert(JSON.stringify(values, null, 2));
      }
    };

      return (
        <>
          <Form
            handleBlur={handleBlur}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            errors={errors}
            touched={touched}
            values={values}
          />

          {Object.keys(errors).length > 0 && (
            <Debugger errors={errors} touched={touched} values={values} />
          )}
        </>
      );
}
