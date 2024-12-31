const IconChevronRight = ({size, color}: {size: number, color: string}) => {
    return (
        <div style={{fontSize: size, color: color}}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="1.33" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    );
}
export default IconChevronRight;