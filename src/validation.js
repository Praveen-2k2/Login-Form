// const numberValidator = new RegExp(/^[0-9]*$/);
//const alphavalidator = new RegExp('^[a-zA-Z ]+$');
const alphanumericValidator = new RegExp(/^[a-zA-Z0-9 ]*$/);
const emailValidator = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);

export const validate_Fname = (value) =>
  
{ 
 
  if(value === "" || value === null){
  return "This field is required"
 }
//  else if( !alphavalidator.test(value)){
//   // console.log('value of the regex', value)
//    return 'Please enter a valid name (letters and spaces only)'
 
 }
//}

export const validate_LName = (value) =>
  value === '' || value === null
    ? 'This field is required'
    : !alphanumericValidator.test(value)
    ? 'Please enter valid data'
    : '';


export const validate_Number = (value) => {
  if (value === '' || value === null) {
    return 'This field is required';
  }
  const numericValue = value.replace(/\D/g, '');
  if (numericValue.length > 0 && numericValue.length < 10) {
    return 'Mobile number must be 10 digits';
  }
  return '';
};
    

// export const validate_Number = (value) => {
//   const numericValue = value.replace(/\D/g, '');
//   if (numericValue === '') {
//     return ''; 
//   }
//   if (numericValue.length < 10) {
//     return 'Mobile number must be 10 digits';
//   }
//   return '';
// };

export const validate_email = (value) =>
  value === '' || value === null
    ? 'This field is required'
    : !emailValidator.test(value)
    ? 'Please enter a valid email'
    : '';

export const validate_gender = (value) =>
  value === '' || value === null 
    ? 'This field is required' : '';

export const validate_dateOfBrith = (value) =>
  value === '' || value === null
    ? 'This field is required' : '';


// export const validate_Number = (value) => {

//   const numericValue = value.replace(/\D/g, '');

//   if (numericValue === '' || numericValue === null) {
//     return 'This field is required';
//   }
  
//   if (numericValue.length < 10) {
//     return 'Mobile number must be 10 digits';
//   }
//   return '';
// };
    
    
// export const validate_Number = (value) =>
//   value === '' || value === null
//     ? 'This field is required'
//     : value.length < 10 //|| value.length !==11
//     ? 'Mobile number must be 10 digits'
//     // : !numberValidator.test(value)
//     // ? 'Please enter a valid 10 digit number'
//     : '';




// export const validate_gender = (value) => 
//   value !== "" ? "" : "Gender is required";
// const validate_dateOfBrith = (value) => value !== "" ? "" : "Date of Birth is required";
