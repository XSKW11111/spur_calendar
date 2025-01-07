const IconChevronLeft = ({size, color}: {size: number, color: string}): React.ReactElement => {
    return (
        <div style={{fontSize: size, color: color}}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 12L6 8L10 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
}

export default IconChevronLeft;