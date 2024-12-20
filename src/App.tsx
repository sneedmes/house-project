import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Introdaction} from "./components/Introduction/Introdaction";
import {Cards} from "./components/Cards/Cards";

function App() {
    return (
        <>
            <Header/>
            <Introdaction/>
            <Cards/>
        </>
    );
}

export default App;
