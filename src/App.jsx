// App.js
import React, { useState, useEffect } from 'react';
import Trends from './MainSection/Trends.jsx';
import Login from './Login/Login.jsx';
import Register from './Login/Register.jsx';
import Layout from './MainSection/Layout.jsx';
import Cart from './Others/Cart.jsx';
import ProductDetails from './MainSection/ProductDetails.jsx';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { motion, AnimatePresence } from 'framer-motion';
import LoadingSpinner from './Others/LoadingSpinner.jsx';
import './App.css'; // Assuming you have some global styles

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
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
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/product/:productId",
        element: <ProductDetails />,
      },
    ],
  },
]);

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      <AnimatePresence>
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <LoadingSpinner />
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <RouterProvider router={router} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
