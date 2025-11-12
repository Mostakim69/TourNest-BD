import clsx from "clsx";

export const Button = ({ children, className, ...props }) => {
  return (
    <button className={clsx("btn", className)} {...props}>
      {children}
    </button>
  );
};
