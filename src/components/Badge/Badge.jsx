import React from "react"
import "./badge.css"
import classnames from "classnames"

export default function Badge({children, clr, shape}) {
    let colorClass = `button-${clr}`
    let shapeClass = `button-${shape}`
    const allClasses = classnames(colorClass, shapeClass)

    return (
        <div>
            <button className={allClasses}>{children}</button>
        </div>
        
    )
}