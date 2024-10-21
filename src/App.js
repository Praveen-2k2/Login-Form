// //import logo from './logo.svg';
// import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import './App.css';
// import Login from './login';
// import Navbar from './Navbar';
// import Details from './details';

// function App() {
//   return (
//     <div>
    //   <Login/>
    // </div> 

//   )

// }

// export default App;




import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
//import Navbar from './Navbar';
import Details from './details';
import LoginDetails from './Login_details';

function App() {
  return (
    // <div>
    //   <Login/>
    // </div>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" exact element={<Login />} />
        <Route path="/details" element={<Details />} />  
        <Route path="/login_details" element={<LoginDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
