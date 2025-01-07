const IconClock = ({size, color}: {size: number, color: string}) => {
    return (
        <div style={{fontSize: size, color}}>
        <svg width="1em" height="1em" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_1_1270)">
            <path d="M6.71429 3V6H8.96429M11.7143 6C11.7143 8.76142 9.47572 11 6.71429 11C3.95287 11 1.71429 8.76142 1.71429 6C1.71429 3.23858 3.95287 1 6.71429 1C9.47572 1 11.7143 3.23858 11.7143 6Z" stroke="currentColor" strokeWidth="0.9975" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_1_1270">
<rect width="12" height="12" fill="currentColor" transform="translate(0.714294)"/>
</clipPath>
</defs>
</svg>
</div>
    );
}
export default IconClock;