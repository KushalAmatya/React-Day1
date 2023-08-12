import '../assets/css/button.css';
function Button({dis,label,className}){
    return(
        <>
            
            <button disabled={dis} className={dis ? 'button1':'button2'}>{label || 'Button'}</button>
        </>
    )
}
export default Button;