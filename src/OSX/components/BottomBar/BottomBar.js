import React from 'react'
import Icons from '../BottomIcons/Icons';


import "./BottomBar.css"

 const BottomBar2 = () => {
  var sectionStyle = {
    // backgroundSize: "cover",
    // backgroundRepeat: "repeat-x",
    // backgroundImage: `url(${image})`,
    // objectFit: "contain",
    // backgroundColor:"#E11176",
    opacity: "1",
    zIndex: 6,
    position: "absolute",
    background: "rgba(0, 255, 224, 0.51)",
    borderRadius: "16px",
    boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
    backdropFilter: "blur(5px)",
    webkitBackdropFilter: "blur(5px)",
    border: "5px solid rgba(0, 0, 0, 0)",
    position: "fixed",
    top: "94.95%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "55%",
height: "80px",
  };

  return (
    <div >
      <div
        style={{
          width: "50px",
          height: "50px",
        }}
      >
        <Icons />
      </div>

      <div class="bottombar-header" style={sectionStyle}></div>
    </div>
  );
};

export default BottomBar2
