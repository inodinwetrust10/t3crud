interface InputBox {
  name?: string;
  id?: string;
  type: string;
  placeholder: string;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Input: React.FC<InputBox> = ({
  type,
  placeholder,
  name,
  onChange,
  value,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="input input-bordered my-5 w-full max-w-xs text-white"
      name={name}
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
