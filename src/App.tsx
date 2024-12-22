import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Introdaction} from "./components/Introduction/Introdaction";
import {Cards} from "./components/Cards/Cards";
import {Adverstment} from "./components/Adverstment/Adverstment";

function App() {
    return (
        <>
            <Header/>
            <Introdaction/>
            <Cards/>
            <Adverstment/>
        </>
    );
}

export default App;
