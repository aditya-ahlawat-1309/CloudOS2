import React from 'react'
import "./DialogBox.css"
import Weather from "../../Media/weather.png"
const DialogBox = () => {
  return (
    <div class="dialog-container">
      <h1 style={{ color: "#FFFFFF", textAlign: "center", marginTop: "3%" }}>
        S Y S T E M - A P P S
      </h1>
      <div>
        <a href="https://quote0183.netlify.app/" target="_blank">
          <img
            src={
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVY2MgZ8mCG5fNoOJRMHhrOSv_RCq3DknlrwzoYyM_XlJ-vJi5UoqYHNCxSqJninC5-1Q&usqp=CAU"
            }
            width="100px"
            height="100px"
            style={{
              borderRadius: "15%",
              marginLeft: "-42.5%",
              marginTop: "5%",
              position: "absolute",
            }}
            class="Icons-animation"
          />
        </a>
        <a href="https://dynamicweatherapp.netlify.app" target="_blank">
          <div style={{ flexDirection: "column" }}>
            <img
              src={Weather}
              width="60px"
              height="60px"
              style={{
                borderRadius: "15%",
                marginLeft: "-30%",
                marginTop: "5%",
                position: "absolute",
              }}
              class="Icons-animation"
              width="100px"
              height="100px"
            />
          </div>
        </a>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}

export default DialogBox