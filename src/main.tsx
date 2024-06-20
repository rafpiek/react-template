import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {AppRouter} from 'router/Router.tsx'
import {AuthProvider} from "app/identity/auth/AuthProvider.tsx";
import {DependenciesProvider} from "infra/DependencyContainer.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<DependenciesProvider>
			<AuthProvider>
				<AppRouter/>
			</AuthProvider>
		</DependenciesProvider>
	</React.StrictMode>,
)
