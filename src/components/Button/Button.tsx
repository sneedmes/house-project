import style from "./Button.module.css"

type ButtonProps = {
    position: string,
    title: string,
    onClick: ()=>void,
    isActive: boolean
}

export const Button=({position, title, onClick, isActive}:ButtonProps)=>{
    return(
        <>
            {position === 'header' &&
                <button
                    onClick={onClick}
                    className={`${style.header_button}`}>
                    {title}
                </button>
                }
            {position === 'intro' &&
                <button
                    onClick={onClick}
                    className={`${style.intro_button}`}>
                    {title}
                </button>
            }
            {position === 'cards' &&
                <button
                    onClick={onClick}
                    className={isActive ? `${style.cards_button_active}` : `${style.cards_button}`}>
                    {title}
                </button>
            }
            {position === 'card' &&
                <button
                    onClick={onClick}
                    className={`${style.card_button}`}>
                    {title}
                </button>
            }
            {position === 'ad' &&
                <button
                    onClick={onClick}
                    className={`${style.ad_button}`}>
                    {title}
                </button>
            }
        </>
    )
}