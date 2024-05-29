export default function Button({ custom = "", variant, children, onClick }) {
  const buttonStyles = {
    primary:
      "bg-red text-white px-6 ts py-2 cursor-pointer active:scale-95 hover:bg-rose-900 rounded-md",
    second:
      "bg-blue text-white px-6 ts py-2 cursor-pointer active:scale-95 hover:bg-sky-800 rounded-md",
    outline:
      "border-red border-2 text-red px-6 ts py-2  cursor-pointer active:scale-95 rounded-md",
  };

  return (
    <button type="submit" onClick={onClick} className={`${buttonStyles[variant]} ${custom}`}>
      {children}
    </button>
  );
}
