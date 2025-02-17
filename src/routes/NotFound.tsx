import { NavLink } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="w-full h-full flex flex-col items-center justify-center gap-y-2">
            <h1 className="text-9xl font-medium text-gray-800">
                404
            </h1>
            <h2 className="text-3xl font-medium text-gray-800">
                Page not found
            </h2>
            <p className="text-xl text-gray-500 font-medium">
                Sorry, the page you're looking for cannot be found.
            </p>
            <NavLink
                to="/"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-500 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none mt-2.5"
            >
                {'Go back to home'}
            </NavLink>
        </div>
    );
}

export default NotFound;