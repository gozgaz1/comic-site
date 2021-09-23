import React, {useState, useEffect} from 'react';
import * as FaIcons from 'react-icons/fa';
import '../Styling/ButtonTop.css';
  
const ScrollButton = () => {
  
  const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    if (window.scrollY > 200){
      setVisible(true)
    } 
    else {
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  useEffect(() => {

    console.log('scrollY: ', window.scrollY) // always logs 0
    console.log('pageYOffset: ', window.pageYOffset) // always logs 0
    window.addEventListener('scroll', toggleVisible);
  }, [])
  
  return (
    <div className="scroll-top-button">
        <FaIcons.FaArrowCircleUp onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} />
    </div>
  );
}
  
export default ScrollButton;