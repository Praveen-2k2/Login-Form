import React, { useState,useEffect } from 'react';
import { validate_dateOfBrith, validate_email, validate_gender, validate_LName, validate_Fname, validate_Number } from './validation';
// import { BrowserRouter } from 'react-router-dom';
// import Details from './details';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';


let userDetailsArray = [];

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
// const { user } = location.state || {};
// console.log('user values are',location?.state)

    // If we have state passed from the navigation (user data), set it in formData
    useEffect(() => {
      if (location.state?.user) {
        setUser(location.state.user);
      }
    }, [location.state]);

 

  // const navigate = useNavigate(); 

  const handleLogin = () => {
    navigate('/details', { state: { user } });
    console.log("............",user);
  };

  // console.log('user', state)

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

  // const onchangeHandler = (e) => {
  //   const { name, value } = e.target;
  
  //   const regexMap = {
  //     firstName: /^[a-zA-Z ]+$/,
  //     lastName: /^[a-zA-Z0-9 ]*$/,
  //     email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  //     mobileNumber: /^\d+$/
  //   };
  
  //   const validationConditions = {
  //     firstName: regexMap.firstName.test(value) || value === "",
  //     lastName: regexMap.lastName.test(value) || value === "",
  //     email: value === "" || regexMap.email.test(value),
  //     mobileNumber: (regexMap.mobileNumber.test(value) || value === "") && value.length <= 10,
  //   };
  
  //   if (validationConditions[name]) {
  //     setUser({ ...user, [name]: value });
  //   }
  //   handleValidate(e);
  // };

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    // console.log('e target', e.target.name)
    // console.log('e target', e.target.value)
    const regexMap = {
      firstName: /^[a-zA-Z ]+$/,
      lastName: /^[a-zA-Z0-9 ]*$/,
      email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      mobileNumber: /^[0-9]*$/,
    };

    const validationConditions = {
  
      firstName: regexMap.firstName.test(value) || value === "",
      lastName: regexMap.lastName.test(value),
      email: true,
      mobileNumber: (value === "") || (regexMap.mobileNumber.test(value) && value.length <= 10),
      gender: value !== "", 
      dateOfBirth: value !== "",   

    };

   

    
    if (validationConditions[name]) {
      // console.log('hbhiqf',validationConditions[name]  )
      setUser({ ...user, [name]: value });
    }

    handleValidate(e);
};

  

  const handleValidate = (e) => {
    const input = e.target;
   

    // console.log('value', input.value)
    
    switch (input.name) {
    
      case 'firstName':
       
        error.firstName = validate_Fname(input.value);
        break;
      case 'lastName':
        error.lastName = validate_LName(input.value);
        break;
      case 'email':
        error.email = validate_email(input.value);
        break;
      case 'mobileNumber':
        error.mobileNumber = validate_Number(input.value);
        break;
      case 'gender':
        error.gender = validate_gender(input.value);
        break;
      case 'dateOfBirth':
        error.dateOfBirth = validate_dateOfBrith(input.value);
        break;
      default:
        break;
    }
    setError({...error});
  };

  const validateAll = () => {
    let errors = {};
    
    errors.firstName = validate_Fname(firstName);
    // errors.lastName = validate_LName(lastName);
    errors.email = validate_email(email);
    errors.mobileNumber = validate_Number(mobileNumber);
    errors.gender = validate_gender(gender);
    errors.dateOfBirth = validate_dateOfBrith(dateOfBirth);
    setError(errors);
    return errors;
  };

  const onSubmitHandler = () => {
    let errors = validateAll();
    // console.log('errors', errors)
    
    if (isValid(errors)) {
      // alert("Form is submitted successfully");
      userDetailsArray.push(user);
      
      // console.log(user);
      handleLogin();
    } else {
      setError(errors);
    }
  };

  const isValid = (errors) => {
    return Object.keys(errors).every((key) => !errors[key]);
  };

  const clearForm = () => {
    setUser({
      firstName: '',
      lastName: '',
      email: '',
      mobileNumber: '',
      gender: '',
      dateOfBirth: ''
    });
    setError({});
  };

  return (
    // <div className="relative h-screen w-screen flex justify-start items-center">
    // {/* Background video */}
    // <video 
    //   className="absolute top-0 left-0 w-full h-full object-cover"
    //   src="https://motionbgs.com/media/1407/luffy-gear.960x540.mp4" 
    //   autoPlay 
    //   loop 
    //   muted
    // />
      <div className='bg-[url("https://images.alphacoders.com/135/1352212.png")] bg-cover h-screen w-screen flex justify-even items-center '> 
      <div className='px-4 py-6 bg-white rounded-[30px] border-solid border-2 border-[#000000] ml-[200px]'>
        <div className='flex justify-center flex-col items-center gap-3 my-6'>
          <h2 className='m-0 text-blue-700'> LOGIN FORM </h2>
        </div>

        <div className='flex justify-between px-6 mb-6'>
          <div className='flex flex-col'>
            <label className='text-sm font-normal'>First Name* :</label>
            <input
              className={` ${error.firstName ? 'border-red-600' : ''} mt-2`}
              type='text'
              name='firstName'
              value={user.firstName}
              onChange={onchangeHandler}
              placeholder='First Name'
            />
            {error.firstName && (
              <p className='text-red-500 m-1 text-xm text-[10px]'>{error.firstName}</p>
            )}
          </div>

          <div className='flex flex-col'>
            <label className='text-sm font-normal'>Last Name :</label>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={onchangeHandler}
              placeholder='Last Name'
              className='mt-2'
            />
          </div>
        </div>

        <div className='flex justify-between gap-8 px-6 mb-6'>
          <div className='flex flex-col'>
            <label className='text-sm font-normal'>Email Id* :</label>
            <input
              type='text'
              name='email'
              value={user.email}
              onChange={onchangeHandler}
              placeholder='Email Id'
              className={` ${error.email ? 'border-red-600' : ''} mt-2`}
            />
            {error.email && (
              <p className='text-red-500 m-1 text-xm text-[10px]'>{error.email}</p>
            )}
          </div>

          <div className='flex flex-col'>
            <label className='text-sm font-normal'>Mobile Number* :</label>
            <input
              type='text'
              name='mobileNumber'
              value={mobileNumber}
              onChange={onchangeHandler}
              placeholder='Mobile Number'
              className={` ${error.mobileNumber ? 'border-red-600' : ''} mt-2`}
            />
            {error.mobileNumber && (
              <p className='text-red-500 m-1 text-xm text-[10px]'>{error.mobileNumber}</p>
            )}
          </div>
        </div>

        <div className='flex justify-between gap-8 px-6 mb-6'>
          <div className='flex flex-col'>
            <label className='text-sm font-normal'>Gender* :</label>
            <select
              name='gender'
              value={gender}
              onChange={onchangeHandler}
              className={` ${error.gender ? 'border-red-600' : ''} w-45 h-8 bg-white border border-gray-300 text-gray-500 text-xs p-0 rounded-md leading-tight mt-2`}
            >
              <option value='' disabled>
                Select Gender
              </option>
              <option>Male</option>
              <option>Female</option>
            </select>
            {error.gender && (
              <p className='text-red-500 m-1 text-xm text-[10px]'>{error.gender}</p>
            )}
          </div>

          <div className='flex flex-col'>
            <label className='text-sm font-normal'>Date of Birth* :</label>
            <input
              type='date'
              name='dateOfBirth'
              value={dateOfBirth}
              onChange={onchangeHandler}
              className={` ${error.dateOfBirth ? 'border-red-600' : ''} mt-2`}
            />
            {error.dateOfBirth && (
              <p className='text-red-500 m-1 text-xm text-[10px]'>{error.dateOfBirth}</p>
            )}
          </div>
        </div>

        <div className='flex justify-center mt-10 gap-3'>
          <button
            className='cursor-pointer bg-[#f8f8f8] hover:bg-[#d1d5db] active:bg-[#6b7280] text-black active:text-white text-sm rounded-[30px] border-solid border-2 border-[#8f9393] w-24'
            onClick={clearForm}
          >
            Clear
          </button>

          <button
            className='cursor-pointer ml-2 bg-[#bbf7d0] hover:bg-[#22c55e] active:bg-[#15803d] text-black hover:text-white text-sm rounded-[30px] border-solid border-2 border-[#bbf7d0] w-24'
            onClick={() => {
              onSubmitHandler();
            }}
          >
            Submit
          </button>
        </div>
        {/* <p>
          Firstname = {firstName}
          Lastname = {lastName}
          email = {email}
          Mobile Number = {mobileNumber}
          Gender = {gender}
          Date Of Brith = {dateOfBirth}
        </p> */}
      </div>
    </div>
  );
};

