import React from "react"
import "./testimonialWithoutImageDesk.css"
import "./testimonialWithoutImage.css"

export default function TestimonialWithoutImage({ children, clr, mode }) {
    const modeClass = mode === "desk" ? "testimonial-no-image" : "testimonial-nimg-mob"

    return (
        <div className={`testimonial-no-image testimonial-no-image-${clr}`}>
            {children}
        </div>
    )
}