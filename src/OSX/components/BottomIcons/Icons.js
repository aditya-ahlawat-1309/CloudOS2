import { useState } from "react";
import finder from "../../Media/finder.png";
import images from "../../Media/images.png";
import projects from "../../Media/Projects.png";
import notes from "../../Media/todoAppLogo.png";
import Dictionary from "../../Media/Dictionary.png"
import Achievements from "../../Media/Achievements.png"
import Music from "../../Media/Music.png"
import Chat from "../../Media/whatsapp.png"
import Netflix from "../../Media/Netflix.png"
import Passlock from "../../Media/Passlock.png"
import Search from  "../../Media/Search.png"
import Game from "../../Media/Game.png"
import Git from "../../Media/github.png"

import NASA from "../../Media/NASA.png"
import Logo from "../../Media/windowlogo.png"
import "./Icons.css"
import DialogBox from "../DialogBox/DialogBox";

const Icons = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show)
    return (
      <>
      {show ? <DialogBox/> : null}
        <div
          style={{
            position: "absolute",
            bottom: "1%",
            marginLeft: "30.5%",
            zIndex: 1,
            display: "flex",
            color: "white",
            zIndex: "7",
          }}
        >
          {/*  //  <a
        //   style={{
        //     backgroundColor: "Transparent",
        //     border: "none",
        //     cursor: "pointer",
        //     outline: "none",
        //     color: "red",
        //     textDecoration: "none",
        //     fontWeight: "bold",
        //     marginRight: "1.5%",
        //   }}
        //   // href="/finder"
        // >
        //   <div style={{ flexDirection: "column" }}>
        //     <img
        //       src={finder}
        //       width="75px"
        //       height="75px"
        //       style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
        //       class="Icons-animation"
        //     />

        //     <p> All Files</p>
        //   </div>
        // </a>
        // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        // <button
        //   style={{
        //     backgroundColor: "Transparent",
        //     border: "none",
        //     cursor: "pointer",
        //     outline: "none",
        //     color: "red",
        //     textDecoration: "none",
        //     fontWeight: "bold",
        //     marginRight: "1.5%",
        //   }}
        // >
        //   <div style={{ flexDirection: "column" }}>
        //     <img
        //       src={images}
        //       width="75px"
        //       height="75px"
        //       style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
        //       class="Icons-animation"
        //     />
        //     <p> &nbsp;&nbsp; Gallery</p>
        //   </div>
        // </button>
        // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        // <button
        //   style={{
        //     backgroundColor: "Transparent",
        //     border: "none",
        //     cursor: "pointer",
        //     outline: "none",
        //     color: "red",
        //     textDecoration: "none",
        //     fontWeight: "bold",
        //     marginRight: "1.5%",
        //   }}
        // >
        //   <div style={{ flexDirection: "column" }}>
        //     <img
        //       src={projects}
        //       width="75px"
        //       height="75px"
        //       style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
        //       class="Icons-animation"
        //     />
        //     <p> &nbsp;&nbsp; Projects</p>
        //   </div>
        // </button>
        // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        // <button
        //   style={{
        //     backgroundColor: "Transparent",
        //     border: "none",
        //     cursor: "pointer",
        //     outline: "none",
        //     color: "red",
        //     textDecoration: "none",
        //     fontWeight: "bold",
        //     marginRight: "1.5%",
        //   }}
        // >
        //   <div style={{ flexDirection: "column" }}>
        //     <img
        //       src={Dictionary}
        //       width="75px"
        //       height="75px"
        //       style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
        //       class="Icons-animation"
        //     />
        //     <p> Dictionary</p>
        //   </div>
        // </button>
        // &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        // <button
        //   style={{
        //     backgroundColor: "Transparent",
        //     border: "none",
        //     cursor: "pointer",
        //     outline: "none",
        //     color: "red",
        //     textDecoration: "none",
        //     fontWeight: "bold",
        //     marginRight: "1.5%",
        //   }}
        // >
        //   <div style={{ flexDirection: "column" }}>
        //     <img
        //       src={Passlock}
        //       width="75px"
        //       height="75px"
        //       style={{ borderRadius: "15px", boxShadow: "0 0 10px #000" }}
        //       class="Icons-animation"
        //     />
        //     <p> &nbsp;&nbsp;Passlock</p>
        //   </div>
        // </button> 
        //  */}
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              justifyContent: "center",
              alignItems: "center",
              //left:"40%"
              marginRight: "1.5%",
              // marginLeft: "57%",
            }}
            href="https://ztmnasa.netlify.app/"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={NASA}
                width="60px"
                height="60px"
                style={{ borderRadius: "15px",  }}
                class="Icons-animation"
              />
            </div>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "1.5%",
            }}
            href="https://todo-aditya.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={notes}
                width="60px"
                height="60px"
                style={{ borderRadius: "15px",  }}
                class="Icons-animation"
              />
            </div>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "1.5%",
            }}
            href="https://drummusic.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={Music}
                width="60px"
                height="60px"
                style={{ borderRadius: "15px",  }}
                class="Icons-animation"
              />
            </div>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <button
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "1.5%",
            }}
            //href="https://drummusic.netlify.app"
             onClick={() => handleClick()}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={Logo}
                width="60px"
                height="60px"
                style={{backgroundSize:"contain"}}
                class="Icons-animation"
                
              />
            </div>
          </button>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "1.5%",
            }}
            href="https://chatfullstack.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={Chat}
                width="60px"
                height="60px"
                style={{ borderRadius: "15px", }}
                class="Icons-animation"
              />
            </div>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "1.5%",
            }}
            href="https://github.com/aditya-ahlawat-1309"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={Git}
                width="60px"
                height="60px"
                style={{ borderRadius: "15px",  }}
                class="Icons-animation"
              />
            </div>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            style={{
              backgroundColor: "Transparent",
              border: "none",
              cursor: "pointer",
              outline: "none",
              color: "green",
              textDecoration: "none",
              fontWeight: "bold",
              marginRight: "1.5%",
            }}
            href="https://dicegamedice.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={Game}
                width="60px"
                height="60px"
                style={{ borderRadius: "15px",  }}
                class="Icons-animation"
              />
            </div>
          </a>
        </div>
      </>
    );
  }


export default Icons