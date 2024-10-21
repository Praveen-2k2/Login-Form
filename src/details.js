import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
//import image from '../download0011.jpg'

const Details = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = location.state || {}; 

  return (
  <div className='bg-[url("https://images6.alphacoders.com/133/1331472.png")] bg-cover h-screen w-screen flex justify-end items-center'> 
  <div className='px-[40px] py-6 bg-white rounded-[30px] border-solid border-2 border-[#000000] mr-[100px]'>
    <div>
      {/* <center> */}
        <h1 className='m-0 text-blue-700'>Login details of User:</h1>
        {user ? (

        <div className='mt-6'>
            <div>
                <span className="mb-1 text-[#22d3ee]">Full Name: </span>
                <span>{user.firstName} {user.lastName}</span>
            </div>
            <div className='mt-4'> {/* Added margin-top here */}
                <span className='pb-4 text-[#22d3ee]'>Email: </span>
                <span>{user.email}</span>
            </div>
            <div className='mt-4'>
                <span className='mb-1 text-[#22d3ee]'>Mobile Number: </span>
                <span>{user.mobileNumber}</span>
            </div>
            <div className='mt-4'>
                <span className='mb-1 text-[#22d3ee]'>Gender: </span>
                <span className='mb-5'>{user.gender}</span>
            </div>
            <div className='mt-4'>
                <span className='mb-1 text-[#22d3ee]'>Date of Birth: </span>
                <span className=''>{user.dateOfBirth}</span>
            </div>
        </div>
        ) : 
        (
          <p>No user data available</p>
        )}

        <div>

        <button className='center cursor-pointer ml-24 mt-6 bg-[#bbf7d0] hover:bg-[#22c55e] active:bg-[#15803d] text-black hover:text-white text-sm rounded-[30px] border-solid border-2 border-[#bbf7d0] w-24' 
        onClick={() => navigate('/')}>Login Page</button>

        <button className='ml-4 cursor-pointer bg-[#f8f8f8] hover:bg-[#d1d5db] active:bg-[#6b7280] text-black active:text-white text-sm rounded-[30px] border-solid border-2 border-[#8f9393] w-24' 
        onClick={()=> navigate('/login_details')}>Details</button>
        </div>
      {/* </center> */}
      </div>
      </div>
     </div>
  );
};

export default Details;


















// import React from 'react';
// import { useNavigate, useLocation } from 'react-router-dom';

// const Details = () => {  
//   const navigate = useNavigate();
//   const location = useLocation();  

//   const { firstName, lastName, email, mobileNumber, gender, dateOfBirth } = location.state || {};
//   return (
//     <div className='bg-[url("https://images6.alphacoders.com/133/1331472.png")] bg-cover h-screen w-screen flex justify-end items-center'> 
//       <div className='px-[40px] py-6 bg-white rounded-[30px] border-solid border-2 border-[#000000] mr-[100px]'>
//         <div>
//           <h1 className='m-0 text-blue-700'>Login details of User:</h1>
//           {firstName ? ( 
//             <div className='mt-6'>
//               <div>
//                 <p className="mb-1 text-[#22d3ee]">Full Name: </p>
//                 <p>{firstName} {lastName}</p>
//               </div>
//               <div className='mt-4'>
//                 <span className='pb-4 text-[#22d3ee]'>Email: </span>
//                 <span>{email}</span>
//               </div>
//               <div className='mt-4'>
//                 <span className='mb-1 text-[#22d3ee]'>Mobile Number: </span>
//                 <span>{mobileNumber}</span>
//               </div>
//               <div className='mt-4'>
//                 <span className='mb-1 text-[#22d3ee]'>Gender: </span>
//                 <span className='mb-5'>{gender}</span>
//               </div>
//               <div className='mt-4'>
//                 <span className='mb-1 text-[#22d3ee]'>Date of Birth: </span>
//                 <span>{dateOfBirth}</span>
//               </div>
//             </div>
//           ) : (
//             <p>No user data available</p>
//           )}

//           <div>
//             <button className='cursor-pointer bg-[#f8f8f8] hover:bg-[#d1d5db] active:bg-[#6b7280] text-black active:text-white text-sm rounded-[30px] border-solid border-2 border-[#8f9393] w-24' 
//               onClick={() => navigate('/')}>
//               Login Page
//             </button>

