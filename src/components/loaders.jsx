// components/Loader.jsx
import React from 'react';
import '../utils/loader.css'; // We'll create this CSS file next

const Loader = () => {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-[#edf1ef] z-50">
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
