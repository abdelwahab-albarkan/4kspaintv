import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, ArrowRight, User } from 'lucide-react';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import { getAllPosts, getFeaturedPosts } from '@/lib/content/posts';
import { getWebSiteSchema, getBreadcrumbSchema } from '@/lib/structured-data';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Blog 4K Spain TV | Guías, Tutoriales y Noticias IPTV 2026',
  description:
    'Aprende a configurar tu suscripción IPTV en Firestick, Smart TV y Android. Las mejores guías de instalación, trucos de velocidad y noticias de streaming.',
  alternates: { canonical: '/blog' },
  robots: { index: true, follow: true },
};

export default function BlogListingPage() {
  const posts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const webSiteSchema = getWebSiteSchema();
  const breadcrumbSchema = getBreadcrumbSchema([{ name: 'Blog', item: '/blog' }]);

  return (
    <>
      <JsonLd data={[webSiteSchema, breadcrumbSchema]} />
      <main className="mx-auto max-w-6xl px-6 pt-8">
        <Breadcrumbs items={[{ label: 'Blog', href: '/blog' }]} />

        {/* Blog Header (Single H1) */}
        <section className="py-12 text-center md:py-16">
          <span className="inline-block rounded-full border border-border-subtle bg-surface px-4 py-1 text-xs font-medium text-emerald-400">
            El Blog de 4K Spain TV
          </span>
          <h1 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-extrabold text-white md:text-5xl">
            Guías, tutoriales y novedades sobre IPTV y streaming
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Saca el máximo partido a tu suscripción con nuestros tutoriales de configuración en Firestick, Smart TV y dispositivos Android.
          </p>
        </section>

        {/* Featured Articles Section */}
        {featuredPosts.length > 0 && (
          <section className="pb-12">
            <h2 className="text-2xl font-bold text-white mb-6">Artículos destacados</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {featuredPosts.map((post) => {
                const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                });

                return (
                  <article
                    key={post.slug}
                    className="flex flex-col justify-between rounded-2xl border border-emerald-500/40 bg-surface-card p-6 transition-all hover:border-emerald-500 hover:shadow-glow"
                  >
                    <div>
                      <Link href={`/blog/${post.slug}`} className="relative mb-5 block aspect-video w-full overflow-hidden rounded-xl bg-background/40">
                        <Image
                          src={post.coverImage}
                          alt={post.title}
                          fill
                          loading="lazy"
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </Link>
                      <div className="flex items-center justify-between gap-4 text-xs text-gray-400">
                        <span className="rounded-full bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 font-semibold text-emerald-400">
                          {post.category}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="flex items-center gap-1">
                            <Clock size={14} /> {post.readingTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar size={14} /> {formattedDate}
                          </span>
                        </div>
                      </div>

                      <h3 className="mt-4 text-2xl font-bold text-white hover:text-emerald-400 transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h3>
                      <p className="mt-3 text-sm text-gray-300 line-clamp-3 leading-relaxed">
                        {post.description}
                      </p>
                    </div>

                    <div className="mt-8 flex items-center justify-between border-t border-border-subtle/50 pt-4">
                      <div className="flex items-center gap-2 text-xs text-gray-400">
                        <User size={14} className="text-emerald-400" />
                        <span>{post.author.name}</span>
                      </div>
                      <Link
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 hover:text-emerald-300"
                      >
                        Leer artículo <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {/* All Articles Grid */}
        <section className="pb-16 border-t border-border-subtle pt-12">
          <h2 className="text-2xl font-bold text-white mb-6">Todos los artículos</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => {
              const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              });

              return (
                <article
                  key={post.slug}
                  className="flex flex-col justify-between rounded-xl border border-border-subtle bg-surface-card p-6 transition-all hover:border-emerald-500/50"
                >
                  <div>
                    <Link href={`/blog/${post.slug}`} className="relative mb-4 block aspect-video w-full overflow-hidden rounded-lg bg-background/40">
                      <Image
                        src={post.coverImage}
                        alt={post.title}
                        fill
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 360px"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </Link>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span className="rounded bg-surface px-2.5 py-0.5 font-medium text-emerald-400">
                        {post.category}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>

                    <h3 className="mt-4 text-lg font-bold text-white hover:text-emerald-400 transition-colors">
                      <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <p className="mt-2 text-sm text-gray-400 line-clamp-3 leading-relaxed">
                      {post.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-border-subtle/50 pt-4 text-xs">
                    <span className="text-gray-400">{formattedDate}</span>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-1 font-semibold text-emerald-400 hover:text-emerald-300"
                    >
                      Leer más <ArrowRight size={14} />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      <Cta />
    </>
  );
}
