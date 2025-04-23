import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center py-20 px-4">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-navy mb-6">404</h1>
      <div className="w-16 h-px bg-gold mb-8"></div>
      <h2 className="text-xl md:text-2xl font-serif text-navy mb-4">Page Not Found</h2>
      <p className="text-navy/70 mb-8 text-center max-w-md">
        We apologize, but the page you&apos;re looking for cannot be found.
      </p>
      <Link href="/" className="btn-primary">
        Return to Homepage
      </Link>
    </div>
  );
} 