export default Login;
export { userDetailsArray };
















// import React, { useState } from 'react';
// import { validate_dateOfBrith, validate_email, validate_gender, validate_LName, validate_Fname, validate_Number } from './validation';

// const Login = () => {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     gender: '',
//     dateOfBirth: ''
//   });
//   const { firstName, lastName, email, mobileNumber, gender, dateOfBirth } = user;

//   const [error, setError] = useState({});

//   // const emailValidator = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g);
//   // const numberValidator = new RegExp(/^\d+$/);                                              // working
//   // const emailValidator = new RegExp(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);   // working
//   // const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;
//   // const emailValidator = new RegExp(^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$)
//   // const emailValidator = new RegExp (^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$);
//   // const alphavalidator = new RegExp('^[a-zA-Z ]+$');
//   // const alphanumericValidator = new RegExp(/^[a-zA-Z0-9 ]*$/);

//   const onchangeHandler = (e) => {
//     user[e.target.name] = e.target.value;
//     setUser({...user},handleValidate(e))};

//   const handleValidate = (e) => {  
//    let input = e.target;
//     let errors = { ...error };
//     switch (input.name) {
//       case 'firstName':
//         errors.firstName = validate_Fname(input.value);

//         break;
    
//       case 'lastName':
//         errors.lastName = validate_LName(input.value);
//         break;

