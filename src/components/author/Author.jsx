import React from 'react'
import "./style.scss";
const Author = ({text},ref) => {
  return (
    <div className='author' >
      <div className="content">
        <div className="left">
          <div className="image1">
                <img src="public\images\circle-scatter-haikei.png" alt="" width="400px" />
            </div>
            <div className="image2">
                <img src="public\images\portrait-mature-smiling-authoress-sitting-desk.jpg" alt="" width="500px" height="500px"/>
          </div>
        </div>

        <div className="right" ref={ref}>
          <h2>{text}</h2>
          <h1>Prof. Sophia</h1>
          <div className="des">
            <p>This is an ebook landing page template with Bootstrap 5 CSS framework. 
              It is easy to customize with the use of Bootstrap CSS classes.
              </p>
              <p>
              Lorem ipsum dolor sit amet, consive
               adipisicing elit, sed do eiusmod. tempor incididunt ut labore.
              </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Author)