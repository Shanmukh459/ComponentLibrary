import React from "react"
import "./testimonialWithImageDesk.css"
import "./testimonialWithImage.css"
import "./testimonialWithImageMob.css"
import classNames from "classnames"

export default function TestimonialWithImage({children, clr, type}) {
    const defaultClass = `testimonial-image-${type}`
    const bgColor = `testimonial-image-${clr}`
    const allClasses = classNames(defaultClass,bgColor)


    return (
        <div className={allClasses}>
            {children}
        </div>
    )
}