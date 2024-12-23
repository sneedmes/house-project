import styles from "./Team.module.css"
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

export const Team=()=>{
    return(
        <>
            <Container disableGutters className={`${styles.team}`}>

                <Box component="section" className={`${styles.team_container}`}>

                    <Box component="section" className={`${styles.team_img}`}>
                        <img src="team/team_img.png" alt=""/>
                    </Box>

                    <Box component="section" className={`${styles.team_info}`}>
                        <Box component="section" className={`${styles.team_info_text}`}>
                            <h2>Наша команда</h2>
                            <p>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.</p>
                        </Box>
                        <Box component="section" className={`${styles.team_profile}`}>
                            <img src="team/profile-01.png" alt=""/>
                            <img src="team/profile-02.jpg" alt=""/>
                            <img src="team/profile-03.jpg" alt=""/>
                        </Box>
                    </Box>

                </Box>

            </Container>
        </>
    )
}