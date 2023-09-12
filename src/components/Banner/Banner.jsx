import React from "react"
import "./banner.css"

export default function Banner({children}) {
    console.log(children)
    return (
        <div className="banner-element">  
            {children}
        </div>
    )
}