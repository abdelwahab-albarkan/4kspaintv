import React from 'react';

interface MarkdownPreviewProps {
  content: string;
  className?: string;
}

/** Render inline formatting like bold, italic, inline code, and links. */
function parseInline(text: string): React.ReactNode[] {
  const elements: React.ReactNode[] = [];
  // Tokenize regex for **bold**, `code`, and [text](url)
  const regex = /(\*\*[^*]+\*\*|`[^`]+`|\[[^\]]+\]\([^)]+\))/g;

  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(text.substring(lastIndex, match.index));
    }

    const token = match[0];
    if (token.startsWith('**') && token.endsWith('**')) {
      elements.push(
        <strong key={match.index} className="font-bold text-white">
          {token.slice(2, -2)}
        </strong>
      );
    } else if (token.startsWith('`') && token.endsWith('`')) {
      elements.push(
        <code
          key={match.index}
          className="rounded bg-surface px-1.5 py-0.5 font-mono text-xs text-emerald-400 border border-border-subtle"
        >
          {token.slice(1, -1)}
        </code>
      );
    } else if (token.startsWith('[')) {
      const closingBracket = token.indexOf(']');
      const label = token.slice(1, closingBracket);
      const url = token.slice(closingBracket + 2, -1);
      elements.push(
        <a
          key={match.index}
          href={url}
          className="text-emerald-400 underline underline-offset-4 hover:text-emerald-300"
        >
          {label}
        </a>
      );
    }

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(text.substring(lastIndex));
  }

  return elements;
}

export default function MarkdownPreview({ content, className = '' }: MarkdownPreviewProps) {
  const lines = content.trim().split('\n');
  const nodes: React.ReactNode[] = [];

  let inCodeBlock = false;
  let codeBlockLines: string[] = [];
  let currentListItems: string[] = [];

  const flushList = (key: number) => {
    if (currentListItems.length > 0) {
      nodes.push(
        <ul key={`ul-${key}`} className="my-4 space-y-2 pl-6 list-disc text-gray-300">
          {currentListItems.map((item, idx) => (
            <li key={idx} className="leading-relaxed">
              {parseInline(item)}
            </li>
          ))}
        </ul>
      );
      currentListItems = [];
    }
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();

    // Code block toggle
    if (trimmed.startsWith('```')) {
      if (inCodeBlock) {
        // End code block
        nodes.push(
          <div key={`code-${index}`} className="my-6 overflow-x-auto rounded-xl border border-border-subtle bg-surface-card p-4 font-mono text-xs text-emerald-400">
            <pre>{codeBlockLines.join('\n')}</pre>
          </div>
        );
        codeBlockLines = [];
        inCodeBlock = false;
      } else {
        flushList(index);
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBlockLines.push(line);
      return;
    }

    // List items
    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      currentListItems.push(trimmed.substring(2));
      return;
    } else {
      flushList(index);
    }

    // Empty lines
    if (!trimmed) return;

    // Headings
    if (trimmed.startsWith('# ')) {
      nodes.push(
        <h1 key={`h1-${index}`} className="mt-8 mb-4 font-display text-3xl font-extrabold text-white">
          {parseInline(trimmed.substring(2))}
        </h1>
      );
    } else if (trimmed.startsWith('## ')) {
      nodes.push(
        <h2 key={`h2-${index}`} className="mt-8 mb-4 font-display text-2xl font-bold text-white border-b border-border-subtle/40 pb-2">
          {parseInline(trimmed.substring(3))}
        </h2>
      );
    } else if (trimmed.startsWith('### ')) {
      nodes.push(
        <h3 key={`h3-${index}`} className="mt-6 mb-3 font-display text-xl font-semibold text-emerald-400">
          {parseInline(trimmed.substring(4))}
        </h3>
      );
    } else if (trimmed.startsWith('> ')) {
      // Blockquote
      nodes.push(
        <blockquote key={`quote-${index}`} className="my-6 border-l-4 border-emerald-500 bg-emerald-950/20 py-3 px-4 italic text-gray-300 rounded-r-lg">
          {parseInline(trimmed.substring(2))}
        </blockquote>
      );
    } else if (trimmed === '---') {
      // Horizontal rule
      nodes.push(<hr key={`hr-${index}`} className="my-8 border-border-subtle" />);
    } else {
      // Paragraph
      nodes.push(
        <p key={`p-${index}`} className="my-4 text-base leading-relaxed text-gray-300">
          {parseInline(trimmed)}
        </p>
      );
    }
  });

  flushList(lines.length);

  return <div className={`prose prose-invert max-w-none ${className}`}>{nodes}</div>;
}
