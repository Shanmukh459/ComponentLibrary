import React from "react"
import Badge from "./components/Badge"
import "./app.css"

export default function App() {
  return (
    <main>
      <section>
        <Badge shape="square" clr="gray">Badge</Badge>
        <Badge shape="square" clr="red">Badge</Badge>
        <Badge shape="square" clr="yellow">Badge</Badge>
        <Badge shape="square" clr="green">Badge</Badge>
        <Badge shape="square" clr="blue">Badge</Badge>
        <Badge shape="square" clr="indigo">Badge</Badge>
        <Badge shape="square" clr="purple">Badge</Badge>
        <Badge shape="square" clr="pink">Badge</Badge>
      </section>
      <section>
        <Badge shape="pill" clr="gray">Badge</Badge>
        <Badge shape="pill" clr="red">Badge</Badge>
        <Badge shape="pill" clr="yellow">Badge</Badge>
        <Badge shape="pill"  clr="green">Badge</Badge>
        <Badge shape="pill" clr="blue">Badge</Badge>
        <Badge shape="pill" clr="indigo">Badge</Badge>
        <Badge shape="pill" clr="purple">Badge</Badge>
        <Badge shape="pill" clr="pink">Badge</Badge>
      </section>
      
    </main>
  )
}