//       case 'email':
//         errors.email = validate_email(input.value);
//         break;

//       case 'mobileNumber':
//         errors.mobileNumber = validate_Number(input.name);
     
//         break;

//       case 'gender':
//         errors.gender = validate_gender(input.name);
//         break;

//       case 'dateOfBirth':
//         errors.dateOfBirth =validate_dateOfBrith(input.name);
//         break;

//       default:
//         break;
//       }
//     setError(errors);
    
//   };

//   const validateAll = () => {
//     let { firstName, lastName, email, mobileNumber, gender, datOfBirth } = user;
//     let errors = {};
//     errors.firstName = validate_Fname(firstName);
//     errors.lastName = validate_LName(lastName);
//     errors.email = validate_email (email);
//     errors.mobileNumber = validate_Number(mobileNumber);
//     errors.gender = validate_gender(gender);
//     errors.datOfBirth = validate_dateOfBrith(datOfBirth);
//     setError(errors);
//     return errors;
//   }

//   const onSubmitHandler = () => {
//     let errors = validateAll();
//     if (isValid(errors)) {
//       console.log(user);
//     }else {
//       let s1 = { error }
//       s1 = errors
//       setError(s1);
//     }
//   }

//   const isValid = (errors) => {
//     let keys = Object.keys(errors);
//     let count = keys.reduce((acc, curr) => (errors[curr] ? acc + 1 : acc), 0);
//     return count === 0;
//   };

//   // const onSubmitHandler = (e) => {
//   //   e.preventDefault();
//   //   const validError = {};

//   //   if (firstName === '') {
//   //     validError.firstName = 'First name is required!!';
//   //   }

//   //   if (email === '') {
//   //     validError.email = 'Email is required!!';
//   //   } else if (!emailValidator.test(email)) {
//   //     validError.email = 'Email is not in valid form!!';
//   //   }

//   //   if (mobileNumber === '') {
//   //     validError.mobileNumber = 'Mobile number is required!!';
//   //   } else if (mobileNumber.length !== 10) {
//   //     validError.mobileNumber = 'Mobile number should be 10 digits!!';
//   //   } else if (!numberValidator.test(mobileNumber)) {
//   //     validError.mobileNumber = 'Mobile should be numbers!!';
//   //   }

//   //   if (gender === 'Select Gender' || gender === '') {
//   //     validError.gender = 'Gender should be mentioned!!';
//   //   }

//   //   if (dateOfBirth === '') {
//   //     validError.dateOfBirth = 'Date of birth should be required!!';
//   //   }

//   //   setError(validError);

//   //   if (Object.keys(validError).length === 0) {
//   //     alert('Form is submitted successfully');
//   //   }

//   //   console.log(user);
//   // };

//   const clearForm = () => {
//     setUser({
//       firstName: '',
//       lastName: '',
//       email: '',
//       mobileNumber: '',
//       gender: '',
//       dateOfBirth: ''
//     });
//     setError({});
//   };

//   return (
//     <div className='bg-[url("../download.jpg")] bg-cover bg-center h-screen w-screen flex justify-center items-center'>
//       <div className='px-4 py-6 bg-white rounded-[30px]'>
//         <div className='flex justify-center flex-col items-center gap-3 my-6'>
//           <div className='flex justify-center'>
//             <h2 className='m-0 text-blue-700'> LOGIN FORM </h2>
//             <img
//               src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
//               alt='login Form'
//               className='w-9'
//             />
//           </div>
//           <h6 className='m-0 italic text-[9px]'>THIS IS A FORMAL LOGIN FORM</h6>
//         </div>

//         <div className='flex justify-between px-6 mb-6'>
//           <div className='flex flex-col'>
//             <label className='text-sm font-normal'>First Name* :</label>
//             <input
//               className={` ${error.firstName ? 'border-red-600' : ''} mt-2`}
//               type='text'
//               name='firstName'
//               value={firstName}
//               onChange={onchangeHandler}
//               placeholder='First Name'
//             />
//             {error.firstName && (
//               <p className='text-red-500 m-1 text-xm text-[10px]'>{error.firstName}</p>
//             )}
//           </div>

