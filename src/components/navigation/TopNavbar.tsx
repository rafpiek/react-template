import {PropsWithChildren} from "react";
import {NavLink} from "react-router-dom";
import {useAuth} from "app/identity/auth/AuthProvider.tsx";

export const TopNavbar = () => {
	const {
		isLoggedIn,
		logout,
		user
	} = useAuth()
	
	return (
		<nav className="flex flex-row gap-4">
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
