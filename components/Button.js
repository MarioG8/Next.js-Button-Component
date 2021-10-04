import "../styles/Button.module.css";

function Button({ children, type, onClick, buttonStyle, buttonSize }) {
  return (
    <button onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
