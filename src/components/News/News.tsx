import styles from "./News.module.css";
import Box from "@mui/material/Box";
import {Button} from "../Button/Button";
import Container from "@mui/material/Container";

export const News=()=>{
    return(
        <>
            <Container disableGutters className={`${styles.news}`}>

                <Box component="section" className={`${styles.news_img}`}>
                    <img src="intro/news_img.png" alt=""/>
                </Box>

                <Box component="section" className={`${styles.news_info}`}>
                    <h1>Новые картины <a href="#">Ink. House</a></h1>
                    <p>Все работы, выполненные за последний год. Качество на высшем уровне</p>
                    <Button position="intro" title="Перейти к новинкам" onClick={()=>null} isActive={false}/>
                </Box>

            </Container>
        </>
    )
}