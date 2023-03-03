const Button = ({
  className,
  children,
  type = "primary",
}: {
  className?: string;
  children: any;
  type?: "primary" | "secondary";
}) => {
  let classes = `border py-2 px-12 ${className} hover:`;

  if (type === "primary") {
    classes += " text-white bg-black";
  }

  return <button className={classes}>{children}</button>;
};

export default Button;
