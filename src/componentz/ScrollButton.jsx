import React, {useState, useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import '../Styling/ButtonTop.css';
  
const ScrollButton = () => {
  
  const [visible, setVisible] = useState(false)

  const el = document.querySelector('.container');

  const toggleVisible = (val) => {
    if (val > 1500){
        setVisible(true)
    } 
    else {
        setVisible(false)
    }
  }
  
  const scrollToTop = () =>{
    document.querySelector('.container').scrollTo({
      top: 0, 
      behavior: 'smooth'
    });
  };
  
  /*
  useEffect(() => {
    console.log('scrollY: ', window.scrollY) // always logs 0
    console.log('pageYOffset: ', window.pageYOffset) // always logs 0
    window.addEventListener('scroll', toggleVisible);
  }, [])
  */

  useEffect(() => {
    let el = document.querySelector('.container');
    el.addEventListener('scroll', () => {
        // console.log('scrollY: ', el.scrollTop);
        toggleVisible(el.scrollTop);
    })
  }, [el])
  
  return (
    <div className="scroll-top-button">
        <FaIcons.FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </div>
  );
}
  
export default ScrollButton;