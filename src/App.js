import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Header from "./Header/Header";
import HomePage from "./HomePage";
import Page from "./page/Page";

const App = () =>{
    return(
        <div className={'container'}>
            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>} />
                    <Route path='/page/:id' element={<Page/>} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
