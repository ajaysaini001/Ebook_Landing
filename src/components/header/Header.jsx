import React, { useState } from 'react';
import './style.scss';
import { FiBookOpen } from 'react-icons/fi';

const Header = ({ text }, ref) => {
  const [name, setName] = useState('');

  return (
    <div className="header" ref={ref}>
      

      <div className="content">
        <div className="logo">
          <div className="bookicon">
            <FiBookOpen className="icon1" />
          </div>
          <h1>{text}</h1>
        </div>

        <div className="allheading">
          <div className="heading">
         
            <div className="download">Download</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.forwardRef(Header);
