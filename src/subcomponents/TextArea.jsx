const TextArea = ({ id, placeholder = "Name" }) => {

    const textAreaStyle = {
        height: "18rem"
    }
    
    return (
        <textarea
            id={id}
            placeholder={placeholder}
            style={textAreaStyle}
        >
        </textarea>
    );
};

export default TextArea;