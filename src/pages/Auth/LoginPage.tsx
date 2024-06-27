import {MainLayout} from "pages/layout/MainLayout.tsx";
import {useAuth} from "app/identity/auth/AuthProvider.tsx";
import {LoginForm} from "pages/Auth/LoginForm.tsx";

export const LoginPage = () => {
	const {
		isLoggedIn,
		logout,
		user
	} = useAuth()
	
	return (
		<MainLayout>
			<div className="flex flex-col gap-4 w-full items-center justify-center h-4/5">
				{isLoggedIn ? (
					<>
						<button onClick={logout}>Logout</button>
						<h3>Logged in as user {user.email}</h3>
					</>
				) : (
					<>
						<LoginForm />
					</>
				)}
			</div>
		</MainLayout>
	)
}
