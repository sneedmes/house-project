import {Button} from "../../Button/Button";
import Box from "@mui/material/Box";
import styles from "./Card.module.css";

export const Card=()=>{
    const cardInfo = [
        {
            img: "cards/france-01.jpg",
            creator: "Марсель Руссо",
            title: "Охота Амура",
            description: "Холст, масло (50х80)",
            price: "14 500"
        },
        {
            img: "cards/france-01.jpg",
            creator: "Марсель Руссо",
            title: "Охота Амура",
            description: "Холст, масло (50х80)",
            price: "14 500"
        },
        {
            img: "cards/france-01.jpg",
            creator: "Марсель Руссо",
            title: "Охота Амура",
            description: "Холст, масло (50х80)",
            price: "14 500"
        },
    ]

    return(
        <>
            {cardInfo.map((info)=>{
                return(
                    <>
                        <Box component="section" className={`${styles.card}`}>
                            <img src={info.img} alt=""/>
                            <Box component="section" className={`${styles.card_info}`}>
                                <p>{info.creator}</p>
                                <h3>{info.title}</h3>
                                <p>{info.description}</p>
                            </Box>
                            <h4>{info.price}</h4>
                            <Button position="card" title="В корзину"/>
                        </Box>
                    </>
                )
            })}
        </>
    )
}