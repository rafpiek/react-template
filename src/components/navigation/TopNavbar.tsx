import {PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";
import {useAuth} from "app/identity/auth/AuthProvider.tsx";
import {ThemeToggle} from "components/ThemeProvider/ThemeToggle.tsx";

export const TopNavbar = () => {
	const {
		isLoggedIn,
		logout,
		user
	} = useAuth()
	
	return (
		<nav className="flex flex-row gap-4 justify-between">
			<div className="flex flex-row gap-4 items-center">
				<NavigationLink to="/">Home</NavigationLink>
				<NavigationLink to="/about">About</NavigationLink>
				{isLoggedIn ? (
					<>
						<button onClick={logout}>Logout</button>
						<span>
        Logged in as {user.email} {isLoggedIn.toString()}
      </span>
					</>
				) : null}
			</div>
			<ThemeToggle />
		</nav>
	);
};

interface NavigationLinkProps extends PropsWithChildren {
	to: string;
}

const NavigationLink = ({to, children}: NavigationLinkProps) => {
	return <NavLink
		className={({isActive}) => {
			return [
				isActive ? "text-sky-500 underline font-bold" : ""
			].join(" ")
		}}
		to={to}>{children}</NavLink>;
};
