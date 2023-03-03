const Input = ({
  className,
  children,
  name,
}: {
  className?: string;
  children: string;
  name: string;
}) => {
  return (
    <div className={`child:block child:w-full ${className}`}>
      <label className="font-bold" htmlFor={name}>
        {children}
      </label>
      <input
        id={name}
        name={name}
        className="border px-12 py-2 bg-gray-50"
      ></input>
    </div>
  );
};

export default Input;
