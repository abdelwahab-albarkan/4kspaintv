import Link from 'next/link';
import { ArrowRight, Calendar } from 'lucide-react';
import { getBlogPosts } from '@/lib/blog';

export default function LatestBlog() {
  const posts = getBlogPosts().slice(0, 3);

  if (posts.length === 0) return null;

  return (
    <section className="border-t border-border-subtle bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="inline-block rounded-full border border-border-subtle bg-surface px-4 py-1 text-xs font-medium text-emerald-400">
              Blog & Guías IPTV
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-white md:text-4xl">
              Últimas guías y tutoriales
            </h2>
            <p className="mt-2 text-gray-400">
              Aprende a configurar tu suscripción IPTV y descubre las mejores recomendaciones.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            Ver todos los artículos <ArrowRight size={16} />
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => {
            const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            });

            return (
              <article
                key={post.slug}
                className="flex flex-col justify-between rounded-xl border border-border-subtle bg-surface-card p-6 transition-all hover:border-emerald-500/40"
              >
                <div>
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <Calendar size={14} className="text-emerald-400" />
                    <span>{formattedDate}</span>
                  </div>
                  <h3 className="mt-3 text-lg font-semibold text-white hover:text-emerald-400 transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="mt-2 text-sm text-gray-400 line-clamp-3">{post.description}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-border-subtle/50">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300"
                  >
                    Leer guía completa <ArrowRight size={14} />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