//           <div className='flex flex-col'>
//             <label className='text-sm font-normal'>Last Name :</label>
//             <input
//               type='text'
//               name='lastName'
//               value={lastName}
//               onChange={onchangeHandler}
//               placeholder='Last Name'
//               className='mt-2'
//             />
//           </div>
//         </div>

//         <div className='flex justify-between gap-8 px-6 mb-6'>
//           <div className='flex flex-col'>
//             <label className='text-sm font-normal'>Email Id* :</label>
//             <input
//               type='text'
//               name='email'
//               value={email}
//               onChange={onchangeHandler}
//               placeholder='Email Id'
//               className={` ${error.email ? 'border-red-600' : ''} mt-2`}
//             />
//             {error.email && (
//               <p className='text-red-500 m-1 text-xm text-[10px]'>{error.email}</p>
//             )}
//           </div>

//           <div className='flex flex-col'>
//             <label className='text-sm font-normal'>Mobile Number* :</label>
//             <input
//               type='text'
//               name='mobileNumber'
//               value={mobileNumber}
//               onChange={onchangeHandler}
//               placeholder='Mobile Number'
//               className={` ${error.mobileNumber ? 'border-red-600' : ''} mt-2`}
//             />
//             {error.mobileNumber && (
//               <p className='text-red-500 m-1 text-xm text-[10px]'>{error.mobileNumber}</p>
//             )}
//           </div>
//         </div>

//         <div className='flex justify-between gap-8 px-6 mb-6'>
//           <div className='flex flex-col'>
//             <label className='text-sm font-normal'>Gender* :</label>
//             <select
//               name='gender'
//               value={gender}
//               onChange={onchangeHandler}
//               className={` ${error.gender ? 'border-red-600' : ''} w-45 h-8 bg-white border border-gray-300 text-gray-500 text-xs p-0 rounded-md leading-tight mt-2`}
//             >
//               <option value='' disabled>
//                 Select Gender
//               </option>
//               <option>Male</option>
//               <option>Female</option>
//             </select>
//             {error.gender && (
//               <p className='text-red-500 m-1 text-xm text-[10px]'>{error.gender}</p>
//             )}
//           </div>

//           <div className='flex flex-col'>
//             <label className='text-sm font-normal'>Date of Birth* :</label>
//             <input
//               type='date'
//               name='dateOfBirth'
//               value={dateOfBirth}
//               onChange={onchangeHandler}
//               className={` ${error.dateOfBirth ? 'border-red-600' : ''} mt-2`}
//             />
//             {error.dateOfBirth && (
//               <p className='text-red-500 m-1 text-xm text-[10px]'>{error.dateOfBirth}</p>
//             )}
//           </div>
//         </div>

//         <div className='flex justify-center mt-10 gap-3'>
//           <button
//             className='cursor-pointer bg-[#f8f8f8] text-black text-sm rounded-[30px] border-solid border-2 border-[#8f9393] w-24'
//             onClick={clearForm}
//           >
//             Clear
//           </button>

//           <button
//             className='cursor-pointer ml-2 bg-[#67e8f9] text-black text-sm rounded-[30px] border-solid border-2 border-[#67e8f9] w-24'
//             onClick={onSubmitHandler}
//           >
//             Submit
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
















//   const onchangeHandler = e => {
  
//   console.log('--------',e.target.value )
//   console.log('--------',[e.target.name] )
//   const { name, value } = e.target;

//   if (name === "firstName") {
//     if (/^[a-zA-Z]*$/.test(value)) {
//     setUser({ ...user, [name]: value });
//     if(value!==""){
//         error.firstName = ""
//       }
//       else{
//          error.firstName = "First name is required!!"
//       }
//       setError({...error})
// } 
// }

// else if(name==="lastName"){
//   if (/^[a-zA-Z]*$/.test(value)) {
//     setUser({ ...user, [name]: value });
// }
// }

// else if (name==="mobileNumber"){
//   if(numberValidator.test(value)){
//     setUser({...user,[name]:value});
//   }
// }

//  else {
//   setUser({ ...user, [name]: value });
// }
//   }


