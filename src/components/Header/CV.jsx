import React from 'react';
import Doc from '../../assets/Bhavay_Singla_Resume.pdf';

const CV = () => {
  return (
    <div className="cv">
      <a href={Doc} download className='btn'>Download CV</a>
      <a href="#contacts" className='btn btn-primary'>Contact Me</a>
    </div>
  );
};

export default CV;
