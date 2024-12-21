import Container from "@mui/material/Container";
import styles from "./Introdaction.module.css"
import Box from "@mui/material/Box";
import {Button} from "../Button/Button";

export const Introdaction=()=>{
    return(
        <>
            <Container disableGutters className={`${styles.intro}`}>

                <Box component="section" className={`${styles.intro_img}`}>
                    <img src="intro/intro_img.png" alt=""/>
                </Box>

                <Box component="section" className={`${styles.intro_info}`}>
                    <h1>Реплики картин от <a href="#">Ink. House</a></h1>
                    <p>Высокое качество отрисовки на плотной бумаге или льняном холсте. Редкие произведения, доступные цены.</p>
                    <Button position="intro" title="Продукция" onClick={()=>null} isActive={false}/>
                </Box>

            </Container>
        </>
    )
}