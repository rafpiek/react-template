import {Link} from "react-router-dom";

export const NotFoundPage = () => {
	return (
		<div className="max-w-7xl mx-auto p-4 flex flex-col gap-4 items-center justify-center">
			<h1>404 Not Found</h1>
			<button>
				<Link to="/">Go Home</Link>
			</button>
		</div>
	)
}
