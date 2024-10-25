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














