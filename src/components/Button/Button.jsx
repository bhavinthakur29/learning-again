import './Button.css';

const Button = ({ label, visibility, onClick }) => {
    return (
        <button
            className={`custom-button ${visibility}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}

export default Button;