//  const onNumberOnlyChange = (event) => {
//     const keyCode = event.keyCode || event.which
//     const keyValue = String.fromCharCode(keyCode)
//     const isValid = new RegExp('[0-9]').test(keyValue)
//     if (!isValid) {
//       event.preventDefault()
//       return
//     }
//   }
  // const onchangeHandler = e => {
  //   const { name, value } = e.target;
    // if (name === "firstName") {
    //   if (/^[a-zA-Z ]*$/.test(value)) {
    //     setUser({ ...user, [name]: value });
    //     if (value !== "") {
    //       error.firstName = "";
    //     } else {
    //       error.firstName = "First name is required!!";
    //     }
    //     setError({ ...error });

        // } else if (name === "lastName") {
    //   if (/^[a-zA-Z]*$/.test(value)) {
    //     setUser({ ...user, [name]: value });
        
    //   }
    //  }
      //  else if( name === "email"){
    
    //   if ( !emailValidator.test(value)) {
    //     console.log('--------',{[name]: value })
    //     setUser({ ...user, [name]: value });
    //     if (value !== "") {
    //       error.email = "";
    //     } else {
    //       error.email = "Email is required!!";
    //     }
    //     setError({ ...error });
    //   }
        // } else if (name === "mobileNumber") {
    //   if (/^\d*$/.test(value)) { 
    //   // Allows only digits
    //    if(value.length <= 10){
    //     console.log('-----------') 
    //     setUser({ ...user, [name]: value });
    //    }
    //     if (value !== "") {
    //       error.mobileNumber = "";
    //     } else {
    //       error.mobileNumber = "Mobile Number is required!!";
    //     }
    //     setError({ ...error });
    //   }
  //   } else {
  //     setUser({ ...user, [name]: value });
  //   }
  // };









// const onchangeHandler = e => {
//   const { name, value } = e.target;
//   setUser({ ...user, [name]: value });

  // if (name === "firstName") {
  //   if (/^[a-zA-Z]*$/.test(value)) {
  //     error.firstName = value ? "" : "First name is required!!";
  //   }
  // } else if (name === "lastName") {
  //   if (/^[a-zA-Z]*$/.test(value)) {
  //     error.lastName = "";
  //   }
  // } else if (name === "email") {
//     error.email = emailValidator.test(value) ? "" : "Email is not valid!!";
//   } else if (name === "mobileNumber") {
//     if (value.length !== 10 || !/^\d*$/.test(value)) {
//       error.mobileNumber = "Mobile number should be 10 digits and numeric!";
//     } else {
//       error.mobileNumber = "";
//     }
//   } else if (name === "gender") {
//     error.gender = value === "Select Gender" || !value ? "Gender should be mentioned!!" : "";
//   } else if (name === "dateOfBrith") {
//     error.dateOfBrith = value ? "" : "Date of birth is required!!";
//   }

//   setError({ ...error });
// };




// const onSubmitHandler = (e) => {
//   e.preventDefault();
//   const validError = {};

//   if (firstName === '') {
//     validError.firstName = "First name is required!!";
//   }

//   if (email === '') {
//     validError.email = "Email is required!!";
//   } else if (!emailValidator.test(email)) {
//     validError.email = 'Email is not in valid form!!';
//   }

//   if (mobileNumber === '') {
//     validError.mobileNumber = 'Mobile number is required!!';
//   } else if (mobileNumber.length !== 10 || !numberValidator.test(mobileNumber)) {
//     validError.mobileNumber = 'Mobile number should be 10 digits and numeric!!';
//   }

//   if (gender === 'Select Gender' || gender === '') {
//     validError.gender = "Gender should be mentioned!!";
//   }

//   if (dateOfBrith === '') {
//     validError.dateOfBrith = "Date of birth is required!!";
//   }

//   setError(validError);

//   if (Object.keys(validError).length === 0) {
//     alert("Form is submitted successfully");
//   }

//   console.log(user);
// };



















//-------------------------------------------------------------------------------------------------

// import React, { useState } from 'react'


// const Login = () => {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     gender: '',
//     dateOfBrith: ''
//   });
//   const { firstName, lastName, email, mobileNumber, gender, dateOfBrith } = user;

//   const [error, setError] = useState({})

//   // const emailValidator = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{3,}$/;

//   //const emailValidator = new RegExp (^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$);
//   const emailValidator = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,6}$/g);
//   const numberValidator = new RegExp(/^\d+$/)
//   const alphavalidator = new RegExp(/^[a-zA-Z ]+$/);

//   const onchangeHandler = e => {
//     const { name, value } = e.target;
//     let errors = {...error};

//     switch (name) {
//       case "firstName":
//         errors.firstName = value === ""
//           ? "First name is required"
//           : !alphavalidator.test(value)
//           ? "Only letters and spaces are allowed"
//           : "";
//         break;

   
//       case "lastName":
//         errors.lastName = !alphavalidator.test(value) && value !== ""
//           ? "Only letters and spaces are allowed"
//           : "";
//         break;

