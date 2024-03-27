// import Header from './NavTwo/Header.jsx';
// import Deals from './MainSection/Deals.jsx';
// import Latest from './MainSection/Latest.jsx';
import Trends from './MainSection/Trends.jsx';
// import New from './MainSection/New.jsx';
// import Overcast from './MainSection/Overcast.jsx';
// import ImageCarousel from './MainSection/Brands.jsx';
import Login from './Login/Login.jsx';
import Register from './Login/Register.jsx';
import Layout from './MainSection/Layout.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout>
            <Outlet />

            </Layout>,
            

    children: [

       {
          path: "",
          element: <Trends />,
       },

       {
          path: "/register",
          element: <Register />,
        },

      {
        path: "/login",
        element: <Login />,

      },


      ]
            
  },
]);
        
    function App() {
      return <RouterProvider router={router} >
          {/* <div>
            <Home />
            <Register /> 
          </div>  */}
        </RouterProvider>
        

}
 

 export default App;
    
 