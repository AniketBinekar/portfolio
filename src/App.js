// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import React from "react";
import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";

import { darkTheme, lightTheme } from './Utils/Theme'
import styled from "styled-components";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects"


const Body = styled.div`
  background-color: ${({ theme }) => theme.bg};
  width: 100%;
  overflow-x: hidden;
`
function App() {
const[darkmode,setDarkmode]=useState(true);
const[openmodel,setopenmodel]=useState({state:false,project:null})

  return (
    <ThemeProvider  theme={darkmode ? darkTheme : lightTheme}>
      <Router>
        <Navbar/>
        <Body>
          <HeroSection />
          {/* <Skills />
          <Experience /> */}
          {/* <Wrapper> */}
            <Skills />
            <Experience />
          {/* </Wrapper> */}
          <Projects openModal={openmodel} setOpenModal={setopenmodel} />
          {/* <Wrapper> */}
            <Education />
            <Contact />
          {/* </Wrapper> */}
          <Footer />
          {/* {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          } */}
        </Body>
      </Router>
    </ThemeProvider>
    
  );
}

export default App;
