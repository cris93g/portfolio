import React, {Component} from "react"
import styled from "styled-components";

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 90px;
 
  background-color: rgb(245, 245, 245);;

 
`;
const Letters = styled.section`
width:80%;
align-items: center;
 color:black;
 display:flex;
 margin:auto;
 /* justify-content: space-around; */
`;

class Footer extends Component {
    render() {
      return (
      
        <div className="App">
            <Wrapper><Letters> &copy; 2018 Cristian Gonzalez </Letters></Wrapper>
        </div>
     
      );
    }
  }
  
  export default Footer;