//     case "email":  
//       errors.email = value === ""
//         ? "Email is required"
//         : !emailValidator.test(value)
//         ? "Email is not valid"
//         : "";
//       break; 

//     case "mobileNumber":
//       errors.mobileNumber = value === ""
//         ? "Mobile number is required"
//         : value.length !== 10
//         ? "Mobile number should be 10 digits"
//         : !numberValidator.test(value)
//         ? "Mobile number should contain only digits"
//         : "";
//       break;


//     case "gender":
//       errors.gender = value === "" ? "Gender is required" : "";
//       break;

//     case "dateOfBrith":
//       errors.dateOfBrith = value === "" ? "Date of birth is required" : "";
//       break;

//     default:
//       break;
//     }

//     setError(errors);
//   };  
  
//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     const validError = {}

//     if (firstName === '') {
//       validError.firstName = "First name is required!!"
//     }

//     if (email === '') {
//       validError.email = "Email is required!!";
  
//     } else if (!emailValidator.test(email)) {
//       validError.email = 'Email is not in valid form!!';
//     }    

//     if (mobileNumber === '') {
//       validError.mobileNumber = 'Mobile number is required!!'
//     } else if (mobileNumber.length !== 10) {
//       validError.mobileNumber = 'Mobile number should be 10 digits!!'
//     } else if (!numberValidator.test(mobileNumber)){
//       validError.mobileNumber='Mobile should be numbers!! '
//     }

//     if (gender === 'Select Gender' || gender === '') {
//       validError.gender = "Gender should be mentioned!!"
//     }

//     if (dateOfBrith === '') {
//       validError.dateOfBrith = "Date of brith should be required!!"
//     }

//     setError(validError)

//     if (Object.keys(validError).length === 0) {
//       alert("Form is submitted sucessfully")
//     }

//     console.log(user);

//   }

//   const clearForm = () => {
//     setUser({
//       firstName: '',
//       lastName: '',
//       email: '',
//       mobileNumber: '',
//       gender: '',
//       dateOfBrith: ''
//     });
//     setError([{}]);
//   };

//   return (

//   <div className=' bg-[url("../download.jpg")] bg-cover bg-center h-screen w-screen flex justify-center items-center'>
//   <div className='px-4 py-6 bg-white  rounded-[30px]'>
 

//       <div className='flex justify-center flex-col items-center gap-3 my-6'>
//         <div className='flex justify-center'>
//         <h2 className='m-0 text-blue-700 '> LOGIN FORM 
//         </h2>
//         <img src='https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg' alt="login Form" className='w-9'/>
//         </div>
//         <h6  className='m-0 italic text-[9px] '>
//           THIS IS A FORMAL LOGIN FORM
//         </h6>
//       </div>

//       <div className='flex  justify-between  px-6 mb-6 '>
//         <div  className='flex flex-col' >
//           <label className=' text-sm font-normal' >First Name* :</label>
//           <input className={` ${error.firstName ? ' border-red-600' : ''} mt-2`} type='char' name='firstName' value={firstName}
//             onChange={onchangeHandler} placeholder='First Name' />
//           {error.firstName && <p className='text-red-500 m-1 text-xm text-[10px]'>{error.firstName}</p>}
//         </div>

//         <div className='flex flex-col' >
//           <label className=' text-sm font-normal'>Last Name :</label>
//           <input type='text' name='lastName' value={lastName}
//             onChange={onchangeHandler} placeholder='Last Name' className='mt-2' />

//         </div>
//       </div>



//       <div className='flex justify-between gap-8 px-6 mb-6'>
//         <div className='flex flex-col'>
//           <label className=' text-sm font-normal'>Email Id* :</label>
//           <input type='text' name='email' value={email}
//             onChange={onchangeHandler} placeholder='Email Id' className={` ${error.email ? ' border-red-600' : ''} mt-2`} />
//           {error.email && <p className='text-red-500 m-1 text-xm text-[10px]'>{error.email}</p>}
//         </div>

//         <div className='flex flex-col' >
//           <label className=' text-sm font-normal'>Mobile Number* :</label>
//           <input type='text' name='mobileNumber' value={mobileNumber} 
//             onChange={onchangeHandler} placeholder='Mobile Number' className={` ${error.mobileNumber ? ' border-red-600' : ''} mt-2`} />
//           {error.mobileNumber && <p className='text-red-500 m-1 text-xm text-[10px]'>{error.mobileNumber}</p>}
//         </div>
//       </div>

//       <div className='flex justify-between gap-8 px-6 mb-6'>
//         <div className='flex flex-col' >

