import {createContext, PropsWithChildren, useContext} from "react";

const DependenciesContext = createContext({});

const DEPENDENCIES: any[] = []

export const DependenciesProvider = ({children}: PropsWithChildren) => {
	
	const deps = DEPENDENCIES.reduce((acc, el) => {
		acc[el.KEY] = new el()
		return acc
	}, {})
	
	
	
	return (
		<DependenciesContext.Provider value={deps}>
			{children}
		</DependenciesContext.Provider>
	)
}

export const useDeps = () => {
	const deps = useContext(DependenciesContext)
	
	if (!deps) {
		throw new Error("useDeps must be used within a DependenciesProvider")
	}
	
	return {...deps}
}

