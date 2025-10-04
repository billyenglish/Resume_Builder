const InputText = ({
    type = 'text',
    height = "2.5rem",
    width = "22rem",
    placeholder,
    id
}) => {

    const inputStyle = {
        height,
        width
    }

    return (
        <input
            type={type}
            placeholder={placeholder}
            style={inputStyle}
            id={id}
        />
    );
};

export default InputText;