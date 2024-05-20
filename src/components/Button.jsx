export default function Button({ custom = '', variant, children,onClick }) {
  const buttonStyles = {
    primary: "bg-red text-white px-6 ts py-2 cursor-pointer active:scale-95 hover:bg-rose-900 rounded-md",
    outline: "border-neutral-900 border-2 text-black px-6 ts py-2  cursor-pointer active:scale-95 rounded-md",
  };

  return <button onClick={onClick} className={`${buttonStyles[variant]} ${custom}`}>{children}</button>;
}