//           <label className='  text-sm font-normal '>Gender* :</label>
//           <select
//             name='gender'
//             value={gender}
//             onChange={onchangeHandler}
//             className={` ${error.mobileNumber ? ' border-red-600' : ''} w-45 h-8 bg-white border border-gray-300 text-gray-500 text-xs p-0 rounded-md leading-tight mt-2`}>
//             <option value="" disabled>Select Gender</option>
//             <option>Male</option>
//             <option>Female</option>
//           </select>

//           {error.gender && <p className='text-red-500 m-1 text-xm text-[10px]'>{error.gender}</p>}
//         </div>

//         <div  className='flex flex-col'>
//           <label className=' text-sm font-normal'>Date of Birth* :</label>
//           <input type='date' name='dateOfBrith' value={dateOfBrith}
//             onChange={onchangeHandler} className={` ${error.dateOfBrith ? ' border-red-600' : ''} mt-2`} />
//           {error.dateOfBrith && <p className='text-red-500 m-1 text-xm text-[10px]'>{error.dateOfBrith}</p>}
//         </div>


//       </div>

//       <div className='flex justify-center mt-10 gap-3'>
//         <button className='
//               cursor-pointer
//               bg-[#f8f8f8] 
//               text-black 
//               text-sm 
//               rounded-[30px]
//               border-solid border-2 border-[#8f9393]
              
//               w-24
//           '
//           onClick={clearForm}>Clear</button>

//         <button className='
//             cursor-pointer
//             ml-2 
//             bg-[#67e8f9] 
//             text-black 
//             text-sm 
//             rounded-[30px]
//             border-solid border-2 border-[#67e8f9] 
//             w-24
//           '
//           onClick={onSubmitHandler}>Submit</button>
//       </div>


//     </div>

//     </div>
//   )
// }

// export default Login






// -----------------------------------------------------------------------------------------------------------























// const Login = () => {
//   const [user, setUser] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     gender: '',
//     dateOfBrith: '',
//   });

//   const { firstName, lastName, email, mobileNumber, gender, dateOfBrith } = user;

//   const [error, setError] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     mobileNumber: '',
//     gender: '',
//     dateOfBrith: '',
//   });

//   // Email validation function (basic regex)
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return emailRegex.test(email);
//   };

//   const onchangeHandler = (e) => {
//     setUser({ ...user, [e.target.name]: e.target.value });
//   };

//   const onSubmitHandler = (e) => {
//     e.preventDefault();
//     let hasError = false;
//     let newErrors = { ...error }; // Create a copy to avoid direct mutation

//     // Required field validation
//     if (firstName === '') {
//       newErrors['firstName'] = 'First name is required';
//       hasError = true;
//     } else {
//       newErrors['firstName'] = ''; // Clear error if valid
//     }

//     if (lastName === '') {
//       newErrors['lastName'] = 'Last name is required';
//       hasError = true;
//     } else {
//       newErrors['lastName'] = ''; // Clear error if valid
//     }

//     if (email === '') {
//       newErrors['email'] = 'Email is required';
//       hasError = true;
//     } else if (!validateEmail(email)) {
//       newErrors['email'] = 'Please enter a valid email address';
//       hasError = true;
//     } else {
//       newErrors['email'] = ''; // Clear error if valid
//     }

//     if (mobileNumber === '') {
//       newErrors['mobileNumber'] = 'Mobile number is required';
//       hasError = true;
//     } else if (mobileNumber.length > 10) {
//       newErrors['mobileNumber'] = 'Mobile number should not exceed 10 digits';
//       hasError = true;
//     } else {
//       newErrors['mobileNumber'] = ''; // Clear error if valid
//     }

//     if (gender === '' || gender === 'Select Gender') {
//       newErrors['gender'] = 'Gender is required';
//       hasError = true;
//     } else {
//       newErrors['gender'] = ''; // Clear error if valid
//     }

//     if (dateOfBrith === '') {
//       newErrors['dateOfBrith'] = 'Date of Birth is required';
//       hasError = true;
//     } else {
//       newErrors['dateOfBrith'] = ''; // Clear error if valid
//     }

//     // Update error state and check if form is valid
//     setError(newErrors);

//     if (!hasError) {
//       console.log(user); // If no errors, log the user data
//     }
//   };

//   const clearForm = () => {
//     setUser({
//       firstName: '',
//       lastName: '',
//       email: '',
//       mobileNumber: '',
//       gender: '',
//       dateOfBrith: '',
//     });
//     setError({
//       firstName: '',
//       lastName: '',
//       email: '',
//       mobileNumber: '',
//       gender: '',
//       dateOfBrith: '',
//     });
//   };

