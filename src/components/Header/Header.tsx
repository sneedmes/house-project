import {Button} from "../Button/Button";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import {ShoppingCartOutlined} from "@mui/icons-material";
import style from "./Header.module.css"

export const Header = () => {
    return (
        <>
            <Container disableGutters className={`${style.header}`}>

                {/*Start of logo section*/}
                <Box component="section" className={`${style.logo}`}>
                    <img src="logo.png" alt=""/>
                    <h1>Ink. House</h1>
                </Box>
                {/*End of logo section*/}

                {/*Start of nav section*/}
                <Box component="nav" className={`${style.nav}`}>
                    <Button position={"header"} title={"Репродукции"}/>
                    <Button position={"header"} title={"Новинки"}/>
                    <Button position={"header"} title={"О нас"}/>
                    <ShoppingCartOutlined/>
                </Box>
                {/*End of nav section*/}

            </Container>
        </>
    )
}