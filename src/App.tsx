import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Introdaction} from "./components/Introduction/Introdaction";
import {Cards} from "./components/Cards/Cards";
import {Promo} from "./components/Promo/Promo";
import {Team} from "./components/Team/Team";

function App() {
    return (
        <>
            <Header/>
            <Introdaction/>
            <Cards/>
            <Promo/>
            <Team/>
        </>
    );
}

export default App;
