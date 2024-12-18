import {Button} from "../Button/Button";

export const Header = () => {
    return (
        <>
            <header className="header">

                {/*Start of logo section*/}
                <section className="logo">
                    <img src="logo.png" alt=""/>
                    <h1>Ink. House</h1>
                </section>
                {/*End of logo section*/}

                {/*Start of nav section*/}
                <nav className="nav">
                    <Button position={"header"} title={"Репродукции"}/>
                    <Button position={"header"} title={"Новинки"}/>
                    <Button position={"header"} title={"О нас"}/>
                </nav>
                {/*End of logo section*/}

            </header>
        </>
    )
}