const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?:
    | "default"
    | "primary"
    | "info"
    | "success"
    | "warning"
    | "danger"
    | "dark";
  size?: "sm" | "md" | "lg";
}> = ({
  children,
  icon,
  iconPosition = "right",
  variant = "default",
  size = "md",
  ...rest
}) => {
  return (
    <button
      className={`btn ${variant} ${size} w-[320px] bg-sky100 rounded-md px-6 py-4 flex justify-between items-center cursor-pointer hover:opacity-90`}
      {...rest}
    >
      {iconPosition === "left" && icon}
      {children}
      {iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
