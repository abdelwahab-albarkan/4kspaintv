'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/lib/content';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
          Preguntas frecuentes
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Todo lo que necesitas saber antes de empezar.
        </p>
      </div>

      <div className="mt-12 space-y-3">
        {FAQ_ITEMS.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={item.question} className="rounded-xl border border-border-subtle bg-surface-card">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                aria-expanded={isOpen}
              >
                <span className="font-medium text-white">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-primary-500 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
              </button>
              {isOpen && <p className="px-5 pb-5 text-sm text-gray-400">{item.answer}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
}
