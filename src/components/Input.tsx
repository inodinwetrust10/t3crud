interface InputBox {
  type: string;
  placeholder: string;
}
const Input: React.FC<InputBox> = ({ type, placeholder }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered my-5 w-full max-w-xs text-white"
    />
  );
};

export default Input;
