import React from "react"
import "./testimonialWithoutImageDesk.css"
import "./testimonialWithoutImage.css"
import "./testimonialWithoutImageMob.css"
import classNames from "classnames"

export default function TestimonialWithoutImage({ children, clr, mode }) {
    const modeClass = mode === "desk" ? "testimonial-no-image-desk" : "testimonial-no-image-mob"
    const colorClass = `testimonial-no-image-${clr}`

    const allClasses = classNames(modeClass, colorClass)

    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}