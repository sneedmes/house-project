import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "../Button/Button";
import styles from "./Adverstment.module.css";

export const Adverstment=()=>{
    return(
        <>
            <Container disableGutters className={`${styles.ad}`}>

                <Box component="section" className={`${styles.ad_title}`}>
                    <img src="logo-02.png" alt="icon"/>
                    <h2>Новая коллекция французских авторов</h2>
                </Box>

                <Box component="section" className={`${styles.ad_text}`}>
                    <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям, которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных ограничений.</p>
                    <p>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую востребованность направлений прогрессивного развития.</p>
                </Box>

                <Box component="section" className={`${styles.ad_button}`}>
                    <Button position="ad" title="Ознакомиться" onClick={()=>null} isActive={false}/>
                </Box>

            </Container>
        </>
    )
}