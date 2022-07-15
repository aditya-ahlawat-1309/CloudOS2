import { useState } from "react";
import "./Icons.css"
import DialogBox from "../DialogBox/DialogBox";

const Icons = () => {

  const [show, setShow] = useState(false);

  const handleClick = () => setShow(!show)
    return (
      <>
        {show ? <DialogBox /> : null}
        <div
          style={{
            // position: "absolute",
            //bottom: "1%",
            //left: "32.35%",
            zIndex: "11",
            display: "flex",
            color: "white",
            // alignItems:"center",
            // textAlign:"center",
            // justifyContent:"center",
            position: "fixed",
    top: "94.95%",
    left: "50.75%",
            transform:"translate(-50%,-50%)",
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
             
            }}
            href="https://ztmnasa.netlify.app/"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNlRTPLbpf5MSrFZARAGidI9umaZfVcngvsQ&usqp=CAU"
                }
                width="57.5px"
                height="57.5px"
                style={{ borderRadius: "15px" }}
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
              //marginRight: "1.5%",
            }}
            href="https://todo-aditya.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://play-lh.googleusercontent.com/92xIZAW-mdwucFX1v8kyTXlLVgZfLczHv8XCVOH1tFc0M3cTRI4q9qJLUM96PqCrgWjc"
                }
                width="57.5px"
                height="57.5px"
                style={{ borderRadius: "15px" }}
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
              //marginRight: "1.5%",
            }}
            href="https://paint0183.netlify.app/"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://library.kissclipart.com/20180919/xqe/kissclipart-paint-windows-7-logo-clipart-microsoft-paint-compu-77dbca5213901db1.png"
                }
                width="60px"
                height="60px"
                style={{ borderRadius: "15px" }}
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
              //marginRight: "1.5%",
            }}
            //href="https://drummusic.netlify.app"
            onClick={() => handleClick()}
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAhFBMVEXz8/PzUyWBvAYFpvD/ugjz9fb19Pbz+fr39fr69vPy9foAofD/tgDzRQB9ugAAo/Df6dCv0Xjz2dPzTBfzl4PznImz04CAx/H60oHS5vJ5xPH60Hn16dIAnvDz7u3z4t7n7dzzNADzkXurz3BwtQDzvrLM36zf6/Os2PL336z07d/7z3RN8WfWAAABg0lEQVR4nO3cyVLCYBCFURwCkXlygDBFUBTf//3cSGIVf5WrDi7O9wJdp3p/Wy1JkvSrLLzqVDu8FHAzjW57JrZ34+hSH5yWg9jK187PrXx/GMZ2GF9+MZsObmKbzSvhZHgb25CQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCwUWE5i21QC/fB86Xp/dLt/DG4t/MGbf7+FNxkl9jZzTrR1TvCeXjJIWFJkv7uIbzqVDe8LAE8Lp+D+zgTu5/FS2zFKUFcrEex9ZaV8Ksf3Sol7N3FNqqFRf8+NkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQkJCQsJmhetebOtr75dmi+iO1anTKrrNJbDRsvCuDJQk6Z/1DSzvYqEfRCNJAAAAAElFTkSuQmCC"
                }
                width="60px"
                height="60px"
                style={{ backgroundSize: "contain" }}
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
              //marginRight: "1.5%",
            }}
            href="https://chatfullstack.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/WhatsApp_logo-color-vertical.svg/2048px-WhatsApp_logo-color-vertical.svg.png"
                }
                width="60px"
                height="60px"
                style={{ borderRadius: "15px" }}
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
              //marginRight: "1.5%",
            }}
            href="https://github.com/aditya-ahlawat-1309"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://cdn2.iconfinder.com/data/icons/font-awesome/1792/github-square-512.png"
                }
                width="60px"
                height="60px"
                style={{ borderRadius: "15px" }}
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
              //marginRight: "1.5%",
            }}
            href="https://dicegamedice.netlify.app"
            target="_blank"
          >
            <div style={{ flexDirection: "column" }}>
              <img
                src={
                  "https://i.pinimg.com/564x/af/de/55/afde550fd6fa482cfae1440875c1f510.jpg"
                }
                width="60px"
                height="60px"
                style={{ borderRadius: "15px" }}
                class="Icons-animation"
              />
            </div>
          </a>
        </div>
      </>
    );
  }


export default Icons