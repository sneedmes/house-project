import './App.css';
import {Header} from "./components/Header/Header";
import {Introdaction} from "./components/Introduction/Introdaction";
import {Cards} from "./components/Cards/Cards";
import {Promo} from "./components/Promo/Promo";
import {Team} from "./components/Team/Team";
import {Footer} from "./components/Footer/Footer";

function App() {
    document.title="Ink. House"
    return (
        <>
            <Header/>
            <Introdaction/>
            <Cards/>
            <Promo/>
            <Team/>
            <Footer/>
        </>
    );
}

export default App;
