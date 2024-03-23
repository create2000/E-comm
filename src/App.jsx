
import Header from './NavTwo/Header.jsx';
import Deals from './MainSection/Deals.jsx';
import Latest from './MainSection/Latest.jsx';
import Trends from './MainSection/Trends.jsx';
import New from './MainSection/New.jsx';
import Overcast from './MainSection/Overcast.jsx';
import ImageCarousel from './MainSection/Brands.jsx';


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
      <New />
      <Overcast />
      < ImageCarousel />
    
   
    </div>
  )
}


 
  // (
  //   <div>
  //     < Header /> 
    
      
      

  //   </div>
  // )


export default App
