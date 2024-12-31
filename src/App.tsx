import './App.css';
import {Header} from "./components/Header/Header";
import {Introdaction} from "./components/Introduction/Introdaction";
import {Cards} from "./components/Cards/Cards";
import {Promo} from "./components/Promo/Promo";
import {Team} from "./components/Team/Team";
import {Footer} from "./components/Footer/Footer";
import {useState} from "react";
import {News} from "./components/News/News";

function App() {
    document.title="Ink. House"
    const [tab, setTab] = useState('reproduction')
    return (
        <>
            <Header active={tab} onClick={setTab}/>
            {tab === 'reproduction' &&
                <>
                    <Introdaction/>
                    <Cards/>
                    <Promo/>
                    <Team/>
                </>
            }
            {tab === 'news' &&
                <>
                    <News/>
                </>
            }
            <Footer/>
        </>
    );
}

export default App;
