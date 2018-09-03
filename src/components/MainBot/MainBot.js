import React, {Component} from "react"
import styled from "styled-components";
import {Link} from "react-router-dom"

import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import './MainBot.css';
const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height:50vh;
  background-color:rgb(250, 250, 250);`;



const TextWrapper= styled.section`
display:flex;
position:absolute;
margin-top:20px;
margin-left:44%;
  width: 20%;
  height:8%;
  font-family: 'Questrial', sans-serif;
  align-items: center;
  /* display:flex; */
  font-size: 120%;

`
const Container = styled.section`
    width:60%;
    height:60%;
    display:flex;
    margin:auto;
   `;

  const Letters = styled.section`
  width:80%;
  align-items: center;
   color:black;
   display:flex;
   margin:auto;
   justify-content: space-around;
  `;

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
 
   `;
const BottomCard= styled.section`
padding: 2px 16px;

`

class MainBot extends Component {
    render() {
      return (
    
        <div className="App">
            <Wrapper>
              <TextWrapper>SOME OF MY LATEST WORK</TextWrapper>
              
              <Container>
                <Cards className="card"> 
                  <BottomCard className="inner">
                   <Link to="/portfolio/DigitalBuy"><img class="digitalB" src={require("./digi.jpg")} />
                  </Link>
                  
                  </BottomCard>
                </Cards>
                <Cards className="card">
                  <BottomCard  className="inner">
                  <Link to="/portfolio/Roomers"><img class="digitalB"  src={require("./room.jpg")} />
                  </Link>
                  
                 </BottomCard> 
                </Cards>
              </Container>
            </Wrapper>
        </div>
     
      );
    }
  }
  
  export default MainBot;

  