import {MainLayout} from "pages/layout/MainLayout.tsx";
import {useAuth} from "app/identity/auth/AuthProvider.tsx";

export const LoginPage = () => {
	const {
		isLoggedIn,
		login,
		logout,
		user
	} = useAuth()
	
	return (
		<MainLayout containerClassName="items-center justify-center">
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
		</MainLayout>
	)
}
