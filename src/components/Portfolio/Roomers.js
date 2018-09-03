import React, { Component } from "react";
import styled from "styled-components";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";

const Wrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 50vh;
  background-color: rgb(250, 250, 250);
`;

const BottomWrapper = styled.section`
  width: 100%;
  margin: auto;
  display: flex;
  height: 70vh;
  background-color: white;
`;

const LeftUpper = styled.section`
  width: 90vh;
  display: flex;
  height: 50vh;
 
`;

const RightUpper = styled.section`
  width: 50vh;
  margin: auto;
  font-family: 'Questrial', sans-serif;
  height: 30vh;
`;
const LeftBottom = styled.section`
  width: 50vh;
  font-family: 'Questrial', sans-serif;
  height: 40vh;
  margin: auto;
`;
const RightBottom = styled.section`
  width: 100vh;
  display: flex;
  height: 80%;
  margin: auto;
`;
class Roomers extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Wrapper>
          <LeftUpper>
            <img class="digitalB" src={require("./wireframe.PNG")} />
          </LeftUpper>
          <RightUpper>
            <h2>WIREFRAME</h2>
            <p>
            Used Adobe XD on the
beginning parts of making the application to create a clear wireframe,
to have a layout on how the routing of every page would go.As
well as help the team have a understanding of how the end product
would look like.
            </p>
          </RightUpper>
        </Wrapper>
        <BottomWrapper>
          <LeftBottom>
            <h2>ROOMERS</h2>
            <p>
              Roomers was created with the idea of an app that could connect a
              user with potential roommates based on similar interests, budgets,
              and housing expectations. This site includes account creation,
              personal listing creation, a search feature for both users and
              rooms, and private messaging.
            </p>
            <br />
            <p>
              {" "}
              - Implemented MongoDB to hold and maintain all user data
              <br />- Used AWS S3 to upload and store images
              <br />- Integrated Auth0 for user authentication and protection
              <br />- Implemented Express and Massive on top of Node.js
              <br />- Socket.io for feature similar to Facebook messenger
            </p>
            <a href="http://roomers.space/#/"><h3>Visit Website</h3></a>
          </LeftBottom>
          <RightBottom>
            <img class="digitalB" src={require("./roomer.PNG")} />
          </RightBottom>
        </BottomWrapper>
        <Footer />
      </div>
    );
  }
}
export default Roomers;
