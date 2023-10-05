import React from "react"
import "./testimonialWithoutImageDesk.css"

export default function TestimonialWithoutImage({ children }) {
    return (
        <div className="testimonial-no-image">
            {children}
        </div>
    )
}