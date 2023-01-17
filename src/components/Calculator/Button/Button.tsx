import { clsx } from "clsx";

interface ButtonProps {
  color: "dark-900" | "dark" | "dark-light" | "gray";
  label: string | JSX.Element;
}
const Button = ({ color, label }: ButtonProps) => {
  const classes = clsx("w-100 h-16 flex justify-center items-center", {
    "bg-gray-dark": color === "dark",
    "bg-gray-dark-light": color === "dark-light",
    "bg-gray-dark-900": color === "dark-900",
    "bg-gray": color === "gray",
  });

  return <button className={classes}>{label}</button>;
};

export default Button;
