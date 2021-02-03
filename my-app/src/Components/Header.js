import "../Styles/Header.css";
import React from "react";


function header(){
    return(
    //JSX //Display one ele at a time 
    //multiple are wrapped in empty div //semantic html efficient
    <>
    <header className="header">
        <h1>Welcome</h1>
        <h2>Marvin Lara</h2>
    </header>
        </>
    )
}

export default header; //allows other pages