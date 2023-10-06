import React from "react"
import Badge from "./components/Badge/Badge"
import Card from "./components/Card/Card"
import Banner from "./components/Banner/Banner"
import TestimonialWithImage from "./components/TestimonialWithImage/TestimonialWithImage"
import TestimonialWithoutImage from "./components/TestimonialWithoutImage/TestimonialWithoutImage"
import {AiFillCheckCircle } from "react-icons/ai"
import { FaExclamationTriangle } from "react-icons/fa"
import { HiXCircle, HiInformationCircle } from "react-icons/hi"
import { IoCloudUploadOutline, IoAccessibilityOutline, IoHome } from "react-icons/io5"
import { BiSolidQuoteAltLeft } from "react-icons/bi"
import { GiPalmTree } from "react-icons/gi"
import "./app.css"

export default function App() {
  const [testimonialWithImageType, setTestimonialWithImageType] = React.useState("desk")
  const [testimonialWithoutImageType, setTestimonialWithoutImageType] = React.useState("desk")

  function toggleWithImageType () {
    return setTestimonialWithImageType(prev => prev==="desk"? "mob": "desk")
  }

  function toggleWithoutImageType () {
    return setTestimonialWithoutImageType(prev => prev==="desk"? "mob": "desk")
  }
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
      <section>
        <h2>Testimonial with image</h2>
        <TestimonialWithImage clr="yellow" type={testimonialWithImageType}>
          <div className="testimonial-image">
            <img src="./src/assets/image.JPG" />
          </div>
          <div className="testimonial-content">
            <BiSolidQuoteAltLeft />
            <p className="testimonial-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit. </p>
            <p className="testimonial-name">May Andersons</p>
            <p className="testimonial-title">Workcation, CTO</p>
          </div>
        </TestimonialWithImage>
        <button className="testimonial-button" onClick={toggleWithImageType}>Change to {testimonialWithImageType === "desk" ? "Mobile" : "Desktop"} view</button>
      </section>
      <section>
        <h2>Testimonial without image</h2>
        <TestimonialWithoutImage clr="yellow" mode={testimonialWithoutImageType}>
          <div className="no-image-title">
            <IoHome />
            <GiPalmTree />
            <p className="testimonial-work">Work</p>
            <p className="testimonial-cation">cation</p>
          </div>
          <p className="testimonial-desc">“Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo expedita voluptas culpa sapiente alias molestiae. Numquam corrupti in laborum sed rerum et corporis.”</p>
          <div className="testimonial-person">
            <p className="testimonial-name">May Andersons</p>
            <p className="testimonial-title">Workcation, CTO</p>
          </div>
        </TestimonialWithoutImage>
        <button className="testimonial-button" onClick={toggleWithoutImageType}>Change to {testimonialWithoutImageType === "desk" ? "Mobile" : "Desktop"} view</button>
      </section>    
    </main>
  )
}