import Link from "next/link";

const Button = ({ path = "/", text = "Click Here", type = "primary", target }) => {
  const baseStyles = "rounded-full pl-4 pr-14 text-white py-2 bg-contain bg-right bg-no-repeat";
  const typeStyles = {
    primary: `bg-primary bg-[url('/images/arrow-white.svg')]`,
    secondary: `bg-secondary bg-[url('/images/arrow.svg')]`,
  };

  return (
    <Link 
      href={path} 
      className={`${baseStyles} ${typeStyles[type]}`}
      target={target === "blank" ? "_blank" : "_self"}
      rel={target === "blank" ? "noopener noreferrer" : undefined}
    >
      {text}
    </Link>
  );
};

export default Button;
