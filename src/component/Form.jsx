export default function Form({
  errors,
  handleBlur,
  handleChange,
  handleSubmit,
  touched,
  values,
}) {
  return (
    <div>
      <div>
        For the form to be valid:
        <ul>
          <li>All fields must be filled</li>
          <li>First and last name must be at least three characters</li>
          <li>Age must be between 18 and 99</li>
        </ul>
      </div>
      <form onSubmit={handleSubmit} autoComplete="off">
        <div className="form-group">
          <label htmlFor="first-name-input">First Name *</label>
          <input
            type="text"
            className="form-control"
            id="first-name-input"
            placeholder="Enter first name"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="firstName"
            required
          />
          <span className="error">{touched.firstName && errors.firstName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="last-name-input">Last name *</label>
          <input
            type="text"
            className="form-control"
            id="last-name-input"
            placeholder="Enter last name"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            name="lastName"
            required
          />
          <span className="error">{touched.lastName && errors.lastName}</span>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address *</label>
          <input
            type="text"
            className="form-control"
            id="email"
            placeholder="Enter email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            name="email"
            required
          />
          <span className="error">{touched.email && errors.email}</span>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age *</label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter age"
            value={values.age || ""}
            onChange={handleChange}
            onBlur={handleBlur}
            name="age"
            min="0"
            required
          />
          <span className="error"> {touched.age && errors.age}</span>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
