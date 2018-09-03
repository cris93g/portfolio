import React, { Component } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 70vh;
  background-color: rgb(250, 250, 250);
`;

const BottomWrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 80vh;
  background-color: white;
`;
const RighttUpper = styled.section`
  width: 55%;
  display: flex;
  height: 65vh;
  margin: auto;
  background-color: blue;
`;

const LeftUpper = styled.section`
  width: 50vh;
  margin: auto;
  font-family: 'Questrial', sans-serif;
  height: 30vh;
`;
const RightBottom = styled.section`
  width: 50vh;
  font-family: 'Questrial', sans-serif;
  height: 40vh;
  margin: auto;
`;
const LeftBottom = styled.section`
  width: 100vh;
  display: flex;
  height: 80%;
  margin: auto;
`;

class DigitalBuy extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <LeftUpper>
            <h2>Testing</h2>
            <p>
             Used Postman to check different endpoints on the back-end of the Digital Buy application making sure all the data that was brought back by the server made with express was accurate.
            </p>
          </LeftUpper>
          <RighttUpper>
            <img class="digitalB" src={require("./endPoint.PNG")} />
          </RighttUpper>
        </Wrapper>

        <BottomWrapper>
          <LeftBottom>
            <img class="digitalB" src={require("./digital.PNG")} />
          </LeftBottom>
          <RightBottom>
            <h2>DigitalBuy</h2>
            <p>
              DigitalBuy was created with the idea of an e-commerce website for
              different types of electronics from Desktops to Laptops to even
              something like Hardware.
            </p>
            <br />
            <p>
              {" "}
              - Implemented PostgreSQL to hold and maintain all user data
              <br />- Used Redux for state management in front-end side
              <br />- Integrated Auth0 for user authentication and protection
              <br />- Implemented Express and Massive on top of Node.js
              <br />- Used Styled components to style different webpages
            </p>
            <a href="http://www.digitalbuy.net/#/"><h3>Visit Website</h3></a>
            <p>!!!! For the best experience open with mobile device</p>
          </RightBottom>
        </BottomWrapper>

        <Footer />
      </div>
    );
  }
}
export default DigitalBuy;
