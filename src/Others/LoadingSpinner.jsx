// LoadingSpinner.js
import React from 'react';
import { motion } from 'framer-motion';
import './LoadingSpinner.css'; 



const LoadingSpinner = () => {
    return (
        <motion.div
            className="spinner"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
    );
};

export default LoadingSpinner;
