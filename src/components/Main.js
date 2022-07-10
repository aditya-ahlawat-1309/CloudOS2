import React,{useState,useEffect} from 'react'
import {motion} from "framer-motion";
import { NavLink, useHistory } from "react-router-dom";
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { PowerBtn, YinYang } from './AllSvgs'
import Intro from './Intro'
import { DarkTheme } from './Themes';
import BottomBar2 from '../OSX/components/BottomBar/BottomBar';
import AboutPage from './AboutPage';





const MainContainer = styled.div`
background: ${props => props.theme.text};
width:100vw;
height:100vh;
overflow: hidden;
position : relative;
h2,h3,h4,h5,h6{
    font-family: 'Karla',sans-serif;
    font-weight: 500;
}
`

const Container = styled.div`
padding: 2rem;
`

const Contact = styled(NavLink)`
color:black;
position:absolute;
top:2rem;
right: calc(1rem + 2vw);
text-decoration:none;
z-index:1;
cursor:pointer;

`

const Login = styled(NavLink)`
  color: black;
  position: absolute;
  top: 2rem;
  right: 17rem;
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const Register = styled(NavLink)`
  color: black;
  position: absolute;
  top: 2rem;
  right: 9rem;
  text-decoration: none;
  z-index: 1;
  cursor: pointer;
`;

const Blog = styled(NavLink)`
  color: black;
  position: absolute;
  top: 50%;
  transform: rotate(90deg) translate(-50%, -50%);
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
  cursor:pointer;
  font-weight:500;
`;

const Work = styled(NavLink)`
  color: ${(props) => (props.click ? "white" : "black")};
  position: absolute;
  top: 50%;
  left: 2.75rem;
  transform: translate(-50%, -50%) rotate(-90deg);
  text-decoration: none;
  z-index: 1;
`;

const BottomBar = styled.div`
position:absolute;
bottom:1rem;
left:0;
right:0;
width:100%;

display:flex;
justify-content:space-evenly;
`

const About = styled(NavLink)`
color:${props => props.click ? "white" : "black"};
text-decoration: none;
z-index:1;
`

const Skill = styled(NavLink)`
color:black;
text-decoration:none;
z-index:1;
`

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`

const Center = styled.button`
position:absolute;
top: ${props => props.click ? '85%': '50%'};
left: ${props => props.click ? '92%' : '50%'};

transform: translate(-50%,-50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;

display:flex;
flex-direction:column;
justify-content: center;
align-items:center;

transition: all 1s ease;

&>:first-child{
    animation:${rotate} infinite 1.5s linear;
}

&>:last-child{
    display: ${props => props.click ? 'none' : 'inline-block'};
padding-top: 1rem;
}
`

const DarkDiv = styled.div`
position:absolute;
top:0;
background-color:#000;
bottom:0;
right:50%;
width: ${props => props.click ? '50%' : '0%'};

height: ${props => props.click ? '100%' : '0%'};
z-index:1;
transition : height 0.5s ease, width 1s ease 0.5s;
`

const Power = styled.button`
  position: fixed;
  top: 2rem;
  left: 48.65%;
  transform: transalte(-50%, 0);
  background-color: #fcf6f4;
  padding: 0.3rem;
  border-radius: 50%;
  border: 1px solid #000;
  width: 2.5rem;
  height: 2.5rem;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 0, 0, 0.9);
    box-shadow: 0 0 8px 6px rgba(255 , 0, 0,1);
  }

  & > *:first-child {
    text-decoration: none;
    color: inherit;
  }
`;

const Main = () => {

    const [click, setClick] = useState(true);

    const handleClick = () => setClick(click);

    const [clickLogo, setClickLogo] = useState(true);

    const handleClickLogo = () => setClickLogo(!clickLogo);

  return (
    <>
      <div className="mobile-message">
        <h2>Please use application on larger screen</h2>
      </div>
      <MainContainer>
        <DarkDiv click={click} />

        <Container>
          {/* <Power> */}
          {/* <NavLink to="/" clickLogo={clickLogo}> */}
          {/* <PowerBtn
            onClick={() => handleClickLogo()}
            width={30}
            height={30}
            fill="currentColor"
          />
          {/* </NavLink> */}
          {/* </Power>
        <div style={{ dipslay: "flex" }}>
          <h2
            style={{
              position: "absolute",
              top: "10%",
              left: "44.5%",
              color: "white",
              zIndex: "10",
            }}
          >
            Mac OS 
            <br/>
Click on
          </h2>
          <h2
            style={{
              position: "absolute",
              top: "10%",
              left: "50.25%",
              color: "black",
              zIndex: "10",
            }}
          >
             X Start
             <br/>
             Power Button
          </h2>
        </div> */}
          <LogoComponent theme={click ? "dark" : "light"} />
          <SocialIcons theme={click ? "dark" : "light"} />

          <Center click={click}>
            <YinYang
              onClick={() => handleClick()}
              width={click ? 120 : 200}
              height={click ? 120 : 200}
              fill="currentColor"
            />
            <h2>Click on Logo</h2>
          </Center>

          {/* <Login to="/signin">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Login
          </motion.h2>
        </Login>

        <Register to="/register">
          <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
            Register
          </motion.h2>
        </Register> */}

          <Contact
            target="_blank"
            to={{ pathname: "mailto:ad.aditya.1309@gmail.com" }}
          >
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              Say hi..
            </motion.h2>
          </Contact>

          {/* <Blog to="/about">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h2>
          </Blog>

          <Work to="/about" click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About
            </motion.h2>
          </Work> */}

          {/* <BottomBar>
          <About to="/about" click={click}>
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              About.
            </motion.h2>
          </About>

          <Skill to="#">
            <motion.h2 whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              My Skills.
            </motion.h2>
          </Skill> 
        </BottomBar>*/}
        </Container>
        {click ? <Intro /> : null}
        <BottomBar2 />
      </MainContainer>

      <AboutPage />
      
    </>
  );
}

export default Main