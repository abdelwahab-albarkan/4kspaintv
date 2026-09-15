import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, Clock, User, ArrowLeft, HelpCircle } from 'lucide-react';
import Cta from '@/components/sections/Cta';
import JsonLd from '@/components/common/JsonLd';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import MarkdownPreview from '@/components/common/MarkdownPreview';
import RelatedLinks from '@/components/common/RelatedLinks';
import { getAllPosts, getPostBySlug } from '@/lib/content/posts';
import {
  getArticleSchema,
  getBreadcrumbSchema,
} from '@/lib/structured-data';

// Only pre-generated static parameters allowed
export const dynamicParams = false;

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: 'Artículo no encontrado | 4K Spain TV',
    };
  }

  return {
    title: post.seoTitle || post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: post.seoTitle || post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt || post.publishedAt,
      authors: [post.author.name],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.publishedAt).toLocaleDateString('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const articleSchema = getArticleSchema(post);
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Blog', item: '/blog' },
    { name: post.title, item: `/blog/${post.slug}` },
  ]);

  // Inject Article, FAQ (if present), and Breadcrumb schemas
  const schemas: Record<string, unknown>[] = [articleSchema, breadcrumbSchema];
  if (post.faqs && post.faqs.length > 0) {
    schemas.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: post.faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: f.answer,
        },
      })),
    });
  }

  const relatedLinks = [
    { label: 'Guía de instalación paso a paso', href: '/instalar-iptv' },
    { label: 'IPTV en Amazon Firestick', href: '/iptv-fire-tv-stick' },
    { label: 'Comprar suscripción IPTV', href: '/comprar-iptv' },
    { label: 'Ver todos los artículos del blog', href: '/blog' },
  ];

  return (
    <>
      <JsonLd data={schemas} />
      <main className="mx-auto max-w-4xl px-6 pt-8">
        <Breadcrumbs
          items={[
            { label: 'Blog', href: '/blog' },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        {/* Back Link */}
        <div className="mt-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 hover:text-emerald-300 transition-colors"
          >
            <ArrowLeft size={14} /> Volver a todas las guías
          </Link>
        </div>

        {/* Header (Single H1 for article) */}
        <header className="py-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-gray-400">
            <span className="rounded-full bg-emerald-950/80 border border-emerald-500/30 px-3 py-1 font-semibold text-emerald-400">
              {post.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} /> {post.readingTime}
            </span>
            <span className="flex items-center gap-1">
              <Calendar size={14} /> {formattedDate}
            </span>
          </div>

          <h1 className="mt-4 font-display text-3xl font-extrabold text-white md:text-5xl leading-tight">
            {post.title}
          </h1>

          <p className="mt-4 text-lg text-gray-300 leading-relaxed font-normal">
            {post.description}
          </p>

          {/* Author Card */}
          <div className="mt-6 flex items-center gap-3 border-y border-border-subtle/50 py-4 text-xs text-gray-400">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-950/60 text-emerald-400 font-bold border border-emerald-500/30">
              <User size={16} />
            </div>
            <div>
              <p className="font-semibold text-white">{post.author.name}</p>
              {post.author.role && <p className="text-gray-400">{post.author.role}</p>}
            </div>
          </div>
        </header>

        {/* Cover image */}
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl border border-border-subtle bg-surface-card">
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
        </div>

        {/* Article Body rendered via Server Component MarkdownPreview */}
        <section className="py-6">
          <MarkdownPreview content={post.content} />
        </section>

        {/* Post Specific FAQs if available */}
        {post.faqs && post.faqs.length > 0 && (
          <section className="my-12 border-t border-border-subtle pt-8">
            <h2 className="text-2xl font-bold text-white mb-6">Preguntas frecuentes sobre este artículo</h2>
            <div className="space-y-4">
              {post.faqs.map((faq) => (
                <div key={faq.question} className="rounded-xl border border-border-subtle bg-surface-card p-5">
                  <h3 className="text-base font-semibold text-white flex items-center gap-2">
                    <HelpCircle size={18} className="text-emerald-400 shrink-0" />
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-sm text-gray-300 pl-6 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <Cta />
      <RelatedLinks links={relatedLinks} title="Artículos y guías relacionadas" />
    </>
  );
}
