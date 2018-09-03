import React from "react"
import {Switch,Route} from "react-router-dom"
import About from "./components/About/About"
import DigitalBuy from "./components/Portfolio/DigitalBuy"
import Roomers from "./components/Portfolio/Roomers"
import Portfolio from "./components/Portfolio/Portfolio"
import Home from "./components/Home/Home"

export default (
    <Switch>
<Route component={Home} exact path="/" />
<Route component={About} path="/about" />
<Route component={DigitalBuy} path="/portfolio/DigitalBuy"/>
<Route component={Roomers} path="/portfolio/Roomers"/>
<Route component={Portfolio} path="/portfolio"/>
    </Switch>
)