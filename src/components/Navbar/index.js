import React from 'react'
import { useTheme } from 'styled-components';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyledComponent'
import { DiCssdeck } from 'react-icons/di';
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constant'
// import { Close, CloseRounded } from '@mui/icons-material';

const Navbar=()=>{
    const[isopen,setopen]=React.useState(false);
    const theme=useTheme();
    return(
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}> 
                        <DiCssdeck size="3rem"/><span>Portfolio</span>
                    </a> 
                </NavLogo>
                <MobileIcon>
          <FaBars onClick={() => {
            setopen(!isopen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#experience'>Experience</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
        {
          isopen &&
          <MobileMenu isopen={isopen}>
            <MobileLink href="#about" onClick={() => {
              setopen(!isopen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setopen(!isopen)
            }}>Skills</MobileLink>
            <MobileLink href='#experience' onClick={() => {
              setopen(!isopen)
            }}>Experience</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setopen(!isopen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setopen(!isopen)
            }}>Education</MobileLink>
            <GitHubButton style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} href={Bio.github} target="_blank">Github Profile</GitHubButton>
          </MobileMenu>
        }
            </NavbarContainer>
        </Nav>

    );
}
export default Navbar;