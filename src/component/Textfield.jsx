//value id classname type

export default function Textfield({value,id,className,type}){
    return(
        <input type={type || 'text'} id={id || ''} className={className || 'if'} value={value || ""} />
    )
}