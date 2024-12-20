import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "../Button/Button";
import styles from "./Cards.module.css";
import {Card} from "./Card/Card";

export const Cards=()=>{
    return(
        <>
            <Container disableGutters className={`${styles.cards}`}>

                <Box component="section" className={`${styles.cards_title}`}>
                    <h2>Репродукции</h2>
                    <Button position="cards" title="Франция"/>
                    <Button position="cards" title="Германия"/>
                    <Button position="cards" title="Англия"/>
                </Box>

                <Box component="section" className={`${styles.cards_main}`}>
                    <Card/>
                </Box>

            </Container>
        </>
    )
}