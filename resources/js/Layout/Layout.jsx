import { Link } from "@inertiajs/react";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <Link
                                href="/"
                                className="text-xl font-semibold text-gray-900"
                            >
                                Orders Management
                            </Link>
                        </div>
                        <nav className="hidden sm:flex space-x-8">
                            <Link
                                href="/orders"
                                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                Orders
                            </Link>
                            <Link
                                href="/customers"
                                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                Customers
                            </Link>
                            <Link
                                href="/about"
                                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
                            >
                                About
                            </Link>
                        </nav>
                        <div className="flex items-center space-x-4">
                            <button className="p-2 text-gray-400 hover:text-gray-600">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                    />
                                </svg>
                            </button>
                            <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-sm font-medium">
                                U
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
                {children}
            </main>

            <footer className="bg-white border-t border-gray-200 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <p className="text-center text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Orders Management. All
                        rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    );
}
