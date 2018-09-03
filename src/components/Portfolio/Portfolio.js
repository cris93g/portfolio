import React, {Component} from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import styled from "styled-components";
import './Portfolio.css';
import {Link} from "react-router-dom"
const Wrapper = styled.section`
display:flex;
width:100%
height:100vh;

`

const Cards = styled.section`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    width: 390px;
    height:270px;
    display:flex;
    align-items: center;
    justify-content: center;
    margin:auto;
    background-color:white;
    border-radius:10px;
    `
    


class Portfolio extends Component {
    render() {
      return (
       
        <div className="App">
    <Nav/>
    <Wrapper>
      <Cards className="card"  >
      <Link to="/portfolio/DigitalBuy"><img class="digitalB" src={require("../MainBot/digi.jpg")} /></Link>
      </Cards>  <Cards className="card" >
      <Link to="/portfolio/Roomers"><img class="digitalB"  src={require("../MainBot/room.jpg")} /> </Link>
      </Cards>  
      {/* <Cards className="card" ></Cards> */}
    </Wrapper>
    <Footer/>
        </div>
        
      );
    }
  }
  
  export default Portfolio;