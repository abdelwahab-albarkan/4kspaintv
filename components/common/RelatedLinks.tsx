import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface RelatedLinksProps {
  links: { label: string; href: string }[];
  title?: string;
}

export default function RelatedLinks({
  links,
  title = 'Páginas relacionadas y recursos útiles',
}: RelatedLinksProps) {
  if (!links || links.length === 0) return null;

  return (
    <section className="border-t border-border-subtle bg-surface/30 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-lg font-semibold text-white">{title}</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group flex items-center justify-between rounded-xl border border-border-subtle bg-surface-card p-4 transition-all hover:border-emerald-500/50 hover:bg-surface-hover"
            >
              <span className="text-sm font-medium text-gray-300 group-hover:text-emerald-400 transition-colors">
                {link.label}
              </span>
              <ArrowUpRight
                size={16}
                className="text-gray-500 group-hover:text-emerald-400 transition-colors shrink-0"
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
