import React from 'react'
import { FaTwitter,FaInstagram ,FaFacebookF , FaWhatsapp  } from "react-icons/fa"; 
import "./style.scss";
import { Link } from 'react-router-dom';
const Contact = ({text},ref) => {
  const onClickFun=() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  };
  return (
    <div className='contact' ref={ref}>
      <div className="content">
        <div className="bgimg">
          <div className="left">
            <form className='login'>
              <label> <h3>Get your free </h3><h3>ebook</h3> </label>
              {/* <label >ebook</label> */}
              <input type="text"
              required
              placeholder='Your Name'
               />

               <input type="email"
               required
               placeholder='your@company.con' 
               />
               <div className="download">
                <button className="download">
                  Download ebook
                </button>
               </div>
            </form>
          </div>

          <div className="right">
            <h2>{text}</h2>
            <h1>Contact</h1>
            <span className="location">
              <h3>London, United Kingdom</h3>
            </span>
            <span className="num"><h3>010-020-0340</h3></span>
            <a href="mailto:info@company.com" class="email">info@company.com </a>
            <div className="link">
              <h1>Social</h1>
              <div className="path">
                <span className="link1" onClick={()=>onClickFun()}>
                  <FaInstagram size={20}/></span>
                <span className="link1" onClick={()=>onClickFun()}><FaTwitter size={20}/></span>
                <span className="link1" onClick={()=>onClickFun()}><FaFacebookF size={20}/></span>
                <span className="link1" onClick={()=>onClickFun()}><FaWhatsapp size={20}/></span>
              </div>
              <h1>Copyright © 2048 ebook company</h1>
              <a href="https://templatemo.com" target="_blank" rel="noopener noreferrer">Designed by templatemo</a>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Contact)