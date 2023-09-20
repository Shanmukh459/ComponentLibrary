import React from "react"
import "./banner.css"
import classnames from "classnames"

export default function Banner({children, clr}) {
    const defaultclass = 'banner-element'
    const colorClass = `banner-${clr}`
    const titleColor = `banner-title-${clr}`
    const allClasses = classnames(defaultclass, colorClass, titleColor)
    return (
        <div className={allClasses}>  
            {children}
        </div>
    )
}