import React from "react"
import Badge from "./components/Badge/Badge"
import Card from "./components/Card/Card"
import Banner from "./components/Banner/Banner"
import {AiFillCheckCircle } from "react-icons/ai"
import { FaExclamationTriangle } from "react-icons/fa"
import { HiXCircle, HiInformationCircle } from "react-icons/hi"
import { IoCloudUploadOutline, IoAccessibilityOutline } from "react-icons/io5"
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
      <section className="banner-section">
        <h2>Banner component</h2>
        <div className="banner-div">
          <Banner clr="green">
            <div className="banner-left">
              <AiFillCheckCircle />
            </div>
            <div className="banner-right">
              <p className="banner-title">Congratulations!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </div>
          </Banner>
          <Banner clr="yellow">
            <div className="banner-left">
              <FaExclamationTriangle />
            </div>
            <div className="banner-right">
              <p className="banner-title">Attention!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
            </div>
          </Banner>
          <Banner clr="red">
            <div className="banner-left">
              <HiXCircle />
            </div>
            <div className="banner-right">
              <p className="banner-title">There is a problem with your application!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam quo totam eius aperiam dolorum.</p>
            </div>
          </Banner>
          <Banner clr="blue">
            <div className="banner-left">
              <HiInformationCircle />
            </div>
            <div className="banner-right">
              <p className="banner-title">Update available!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid pariatur, ipsum similique veniam.</p>
            </div>
          </Banner>
        </div>
      </section>
      <section>
        <h2>Card Component</h2>
        <Card icon={<IoAccessibilityOutline />} clr="green">
          
          <p className="card-head">Easy Deployment</p>
          <p className="card-body">Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi lobortis.</p>
        </Card>
      </section>
      
    </main>
  )
}