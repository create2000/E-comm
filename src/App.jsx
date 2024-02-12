import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './NavTwo/Header.jsx';
import Deals from './MainSection/Deals.jsx';
import Latest from './MainSection/Latest.jsx';
import Trends from './MainSection/Trends.jsx';


import Login from "./Login/Login.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/Login",
//     element: <Login />,
//   },

// ]);

// return <RouterProvider 
// router={router} >
//   {
//     < Header />
//   }

function App() {
  return (
    <div>

      < Header />
      < Deals />
      < Latest />
      <Trends />
    
   
    </div>
  )
}


 
  // (
  //   <div>
  //     < Header /> 
    
      
      

  //   </div>
  // )


export default App