import {Button} from "../Button/Button";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import {ShoppingCartOutlined} from "@mui/icons-material";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <>
            <Container disableGutters className={`${styles.header}`}>

                {/*Start of logo section*/}
                <Box component="section" className={`${styles.logo}`}>
                    <a href="#"><img src="logo.png" alt=""/></a>
                    <a href="#">Ink. House</a>
                </Box>
                {/*End of logo section*/}

                {/*Start of nav section*/}
                <Box component="nav" className={`${styles.nav}`}>
                    <Button position={"header"} title={"Репродукции"} onClick={()=>null} isActive={false}/>
                    <Button position={"header"} title={"Новинки"} onClick={()=>null} isActive={false}/>
                    <Button position={"header"} title={"О нас"} onClick={()=>null} isActive={false}/>
                    <ShoppingCartOutlined/>
                </Box>
                {/*End of nav section*/}

            </Container>
        </>
    )
}