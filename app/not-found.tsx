import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Página no encontrada (404)',
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-6 text-center">
      <p className="text-7xl font-extrabold text-gradient font-display">404</p>
      <h1 className="mt-4 text-2xl font-bold text-white">Esta página no existe</h1>
      <p className="mt-3 text-gray-400">
        Puede que el enlace esté roto o que la página se haya movido.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-primary-500 px-6 py-3 font-semibold text-black hover:bg-primary-600"
      >
        Volver al inicio
      </Link>
    </section>
  );
}
