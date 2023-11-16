import React from 'react'
import "./style.scss";
const Review = ({text},ref) => {
  return (
    <div className='review' ref={ref}>
      <div className="content">
        <div className="heading">
          <h2>{text}</h2>
          <h1>What People Saying...</h1>
        </div>
        <div className="rating">
          <div className="image">
            <img src=".\images\businessman-sitting-by-table-cafe.jpg" alt="" width="400px" height="550px" />
            <div className="info">
            <div className="frontimg">
              <img src=".\images\portrait-beautiful-young-woman-standing-grey-wall.jpg" alt="" />
              <span className='name'>Sandy</span>
              <span className='artist'>Artist</span>
            </div>
            <div className="rate">
              <div className="count">
                 <h1>4.5</h1>
                 <div className="star">
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                 </div>
                 </div>
                 <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit,
                   sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                 </p>
              </div>
              </div>
            
          </div>

          <div className="image">
            <img src=".\images\businessman-sitting-by-table-cafe.jpg" alt="" width="400px" height="550px" />
           <div className="info">
            <div className="frontimg">
              <img src=".\images\portrait-young-redhead-bearded-male.jpg" alt="" />
              <span className='name'>John</span>
              <span className='artist'>Producer</span>
            </div>
            <div className="rate">
              <div className="count">
                 <h1>4.5</h1>
                 <div className="star">
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                 </div>
                 </div>
                 <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit,
                   sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                 </p>
              </div>
              </div>
          </div>
           
          <div className="image">
            <img src=".\images\businessman-sitting-by-table-cafe.jpg" alt="" width="400px" height="550px" />
            <div className="info">
            <div className="frontimg">
              <img src=".\images\pretty-blonde-woman.jpg" alt="" />
              <span className='name'>Candy</span>
              <span className='artist'>V.P, Design</span>
              
            </div>
            <div className="rate">
              <div className="count">
                 <h1>4.5</h1>
                 <div className="star">
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                    <span>*</span>
                 </div>
                 </div>
                 <p>
                  Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit,
                   sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua.
                 </p>
              </div>
              </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Review)