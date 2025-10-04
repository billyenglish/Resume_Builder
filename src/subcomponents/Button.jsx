const Button = ({
    buttonText = "Button",
    fontSize = "1rem",
    fontWeight = "400",
    padding = ".25rem",
    height = "2rem",
    width = "3.5rem",
    letterSpacing = ".1rem",
    id,
    onClick,
}) => {

    const buttonStyle = {
        fontSize,
        fontWeight,
        padding,
        height,
        width,
        letterSpacing,
    }

    return (
        <>
            <button
                style={buttonStyle}
                id={id}
                onClick={onClick}
            >
                {buttonText}
            </button>
        </>
    );
};

export default Button;