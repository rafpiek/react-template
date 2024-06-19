import { PropsWithChildren } from "react";
import { NavLink } from "react-router-dom";

export const TopNavbar = () => {
  return (
    <nav className="flex flex-row gap-4">
      <NavigationLink to="/">Home</NavigationLink>
      <NavigationLink to="/about">About</NavigationLink>
    </nav>
  );
};

interface NavigationLinkProps extends PropsWithChildren {
  to: string;
}

const NavigationLink = ({ to, children }: NavigationLinkProps) => {
  return <NavLink 
  className={({ isActive }) => {
    return [
      isActive ? "text-sky-500 underline font-bold" : ""
    ].join(" ")
  }}
  to={to}>{children}</NavLink>;
};
