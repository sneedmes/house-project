import {Button} from "../../Button/Button";
import Box from "@mui/material/Box";
import styles from "./Card.module.css";

type CardType = {
    section: string
}

export const Card=({section}:CardType)=>{
    const france = [
        {
            img: "cards/france-01.jpg",
            creator: "Марсель Руссо",
            title: "Охота Амура",
            description: "Холст, масло (50х80)",
            price: "14 500 руб"
        },
        {
            img: "cards/france-02.jpg",
            creator: "Анри Селин",
            title: "Дама с собачкой",
            description: "Акрил, бумага (50х80)",
            price: "16 500 руб"
        },
        {
            img: "cards/france-03.jpg",
            creator: "Франсуа Дюпон",
            title: "Процедура",
            description: "Цветная литография (40х60) ",
            price: "20 000 руб"
        },

        {
            img: "cards/france-04.jpg",
            creator: "Луи Детуш",
            title: "Роза",
            description: "Бумага, акрил (50х80)",
            price: "12 000 руб"
        },
        {
            img: "cards/france-05.jpg",
            creator: "Франсуа Дюпон",
            title: "Птичья трапеза",
            description: "Цветная литография (40х60)",
            price: "22 500 руб"
        },
        {
            img: "cards/france-06.jpg",
            creator: "Пьер Моранж",
            title: "Пейзаж с рыбой",
            description: "Цветная литография (40х60)",
            price: "20 000 руб"
        },
    ]
    const german = [
        {
            img: "cards/german-01.jpg",
            creator: "Курт Вернер",
            title: "Над городом",
            description: "Цветная литография (40х60)",
            price: "16 000 руб"
        },
        {
            img: "cards/german-02.jpg",
            creator: "Макс Рихтер",
            title: "Птенцы",
            description: "Холст, масло (50х80)",
            price: "14 500 руб"
        },
        {
            img: "cards/german-03.jpg",
            creator: "Мартин Майер",
            title: "Среди листьев",
            description: "Цветная литография (40х60)",
            price: "20 000 руб"
        },

        {
            img: "cards/german-04.jpg",
            creator: "Герман Беккер",
            title: "Яркая птица",
            description: "Цветная литография (40х60)",
            price: "13 000 руб"
        },
        {
            img: "cards/german-05.jpg",
            creator: "Вульф Бауэр",
            title: "Дятлы",
            description: "Бумага, акрил (50х80)",
            price: "20 000 руб"
        },
        {
            img: "cards/german-06.jpg",
            creator: "Вальтер Хартманн",
            title: "Большие воды",
            description: "Бумага, акрил (50х80)",
            price: "23 000 руб"
        },
    ]
    const england = [
        {
            img: "cards/england-01.jpg",
            creator: "Пол Смит",
            title: "Дикий зверь",
            description: "Акварель, бумага (50х80)",
            price: "19 500 руб"
        },
        {
            img: "cards/england-02.jpg",
            creator: "Джон Уайт",
            title: "Скалистый берег",
            description: "Цветная литография (40х60)",
            price: "17 500 руб"
        },
        {
            img: "cards/england-03.jpg",
            creator: "Джим Уотсон",
            title: "Река и горы",
            description: "Акварель, бумага (50х80)",
            price: "20 500 руб"
        },

        {
            img: "cards/england-04.jpg",
            creator: "Юджин Зиллион",
            title: "Белый попугай",
            description: "Цветная литография (40х60)",
            price: "15 500 руб"
        },
        {
            img: "cards/england-05.jpg",
            creator: "Эрик Гиллман",
            title: "Ночная рыба",
            description: "Бумага, акрил (50х80)",
            price: "12 500 руб"
        },
        {
            img: "cards/england-06.jpg",
            creator: "Альфред Барр",
            title: "Рыжий кот",
            description: "Цветная литография (40х60)",
            price: "21 000 руб"
        },
    ]
    return(
        <>
            {section === "france" && france.map((info)=>{
                return(
                    <>
                        <Box component="section" className={`${styles.card}`}>
                            <img src={info.img} alt=""/>
                            <Box component="section" className={`${styles.card_info}`}>
                                <p className={`${styles.card_creator}`}>{info.creator}</p>
                                <h3>{info.title}</h3>
                                <p className={`${styles.card_description}`}>{info.description}</p>
                            </Box>
                            <h4>{info.price}</h4>
                            <Button position="card" title="В корзину" onClick={()=>null} isActive={false}/>
                        </Box>
                    </>
                )
            })}

            {section === "german" && german.map((info)=>{
                return(
                    <>
                        <Box component="section" className={`${styles.card}`}>
                            <img src={info.img} alt=""/>
                            <Box component="section" className={`${styles.card_info}`}>
                                <p className={`${styles.card_creator}`}>{info.creator}</p>
                                <h3>{info.title}</h3>
                                <p className={`${styles.card_description}`}>{info.description}</p>
                            </Box>
                            <h4>{info.price}</h4>
                            <Button position="card" title="В корзину" onClick={()=>null} isActive={false}/>
                        </Box>
                    </>
                )
            })}

            {section === "england" && england.map((info)=>{
                return(
                    <>
                        <Box component="section" className={`${styles.card}`}>
                            <img src={info.img} alt=""/>
                            <Box component="section" className={`${styles.card_info}`}>
                                <p className={`${styles.card_creator}`}>{info.creator}</p>
                                <h3>{info.title}</h3>
                                <p className={`${styles.card_description}`}>{info.description}</p>
                            </Box>
                            <h4>{info.price}</h4>
                            <Button position="card" title="В корзину" onClick={()=>null} isActive={false}/>
                        </Box>
                    </>
                )
            })}
        </>
    )
}