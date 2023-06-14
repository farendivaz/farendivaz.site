import Link from "next/link";

export default function notFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold mb-2">404</h1>
      <p className="text-2xl">Page Not Found</p>
      <Link
        href="/"
        className="border p-1 border-black/90 dark:border-black/90"
      >
        ← Back to home
      </Link>
    </div>
  );
}
