import type { ReactNode } from 'react';

interface LegalPageProps {
  title: string;
  intro: string;
  /** Optional "last reviewed" label shown under the intro. */
  updated?: string;
  /**
   * Factual body content. When provided, the generic "pending" placeholder is
   * replaced by this content plus an honest informational disclaimer. When
   * omitted, the placeholder notice is shown (page still awaiting real text).
   */
  children?: ReactNode;
}

/**
 * Shared shell for legal / policy pages.
 *
 * Pages pass `children` with content that is FACTUALLY supported by how the
 * site actually works. Details that depend on the owner's legal/business
 * identity (company name, address, tax id, jurisdiction, formal clauses) are
 * intentionally left to be completed — the closing notice makes clear this is
 * informational, not a professionally reviewed legal document.
 */
export default function LegalPage({ title, intro, updated, children }: LegalPageProps) {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-3xl font-extrabold text-white md:text-4xl">{title}</h1>
      <p className="mt-4 text-gray-400">{intro}</p>
      {updated && <p className="mt-2 text-xs text-gray-500">{updated}</p>}

      {children ? (
        <>
          <div className="mt-8 space-y-3 text-sm leading-relaxed text-gray-300 [&_h2]:mt-8 [&_h2]:text-base [&_h2]:font-semibold [&_h2]:text-white [&_ul]:list-disc [&_ul]:space-y-1 [&_ul]:pl-5 [&_a]:text-cyan [&_a:hover]:underline">
            {children}
          </div>
          <p className="mt-10 rounded-xl border border-dashed border-border-subtle bg-surface-card p-4 text-xs leading-relaxed text-gray-400">
            Esta página describe, a título informativo, el funcionamiento actual del sitio y del
            servicio. No constituye asesoramiento legal. Los datos identificativos del titular (razón
            social, domicilio y NIF/CIF), la jurisdicción aplicable y las cláusulas legales formales
            deben completarse con la información real del titular y, cuando proceda, revisarse por un
            profesional antes de considerarse definitivos.
          </p>
        </>
      ) : (
        <div className="mt-8 rounded-xl border border-dashed border-border-subtle bg-surface-card p-5 text-sm text-gray-400">
          Contenido pendiente de redacción legal. Esta página es una plantilla y debe completarse con
          el texto definitivo antes de la publicación.
        </div>
      )}
    </section>
  );
}
