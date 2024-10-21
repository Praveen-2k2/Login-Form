import React from 'react';
import { userDetailsArray } from './login'; 
import { useNavigate } from 'react-router-dom';
import './App.css'

const LoginDetails = () => {
    const navigate = useNavigate();
  
    return (
      <div className='bg-[url("https://staticg.sportskeeda.com/editor/2024/05/1b46d-17146683980276-1920.jpg")] bg-cover h-screen w-screen mr-24 flex justify-start items-center '>    
        <div className='px-[40px] py-6 bg-white rounded-[30px] border-solid border-2 border-[#000000] mr-[100px] h-80 ml-24 w-1/3 '>
        <div className='overflow-y-auto no-scrollbar scroll-smooth h-72 '>
  
          <h1>All Login Details:</h1>
          {userDetailsArray.length > 0 ? (
              userDetailsArray.slice().reverse().map((user, index) => ( 
              <div key={index}>
                  <div className='mt-6'>
                    
                    <div>
                        <span className="mb-1 text-[#22d3ee]">Full Name: </span>
                        <span>{user.firstName} {user.lastName}</span>
                    </div>
                    <div className='mt-4'>
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


                    <div className='flex justify-end mr-4'>
                    <button
                        onClick={() => navigate('/', { state: { user } })} 
                        className='cursor-pointer bg-[#727278] hover:bg-[#343a42] active:bg-[#362f99] text-white active:text-white text-sm rounded-[30px] border-solid border-2 border-[#e8e9ec] w-16'> 
                        Edit 
                    </button>
                    </div>
  
                </div>
                  {/* <hr /> */}
                  {index !== userDetailsArray.length - 1 && <hr />}
              </div>
              ))
          ) : (
              <p>No users have logged in yet.</p>
          )}

          </div>

          <div className='flex justify-end mt-4'>
          <button className='cursor-pointer bg-[#f8f8f8] hover:bg-[#d1d5db] active:bg-[#6b7280] text-black active:text-white text-sm rounded-[30px] border-solid border-2 border-[#8f9393] w-24'
          onClick={() => navigate('/')}>Login Page</button>
  
          <button className='ml-4 cursor-pointer bg-[#bbf7d0] hover:bg-[#22c55e] active:bg-[#15803d] text-black hover:text-white text-sm rounded-[30px] border-solid border-2 border-[#bbf7d0] w-24' 
          onClick={()=> navigate('/details')}>Back</button>
          </div>
          </div>
  
      </div>
    );
  };
  
  export default LoginDetails;
  


