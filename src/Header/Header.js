import React from "react";
import './Header.css'
import {useNavigate} from "react-router-dom";
const Header = () =>{
    const navigate = useNavigate()
    return(
        <div className={'header'}>
            <h3>logo</h3>
            <nav className={'nav'}>
                <a href="src#">about us</a>
                <a href="src#">about us</a>
                <a href="src#">about us</a>
                <a href="src#">about us</a>
            </nav>
            <div className="search">
                <input type="text"/>
                <button className={'btn'}>search</button>
                <button onClick={() => navigate(-1)} className={'btn'}>back</button>
            </div>
        </div>
    )
}
export default Header