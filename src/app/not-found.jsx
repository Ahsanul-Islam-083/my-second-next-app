import Link from "next/link";


const NotFound = () => {
    return (
        <div>
            <div className="min-h-screen flex flex-col items-center justify-center text-center gap-4">
                <h1 className="text-9xl font-bold text-primary">404</h1>
                <h2 className="text-3xl font-semibold">Page Not Found</h2>
                <p className="text-gray-500 max-w-md">
                    Oops! The page you're looking for doesn't exist or has been moved.
                </p>
                <Link href="/" className="btn btn-primary mt-4">
                    Go Back Home
                </Link>
            </div>
        </div>
    );
};

export default NotFound;