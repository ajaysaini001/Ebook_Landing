import { useRef } from 'react';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Book from './components/book/Book';
import Author from './components/author/Author';
import Review from './components/review/Review';
import Contact from './components/contact/Contact';
import "./app.scss";

function App() {
  const headerRef=useRef(null);
  const homeRef=useRef(null);
  const bookRef = useRef(null);
  const authorRef = useRef(null);
  const reviewRef = useRef(null);
  const contactRef = useRef(null);

  const handleClick = (text) => {
    switch (text) {
      case 'Home':
        if (headerRef.current) {
          headerRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'Home':
        if (homeRef.current) {
          homeRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'The Book':
        if (bookRef.current) {
          bookRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'Author':
        if (authorRef.current) {
          authorRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'Reviews':
        if (reviewRef.current) {
          reviewRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case 'Contact':
        if (contactRef.current) {
          contactRef.current.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        break;
    }
  };

  return (
    <div className='app'>
      <Header ref={headerRef} text="ebook"/>
      <div className="btn">
      {/* <button onClick={() => handleClick('ebook')} className='enter'>Home</button> */}
      <button onClick={() => handleClick('Home')} className='enter'>Home</button>
      <button onClick={() => handleClick('The Book')} className='enter1'>The Book</button>
      <button onClick={() => handleClick('Author')} className='enter2'>Author</button>
      <button onClick={() => handleClick('Reviews')} className='enter3'>Reviews</button>
      <button onClick={() => handleClick('Contact')} className='enter4'>Contact</button>
      </div>
      <Home ref={homeRef} text="Introducing ebook"/>
      <Book ref={bookRef} text="Modern & Creative" />
      <Author ref={authorRef} text="Meet Author" />
      <Review ref={reviewRef} text="Reviews" />
      <Contact ref={contactRef} text="Say hi and talk to us" />
    </div>
  );
}

export default App;
