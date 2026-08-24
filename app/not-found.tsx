import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-content flex-col items-start justify-center px-6">
      <p className="font-mono text-sm text-accent">404</p>
      <h1 className="mt-4 text-2xl font-semibold text-fg">Page not found</h1>
      <p className="mt-3 text-fg-muted">The page you&rsquo;re looking for doesn&rsquo;t exist.</p>
      <Link href="/" className="link-underline mt-6 font-mono text-sm text-fg">
        ← back home
      </Link>
    </main>
  );
}
