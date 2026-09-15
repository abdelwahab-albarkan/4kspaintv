// ESLint flat config (ESLint 9 + Next.js 16).
// eslint-config-next v16 ships native flat-config arrays, so we spread them
// directly — no FlatCompat needed (FlatCompat trips a circular-JSON bug when
// validating the bundled 'react' plugin under ESLint 9).
import nextCoreWebVitals from 'eslint-config-next/core-web-vitals';
import nextTypeScript from 'eslint-config-next/typescript';

const eslintConfig = [
  // Global ignores (build output, deps, generated files).
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'node_modules/**', 'next-env.d.ts'],
  },
  // Next.js recommended rules: Core Web Vitals + React + TypeScript.
  ...nextCoreWebVitals,
  ...nextTypeScript,
];

export default eslintConfig;
