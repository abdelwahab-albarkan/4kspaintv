import React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import JsonLd from './JsonLd';
import { getBreadcrumbSchema, type BreadcrumbItem } from '@/lib/structured-data';

export interface BreadcrumbLink {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbLink[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems: BreadcrumbLink[] = [{ label: 'Inicio', href: '/' }, ...items];

  const schemaItems: BreadcrumbItem[] = allItems.map((item) => ({
    name: item.label,
    item: item.href,
  }));

  const schemaData = getBreadcrumbSchema(schemaItems);

  return (
    <>
      <JsonLd data={schemaData} />
      <nav aria-label="Breadcrumb" className="my-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm text-gray-400">
          {allItems.map((item, index) => {
            const isLast = index === allItems.length - 1;
            return (
              <li key={item.href} className="inline-flex items-center gap-2">
                {index > 0 && <ChevronRight className="h-4 w-4 shrink-0 text-gray-600" aria-hidden="true" />}
                {isLast ? (
                  <span className="font-medium text-white" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="inline-flex items-center gap-1 hover:text-emerald-400 transition-colors"
                  >
                    {index === 0 && <Home className="h-3.5 w-3.5" aria-hidden="true" />}
                    <span>{item.label}</span>
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
