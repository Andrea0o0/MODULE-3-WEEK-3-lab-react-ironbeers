import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";

export default function Navbar (){

    return (
        <>
            <div className="Navbar">
                <Link to='/' >
                   <FontAwesomeIcon icon="fa-solid fa-house" style={{color: "#ffffff",}} /> 
                </Link>                
            </div>            
        </>
    )
}