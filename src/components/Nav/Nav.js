import React, {Component} from "react"
import styled from "styled-components";
import {Link} from "react-router-dom"
import './Nav.css';
const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 90px;
  background-color:black;
 position:sticky;
`;
const Brand = styled.section`
width:40%;
align-items: left;
 color:white;
 display:flex;
 margin:auto;
 justify-content: space-around;
 a{ color: white }`;


const Letters = styled.section`
width:35%;
align-items: center;
 color:white;
 display:flex;
 margin:auto;
 font-family: 'Questrial', sans-serif;
 font-size: 120%;
 
 justify-content: space-around;
 a{ color: white }
 a{text-decoration: none;}

`;
const Icons = styled.section`
width:20%;
align-items: center;
 color:white;
 display:flex;
 margin:auto;
 justify-content: space-around;
 a{ color: white }

`;



class Nav extends Component {
    render() {
      return (
       
        <div className="Nav">
        <Wrapper>
             
                <Brand><img class="logo"  src={require("./logo.png")} /></Brand>
                
                <Letters> <Link to="/"><div>Home</div></Link>
                <Link to="/about"><div>About</div></Link>
                <Link to="/portfolio"><div>Portfolio</div></Link></Letters>
               <Icons> <a href="mailto:christiandevwork@gmail.com"> <i class="material-icons">email</i></a>
               <a href="https://www.linkedin.com/in/cristian-gonzalez-2a0524169/"> <img  src={require("./linkedin.png")} />
               </a>  
               <a href=" https://github.com/cris93g"> <img  src={require("./github.png")} />
               </a></Icons> 
              
        </Wrapper>
        </div>
       
      );
    }
  }
  
  export default Nav;

