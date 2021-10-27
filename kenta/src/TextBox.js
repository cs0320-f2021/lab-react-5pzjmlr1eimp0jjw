const TextBox = (props) => {
    
    return (
        <div>
            <label
                for={props.text}
            >
                {props.text}:
            </label>
            <input
                id={props.text}
                name={props.text}
                type={props.type}
                onChange={props.change}
            >   
            </input>
        </div>
    )
}

export default TextBox
