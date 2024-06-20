import {Subheader} from "pages/Home/Subheader";
import {MainLayout} from "pages/layout/MainLayout";
import {useAuth} from "app/identity/auth/AuthProvider.tsx";

export const HomePage = () => {
	return (
		<MainLayout containerClassName="items-center justify-center">
			<h1 className="text-center">Start your new great project</h1>
			<Subheader/>
			<AuthSection/>
		</MainLayout>
	);
};


const AuthSection = () => {
	const {
		isLoggedIn,
		login,
		logout,
		user
	} = useAuth()
	
	return (
		<div className="flex flex-col gap-4 w-full items-center justify-center">
			{isLoggedIn ? (
				<>
					<button onClick={logout}>Logout</button>
					<h3>Logged in as user {user.email}</h3>
				</>
			) : (
				<>
					<button onClick={login}>Login</button>
				</>
			)}
		</div>
	)
}
