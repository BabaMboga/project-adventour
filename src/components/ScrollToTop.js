import React, { useState } from 'react';
import iconTop from '../Images/iconTop.svg';
import './ScrollToTop.css'

const ScrollToTop = () => {
  
  const [scrollState, setScrollState] = useState(false);
  const toTop = () => {
    window.scrollTo({ top: 0 });
  };
  window.addEventListener("scroll", () => {
    window.pageYOffset > 200 ? setScrollState(true) : setScrollState(false);
  });

  return (
    <div className='top' onClick={toTop} scrollState={scrollState}>
      <img src={iconTop} alt="" />
    </div>
  )
}

export default ScrollToTop;