import React from 'react'
import "./style.scss";
const Book = ({text},ref) => {

  
  return (
    <div className='book'>
      <div className="content">
        <div className="aboutbook">
          <div className="left">
            <img src=".\images\tablet-screen-contents.jpg" alt="" width="600px" />
          </div>

          <div className="right" ref={ref}>
            <h2>{text}</h2>
            <h1>About The Book</h1>
            <p>
            Credit goes to < a href='https://www.freepik.com/' target="_blank" rel="noopener noreferrer">FreePik</a> for images used in this ebook landing page template.
             You may browse FreePik to download more free images for your website.
             TemplateMo is one of the best websites to download free CSS templates for a
             ny purpose. This is an ebook landing page template using Bootstrap 5 CSS layout.
            </p>
          </div>
        </div>
         <div className="prewheading">
           <h2>What's inside</h2>
           <h1>Preview at glance</h1>
         </div>
        <div className="preview">

          <ul className='left'>
            <li className="intro">Interoduction</li>
            <li className="li"  onClick={
                  () => window.scrollTo({ top: 2200, left: 0, behavior: "smooth" })}>
                    Chapter1:Win back your time</li>
            <li className="li" 
               onClick={
                () => window.scrollTo({ top: 3100, left: 0, behavior: "smooth" })}>Chapter2:Work less do more</li>
            <li className="li" onClick={
                  () => window.scrollTo({ top: 4000, left: 0, behavior: "smooth" })} >
              Chapter3:Delegate</li>
            <li className="li" onClick={
                  () => window.scrollTo({ top: 5200, left: 0, behavior: "smooth" })}>
              Chapter4:Habits</li>
          </ul>
          <div className="right">
            <div className="chapter1">
              <h1>Interoducing ebook</h1>
              <p>
                This ebook landing page is good to use for any purpose.
                This layout is based on Bootstrap 5 CSS framework.
              </p>
              <p>
                What is Content Marketing? If you are wondering what content 
                marketing is all about, this is the place to start.
              </p>
              <div className="comment">
                <span className='cot'>''</span>
                <p>
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito
                </p>
              </div>
              <p>
              When you need free HTML CSS templates, please visit
               Templatemo website which provides a variety of templates.
              </p>
              <div className="dot">
                .............................................................
              </div>
            </div>

                {/* chapter5 */}
              <div className="chapter5">
              <h1>Win back your time</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Sed leo nisl, posuere at molestie ac, suscipit auctor mauris.
                Etiam quis metus elementum, tempor risus vel, condimentum orci.
              </p>
              <p>
                You are not allowed to redistribute this template ZIP file on any other template 
                collection website. Please contact TemplateMo for more information.
              </p>
              <div className="image">
                <div className="image">
                <img src=".\images\tablet-screen-contents.jpg" alt="" width="200px" />
                </div>
                <div className="text">
                <h2>Modern ebook ever</h2>
                <p>
                Lorem ipsum dolor sit amet, consive adipisicing elit, 
                sed do eiusmod. tempor incididunt.
                </p>
                </div>
              </div>
              <p>
              When you need free HTML CSS templates, please visit
               Templatemo website which provides a variety of templates.
              </p>
              <div className="dot">
                .............................................................
              </div>
            </div>

            {/* chapter3 */}
            <div className="chapter2">
              <h1>Work less do more</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Sed leo nisl, posuere at molestie ac, suscipit auctor mauris.
                Etiam quis metus elementum, tempor risus vel, condimentum orci.
              </p>
              <p>
                You are not allowed to redistribute this template ZIP file on any other template 
                collection website. Please contact TemplateMo for more information.
              </p>
              <div className="image">
                <img src=".\images\portrait-mature-smiling-authoress-sitting-desk.jpg" alt="" width="200px" />
                <img src=".\images\businessman-sitting-by-table-cafe.jpg" alt="" width="200px" />
              </div>
              <p>
              When you need free HTML CSS templates, please visit
               Templatemo website which provides a variety of templates.
              </p>
              <div className="dot">
                .............................................................
              </div>
            </div>

            {/* chapter3*/}
            <div className="chapter3">
              <h1>Delegate</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p>
                Sed leo nisl, posuere at molestie ac, suscipit auctor mauris.
                Etiam quis metus elementum, tempor risus vel, condimentum orci.
              </p>
              <p>
                You are not allowed to redistribute this template ZIP file on any other template 
                collection website. Please contact TemplateMo for more information.
              </p>
              <div className="image1">
                <img src=".\images\portrait-mature-smiling-authoress-sitting-desk.jpg" alt="" width="200px" />
             
              </div>
              <p>
              You may want to contact us for more information about this template
              </p>
              <div className="dot">
                .............................................................
              </div>
            </div>
            {/* chapter4 */}
            <div className="chapter4">
              <h1>Habbits</h1>
              <p>
                This ebook landing page is good to use for any purpose.
                This layout is based on Bootstrap 5 CSS framework.
              </p>
              <p>
                What is Content Marketing? If you are wondering what content 
                marketing is all about, this is the place to start.
              </p>
              <p>
                 What is Free CSS Templates? Free CSS Templates are a variety
                 of ready-made web pages designed for different kinds of websites.
              </p>
              <div className="comment">
                <span className='cot'>''</span>
                <p>
                Lorem Ipsum dolor sit amet, consectetur adipsicing kengan omeg kohm tokito
                </p>
              </div>
              <p>
              When you need free HTML CSS templates, please visit
               Templatemo website which provides a variety of templates.
              </p>
              <div className="dot">
                .............................................................
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default React.forwardRef(Book)