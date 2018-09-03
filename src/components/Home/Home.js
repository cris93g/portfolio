import React, {Component} from "react"
import Nav from "../Nav/Nav"
import Footer from "../Footer/Footer"
import MainBot from "../MainBot/MainBot"
import MainTop from "../MainTop/MainTop"

class Home extends Component {
    render() {
      return (
    
        <div className="App">
          <Nav/>
          <MainTop/>
          <MainBot/>
          <Footer/>
        </div>
     
      );
    }
  }
  
  export default Home;