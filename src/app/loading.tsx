export default function Loading() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-white">
            <div className="flex flex-col items-center gap-5">
                <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>

                <h2 className="text-2xl font-bold text-slate-900">
                    Abdur Rahim
                </h2>

                <p className="text-slate-500">
                    Loading Portfolio...
                </p>
            </div>
        </main>
    );
}