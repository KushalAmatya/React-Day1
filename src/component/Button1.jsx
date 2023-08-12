//label type

function Button1({label,type}){
    return(
        <button type={type || 'button'}>{label || "Button"}</button>
    )
}
export default Button1;