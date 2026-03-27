import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-foreground px-4">
      <h2 className="text-6xl font-bold text-accent mb-4">404</h2>
      <p className="text-xl text-muted/80 mb-8 text-center max-w-md">
        Could not find the page you are looking for. It might have moved or doesn&apos;t exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-accent text-background rounded-lg font-medium hover:bg-accent/90 transition-colors"
      >
        Return Home
      </Link>
    </div>
  );
}
