import React from "react"
import ReactDOM  from "react-dom"
import "./index.css"
import { NavBar } from "./nav"
import { Hero } from "./hero"
import { Cards } from "./Cards"


const WebPage = () => {
    return (
        <div id="mainContent">
            <NavBar />
            <Hero />
            <Cards />
        </div>
    )
}

ReactDOM.render(<WebPage />, document.getElementById("root"))