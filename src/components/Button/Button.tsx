import style from "./Button.module.css"

type ButtonProps = {
    position: string,
    title: string,
}

export const Button=({position, title}:ButtonProps)=>{
    return(
        <>
            {position === 'header' &&
                <button className={`${style.header_button}`}>
                    {title}
                </button>
                }
            {position === 'intro' &&
                <button className={`${style.intro_button}`}>
                    {title}
                </button>
            }
            {position === 'card' &&
                <button className={`${style.card_button}`}>
                    {title}
                </button>
            }
        </>
    )
}