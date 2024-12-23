import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "../Button/Button";
import styles from "./Promo.module.css";

export const Promo=()=>{
    return(
        <>
            <Container disableGutters className={`${styles.promo}`}>

                <Box component="section" className={`${styles.promo_container}`}>
                    <Box component="section" className={`${styles.promo_title}`}>
                    <img src="logo-02.png" alt="icon"/>
                    <h2>Новая коллекция французских авторов</h2>
                    </Box>

                    <Box component="section" className={`${styles.promo_text}`}>
                        <p>Сложно сказать, почему акционеры крупнейших компаний призывают нас к новым свершениям,
                            которые, в свою очередь, должны быть заблокированы в рамках своих собственных рациональных
                            ограничений.</p>
                        <p>Принимая во внимание показатели успешности, граница обучения кадров предопределяет высокую
                            востребованность направлений прогрессивного развития.</p>
                    </Box>

                    <Box component="section" className={`${styles.promo_button}`}>
                        <Button position="promo" title="Ознакомиться" onClick={() => null} isActive={false}/>
                    </Box>
                </Box>

            </Container>
        </>
    )
}