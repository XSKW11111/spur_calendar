const IconCross = ({size, color}: {size?: number, color?: string}): React.ReactElement => {
    return (
        <div style={{fontSize: `${size}px`, color: `${color}`}}>
            <svg width="1em" height="1em" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                 <path d="M13 1L1 13M1 1L13 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </div>
    )
};

export default IconCross;