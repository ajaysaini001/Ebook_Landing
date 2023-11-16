import React from 'react'
import "./style.scss";
const Home = ({text},ref) => {
  return (
    <div className='home'>
      <div className="content">
         <div className="bgimg">
           <img src=".\images\businessman-sitting-by-table-cafe.jpg" alt="" width="1270px" />

         </div>
         <div className="info">
            <div className="left" ref={ref}>
          <h2>{text}</h2>
          <h1>
          ebook landing page for professionals
          </h1>
          <div className="disbtn">
            <button className='btn1'>  Descover More</button> 
            <button className='btn2'>
              Meet the Author
            </button>
          </div>
          

          <div className="rating1">
            <div className="author1">
              <img src=".\images\portrait-beautiful-young-woman-standing-grey-wall.jpg" alt="" 
              width=""/>
            </div>
            <div className="author1">
              <img src=".\images\portrait-young-redhead-bearded-male.jpg" alt="" width="" />
            </div>
            <div className="author1">
              <img src=".\images\pretty-blonde-woman.jpg" alt="" width=""/>
            </div>
            <div className="author1">
              <img src=".\images\studio-portrait-emotional-happy-funny-smiling-boyfriend.jpg" alt="" width="" />
            </div>
            <div className="review1">
              <span className='rtn'>4.5</span>
              <span className='star'>
              <span className='1'>*</span>
              <span className='1'>*</span>
              <span className='1'>*</span>
              <span className='1'>*</span>
              <span className='st5'>*</span>
              </span>
              <span className='rew'>2,564 reviews</span>
            </div>
          </div>
         </div>

         <div className="right">
          <img src=".\images\education-online-books.png" alt="" />
         </div>
      </div>
    </div>
    </div>

  )
}

export default React.forwardRef(Home)