//             <button className='ml-4 bg-[#bbf7d0] hover:bg-[#22c55e] active:bg-[#15803d] text-black hover:text-white text-sm rounded-[30px] border-solid border-2 border-[#bbf7d0] w-24' 
//               onClick={() => navigate('/login_details')}>
//               Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Details = ({ firstName, lastName, email, mobileNumber, gender, dateOfBirth }) => {  // Use destructured props
//   const navigate = useNavigate();

//   return (
//     <div className='bg-[url("https://images6.alphacoders.com/133/1331472.png")] bg-cover h-screen w-screen flex justify-end items-center'> 
//       <div className='px-[40px] py-6 bg-white rounded-[30px] border-solid border-2 border-[#000000] mr-[100px]'>
//         <div>
//           <h1 className='m-0 text-blue-700'>Login details of User:</h1>
//           {firstName ? ( 
//             <div className='mt-6'>
//               <div>
//                 <span className="mb-1 text-[#22d3ee]">Full Name: </span>
//                 <span>{firstName} {lastName}</span>
//               </div>
//               <div className='mt-4'>
//                 <span className='pb-4 text-[#22d3ee]'>Email: </span>
//                 <span>{email}</span>
//               </div>
//               <div className='mt-4'>
//                 <span className='mb-1 text-[#22d3ee]'>Mobile Number: </span>
//                 <span>{mobileNumber}</span>
//               </div>
//               <div className='mt-4'>
//                 <span className='mb-1 text-[#22d3ee]'>Gender: </span>
//                 <span className='mb-5'>{gender}</span>
//               </div>
//               <div className='mt-4'>
//                 <span className='mb-1 text-[#22d3ee]'>Date of Birth: </span>
//                 <span>{dateOfBirth}</span>
//               </div>
//             </div>
//           ) : (
//             <p>No user data available</p>
//           )}

//           <div>
//             <button className='center cursor-pointer ml-24 mt-6 bg-[#bbf7d0] hover:bg-[#22c55e] active:bg-[#15803d] text-black hover:text-white text-sm rounded-[30px] border-solid border-2 border-[#bbf7d0] w-24' 
//               onClick={() => navigate('/')}>
//               Login Page
//             </button>

//             <button className='ml-4 bg-[#bbf7d0] hover:bg-[#22c55e] active:bg-[#15803d] text-black hover:text-white text-sm rounded-[30px] border-solid border-2 border-[#bbf7d0] w-24' 
//               onClick={() => navigate('/login_details')}>
//               Login Details
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Details;





        //   <div className='mt-6'>
        //     <span className="mb-1 text-[#22d3ee]  ">Full Name : </span> {user.firstName} {user.lastName} 
        //     {/* <p className='mb-1'>Last Name:</p>
        //     {user.lastName} */}
        //     <p className='mb-1 text-[#22d3ee]' >Email : </p> {user.email}
            
        //     <span className='mb-1 text-[#22d3ee]'>Mobile Number : </span> {user.mobileNumber}
           
        //     <span className='mb-1 text-[#22d3ee]'>Gender : </span> {user.gender}

        //     <span className='mb-1 text-[#22d3ee]'>Date of Birth :</span> {user.dateOfBirth}
            
        //   </div>

    //     <div>
    //     <p className='text-[#22d3ee]'>Full Name: {user.firstName} {user.lastName}</p>
    //     <p>Email: {user.email}</p>
    //     <p>Mobile Number: {user.mobileNumber}</p>
    //     <p>Gender: {user.gender}</p>
    //     <p>Date of Birth: {user.dateOfBirth}</p>
    //   </div>


// import React from 'react';
// import { useNavigate } from 'react-router-dom';

// const Details = () => {
//     let navigate = useNavigate();  // Fixed typo here

//     return (
//         <div>
//             <center>
//                 <h1>Login details of User.</h1>
//                 <button onClick={() => navigate('/')}>Login Page</button>  {/* Fixed typo here */}
//             </center>
//         </div>
//     );
// };

// export default Details;
