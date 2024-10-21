import React from 'react'

const Untitled-1 = () => {
const [user, setUser] = useState({
  firstName: '',
  lastName: '',
  email: '',
  mobileNumber: '',
  gender: '',
  dateOfBirth: ''
});
const { firstName, lastName, email, mobileNumber, gender, dateOfBirth } = user;

const [error, setError] = useState({});
const changeHandler = (e) => {
  user[e.target.name] = e.target.value;
  setUser({ ...user }, handleValidate(e));
}

const handleValidate = (e) => {
    let input = e.target;
    switch (input.name || input.tagName) {
      case "firstName":
        error.firstName = validate_city(input.value);
        break;
      default:
        break;
    }
    setError({ ...error });
  }
 
  const validateAll = () => {
    let { firstName, lastName, email, datOfBirth } = userForm;
    let errors = {};
    errors.job_title_id = validate_city(firstName);
    setError(errors);
    return errors;
  }
 
  const handleSubmit = () => {
    let errors = validateAll();
    if (isValid(errors)) {
      console.log(userForm);
    }else {
      let s1 = { error }
      s1 = errors
      setError(s1);
    }
  }
 
  var alphaNumericWithSpace = new RegExp(/^[a-zA-Z ]+$/);

  export const isValid = (errors) => {
    let keys = Object.keys(errors);
    let count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0);
    return count === 0;
  };
 
 
  export const validate_city = (value) =>
    value === "" || value == null
      ? "This field is required"
      : !alphaNumericWithSpace.test(value)
        ? "Please enter valid city" : '';


        return (
          <div>
            
          </div>
        )
      }
      
      export default Untitled-1        