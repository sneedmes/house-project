import styles from "./Footer.module.css"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {Button} from "../Button/Button"
import React from "react";

export const Footer=()=>{

    return(
        <>
            <Container disableGutters className={`${styles.footer}`}>

                <Box component="section" className={`${styles.footer_container}`}>

                    <Box component="section" className={`${styles.footer_main}`}>

                        <Box component="section" className={`${styles.footer_logo}`}>
                            <a href="#"><img src="logo.png" alt=""/></a>
                            <a href="#">Ink. House</a>
                        </Box>

                        <Box component="section" className={`${styles.footer_phone}`}>
                            <h4>+7 (999) 543-54-54</h4>
                            <p>Мастерская</p>
                        </Box>

                    </Box>

                    <Box component="section" className={`${styles.footer_container_sections}`}>

                        <Box component="section" className={`${styles.footer_sections}`}>

                            <Box component="section" className={`${styles.footer_section}`}>
                                <Button position={"footer"} title={"Репродукции"} onClick={()=>null} isActive={false}/>
                                <p>Франция</p>
                                <p>Германия</p>
                                <p>Англия</p>
                            </Box>

                            <Box component="section" className={`${styles.footer_section}`}>
                                <Button position={"footer"} title={"Новинки"} onClick={()=>null} isActive={false}/>
                                <p>2021</p>
                                <p>2022</p>
                            </Box>

                            <Box component="section" className={`${styles.footer_section}`}>
                                <Button position={"footer"} title={"О нас"} onClick={()=>null} isActive={false}/>
                                <p>Художники</p>
                                <p>Менеджеры</p>
                            </Box>

                        </Box>

                        <Box component="section" className={`${styles.footer_contacts}`}>

                            <Box component="section" className={`${styles.footer_social}`}>
                                <FacebookIcon/>
                                <InstagramIcon/>
                                <YouTubeIcon/>
                            </Box>

                            <Box component="section" className={`${styles.footer_rights}`}>
                                <p>Ink. House ®</p>
                                <p>All rights reserved</p>
                            </Box>

                        </Box>

                    </Box>

                </Box>

            </Container>
        </>
    )
}