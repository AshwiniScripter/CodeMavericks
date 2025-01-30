import React from 'react';

const Footer = () => {
  return (
    <div className="bg-gray-100 text-white py-8 mt-10">
      <div className="container mx-auto px-6 text-center">
        {/* Footer Heading */}
        <h2 className="text-3xl font-semibold mb-2 text-black">Let’s Work <span className='text-blue-700'> Together.</span></h2>
        <p className='text-black text-center'>Do you have a great idea? bring your ideas to reality</p>
        


        {/* Footer Info */}
        <p className="text-sm mb-2">
          <span>&copy; 2025 Your Company. All rights reserved.</span>
        </p>
        <p className="text-sm">
          <a href="#" className="text-blue-500 hover:text-blue-300">Privacy Policy</a> | 
          <a href="#" className="text-blue-500 hover:text-blue-300"> Terms & Conditions</a>
        </p>
      </div>
    </div>
  );
}

export default Footer;
