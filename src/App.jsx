import React from "react"
import Badge from "./components/Badge/Badge"
import Banner from "./components/Banner/Banner"
import {AiFillCheckCircle} from "react-icons/ai"
import "./app.css"

export default function App() {
  return (
    <main>
      <section>
        <h2>Badge Component</h2>
        <div className="badge-button">
          <Badge shape="square" clr="gray">Badge</Badge>
          <Badge shape="square" clr="red">Badge</Badge>
          <Badge shape="square" clr="yellow">Badge</Badge>
          <Badge shape="square" clr="green">Badge</Badge>
          <Badge shape="square" clr="blue">Badge</Badge>
          <Badge shape="square" clr="indigo">Badge</Badge>
          <Badge shape="square" clr="purple">Badge</Badge>
          <Badge shape="square" clr="pink">Badge</Badge>
        </div>
        <div className="badge-button">
          <Badge shape="pill" clr="gray">Badge</Badge>
          <Badge shape="pill" clr="red">Badge</Badge>
          <Badge shape="pill" clr="yellow">Badge</Badge>
          <Badge shape="pill"  clr="green">Badge</Badge>
          <Badge shape="pill" clr="blue">Badge</Badge>
          <Badge shape="pill" clr="indigo">Badge</Badge>
          <Badge shape="pill" clr="purple">Badge</Badge>
          <Badge shape="pill" clr="pink">Badge</Badge>
        </div>
      </section>
      <section>
        <h2>Banner component</h2>
        <div className="banner-div">
          <Banner clr="green">
            <div className="banner-left">
              <AiFillCheckCircle />
            </div>
            <div className="banner-right">
              <p>Congratulations!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </div>
          </Banner>
        </div>
      </section>
      
    </main>
  )
}