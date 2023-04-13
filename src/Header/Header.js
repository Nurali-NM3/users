import React from "react";

const Header = () =>{
    return(
        <div className={'header'}>
            <h3>logo</h3>
            <nav className={'nav'}>
                <a href="#">about us</a>
                <a href="#">about us</a>
                <a href="#">about us</a>
                <a href="#">about us</a>
            </nav>
            <div className="search">
                <input type="text"/>
                <button>search</button>
            </div>
        </div>
    )
}
export default Header