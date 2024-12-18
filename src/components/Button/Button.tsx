type ButtonProps = {
    position: string,
    title: string,
}

export const Button=({position, title}:ButtonProps)=>{
    return(
        <>
            {position === 'header' &&
                <button>
                    {title}
                </button>
                }
        </>
    )
}