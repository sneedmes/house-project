import {Button} from "../Button/Button";
import Box from "@mui/material/Box"
import Container from "@mui/material/Container";
import {ShoppingCartOutlined} from "@mui/icons-material";
import styles from "./Header.module.css"

type HeaderProps = {
    active: string,
    onClick: (tab: string) => void
}

export const Header = ({active, onClick}:HeaderProps) => {
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
                    <Button position={"header"} title={"Репродукции"} onClick={()=>onClick('reproduction')} isActive={active === 'reproduction'}/>
                    <Button position={"header"} title={"Новинки"} onClick={()=>onClick('news')} isActive={active === 'news'}/>
                    <Button position={"header"} title={"О нас"} onClick={()=>onClick('about')} isActive={active === 'about'}/>
                    <ShoppingCartOutlined/>
                </Box>
                {/*End of nav section*/}

            </Container>
        </>
    )
}