//   return (
//     <div>
//       <div className='flex justify-center flex-col items-center gap-3 my-6'>
//         <h2 className='m-0'> LOGIN FORM </h2>
//         <h6 className='m-0 '> THIS IS A FORMAL LOGIN FORM </h6>
//       </div>

//       {/* Form should wrap all input fields */}
//       <form onSubmit={onSubmitHandler}>
//         <div className='flex  justify-between gap-8 px-6 mb-6'>
//           <div className='field '>
//             <label className='italic font-sans text-sm font-normal'>First Name* :</label><br />
//             <input type='text' name='firstName' value={firstName} onChange={onchangeHandler} placeholder='First Name' className='mt-2' />
//             {error.firstName && <p style={{ color: 'red', margin: '0px' }}>{error.firstName}</p>}
//           </div>

//           <div className='field '>
//             <label className='italic font-sans text-sm font-normal'>Last Name* :</label><br />
//             <input type='text' name='lastName' value={lastName} onChange={onchangeHandler} placeholder='Last Name' className='mt-2' />
//             {error.lastName && <p style={{ color: 'red', margin: '0px' }}>{error.lastName}</p>}
//           </div>
//         </div>

//         <div className='flex justify-between gap-8 px-6 mb-6'>
//           <div className='field '>
//             <label className='italic font-sans text-sm font-normal'>Email Id* :</label><br />
//             <input type='text' name='email' value={email} onChange={onchangeHandler} placeholder='example@gmail.com' className='mt-2' />
//             {error.email && <p style={{ color: 'red', margin: '0px' }}>{error.email}</p>}
//           </div>

//           <div className='field '>
//             <label className='italic font-sans text-sm font-normal'>Mobile Number* :</label><br />
//             <input type='text' name='mobileNumber' value={mobileNumber} onChange={onchangeHandler} placeholder='Mobile Number' className='mt-2' />
//             {error.mobileNumber && <p style={{ color: 'red', margin: '0px' }}>{error.mobileNumber}</p>}
//           </div>
//         </div>

//         <div className='flex justify-between gap-8 px-6 mb-6'>
//           <div className='field '>
//             <label className='italic font-sans text-sm font-normal'>Gender* :</label><br />
//             <select name='gender' value={gender} onChange={onchangeHandler} className='w-45 h-8 bg-white border border-gray-300 text-xs p-0 text-black rounded-md leading-tight mt-2'>
//               <option className='text-xs'>Select Gender</option>
//               <option>Male</option>
//               <option>Female</option>
//             </select>
//             {error.gender && <p style={{ color: 'red', margin: '0px' }}>{error.gender}</p>}
//           </div>

//           <div className='field'>
//             <label className='italic font-sans text-sm font-normal'>Date of Birth* :</label><br />
//             <input type='date' name='dateOfBrith' value={dateOfBrith} onChange={onchangeHandler} placeholder='Date Of Birth' className='mt-2' />
//             {error.dateOfBrith && <p style={{ color: 'red', margin: '0px' }}>{error.dateOfBrith}</p>}
//           </div>
//         </div>

//         <div className='flex justify-center mt-10 gap-3'>
//           <button
//             type='button'
//             className='
//           bg-[#f8f8f8]
//           text-black
//           text-sm
//           rounded-[30px]
//           border-solid border-2 border-[#8f9393]
//           border-1
//           w-24
//           '
//             onClick={clearForm}
//           >
//             Clear
//           </button>

//           <button
//             type='submit' // Specify submit type
//             className='
//           ml-2
//           bg-[#67e8f9]
//           text-black
//           text-sm
//           rounded-[30px]
//           border-solid border-2 border-[#67e8f9]
//           w-24
//           '
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Login;





// const onchangeHandler = e => {
//   const { name, value } = e.target;
//   setUser({ ...user, [name]: value });

//   if (name === "firstName") {
//     if (/^[a-zA-Z]*$/.test(value)) {
//       error.firstName = value ? "" : "First name is required!!";
//     }
//   } else if (name === "lastName") {
//     if (/^[a-zA-Z]*$/.test(value)) {
//       error.lastName = "";
//     }
//   } else if (name === "email") {
//     error.email = emailValidator.test(value) ? "" : "Email is not valid!!";
//   } else if (name === "mobileNumber") {
//     if (value.length !== 10 || !/^\d*$/.test(value)) {
//       error.mobileNumber = "Mobile number should be 10 digits and numeric!";
//     } else {
//       error.mobileNumber = "";
//     }
//   } else if (name === "gender") {
//     error.gender = value === "Select Gender" || !value ? "Gender should be mentioned!!" : "";
//   } else if (name === "dateOfBrith") {
//     error.dateOfBrith = value ? "" : "Date of birth is required!!";
//   }

//   setError({ ...error });
// };




