import React from "react"
import "./card.css"

export default function Card({children, icon, clr}) {
    return (
        <div className="card-component">
            <div className={`card-icon ${clr}-icon`}>
                {icon}
            </div>

            {children}
            </div>
        
    )
}