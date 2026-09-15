import { FEATURES } from '@/lib/content';

export default function Features() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
          Por qué elegir 4K Spain TV
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Una experiencia de streaming pensada para durar: calidad, estabilidad y soporte real.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="rounded-xl border border-border-subtle bg-surface-card p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-900/40 text-primary-500">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
