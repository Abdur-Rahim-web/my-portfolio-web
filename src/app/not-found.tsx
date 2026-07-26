import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center px-6">
            <div className="text-center">
                <h1 className="text-8xl font-extrabold text-blue-600">
                    404
                </h1>

                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-4 max-w-md text-slate-600">
                    Sorry, the page you are looking for doesn&apos;t exist or has been moved.
                </p>

                <Link
                    href="/"
                    className="mt-8 inline-flex rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
                >
                    Back to Home
                </Link>
            </div>
        </main>
    );
}