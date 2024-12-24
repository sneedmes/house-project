import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import {Button} from "../Button/Button";
import styles from "./Cards.module.css";
import {Card} from "./Card/Card";

export const Cards=()=>{
    const [tab, setTab] = useState('france')
    const handleClick=(tab: string)=>{
        setTab(tab)
    }
    return(
        <>
            <Container disableGutters className={`${styles.cards}`}>

                <Box component="section" className={`${styles.cards_title}`}>
                    <Box component="section" className={`${styles.cards_name}`}>
                        <h2>Репродукции</h2>
                    </Box>
                    <Box component="section" className={`${styles.cards_buttons}`}>
                        <Button position="cards" title="Франция" onClick={()=>handleClick('france')} isActive={tab === "france"}/>
                        <Button position="cards" title="Германия" onClick={()=>handleClick('german')} isActive={tab === "german"}/>
                        <Button position="cards" title="Англия" onClick={()=>handleClick('england')} isActive={tab === "england"}/>
                    </Box>
                </Box>

                <Box component="section" className={`${styles.cards_main}`}>
                    {tab === "france" && <Card section="france"/>}
                    {tab === "german" && <Card section="german"/>}
                    {tab === "england" && <Card section="england"/>}
                </Box>

            </Container>
        </>
    )
}