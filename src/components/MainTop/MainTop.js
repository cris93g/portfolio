import React, {Component} from "react"
import styled from "styled-components";
import './MainTop.css';

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height:50vh;
  font-family: 'Questrial', sans-serif;
  font-size: 120%;
  background-color:white;`;

const MiddleTop = styled.section`
margin-left:38%;
margin-top:180px;
color:white;
position:absolute;

`




class MainTop extends Component {
    render() {
      return (
       
        <div className="App">
          <Wrapper className="ima"><div className="fa"><img class="fac" src={require("./face.png")} /></div><MiddleTop><div className="tex">Cristian Gonzalez</div> <br/><div className="bottomT"><p >I am a full stack web developer</p><p>looking for a full time position</p></div></MiddleTop></Wrapper>
        </div>
      
      );
    }
  }
  
  export default MainTop;