import Image from 'next/image';
import type { StandingRow } from '@/lib/football/types';

export default function StandingsTable({ rows, caption }: { rows: StandingRow[]; caption: string }) {
  if (rows.length === 0) return null;

  return (
    <div className="overflow-hidden rounded-2xl border border-border-subtle bg-surface-card/70">
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <caption className="sr-only">{caption}</caption>
          <thead>
            <tr className="border-b border-border-subtle text-left text-xs uppercase tracking-wider text-gray-400">
              <th scope="col" className="px-3 py-3 font-semibold">Pos</th>
              <th scope="col" className="px-3 py-3 font-semibold">Equipo</th>
              <th scope="col" className="px-2 py-3 text-center font-semibold">PJ</th>
              <th scope="col" className="hidden px-2 py-3 text-center font-semibold sm:table-cell">G</th>
              <th scope="col" className="hidden px-2 py-3 text-center font-semibold sm:table-cell">E</th>
              <th scope="col" className="hidden px-2 py-3 text-center font-semibold sm:table-cell">P</th>
              <th scope="col" className="px-2 py-3 text-center font-semibold">DG</th>
              <th scope="col" className="px-3 py-3 text-center font-semibold text-cyan">Pts</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.teamId} className="border-b border-border-subtle/50 last:border-0 hover:bg-white/[0.02]">
                <td className="px-3 py-2.5 tabular-nums text-gray-400">{row.rank}</td>
                <td className="px-3 py-2.5">
                  <div className="flex items-center gap-2.5">
                    <span className="relative h-5 w-5 shrink-0">
                      {row.teamLogo ? (
                        <Image src={row.teamLogo} alt="" fill loading="lazy" sizes="20px" className="object-contain" />
                      ) : null}
                    </span>
                    <span className="truncate font-medium text-white">{row.teamName}</span>
                  </div>
                </td>
                <td className="px-2 py-2.5 text-center tabular-nums text-gray-300">{row.played}</td>
                <td className="hidden px-2 py-2.5 text-center tabular-nums text-gray-300 sm:table-cell">{row.win}</td>
                <td className="hidden px-2 py-2.5 text-center tabular-nums text-gray-300 sm:table-cell">{row.draw}</td>
                <td className="hidden px-2 py-2.5 text-center tabular-nums text-gray-300 sm:table-cell">{row.lose}</td>
                <td className="px-2 py-2.5 text-center tabular-nums text-gray-300">
                  {row.goalsDiff > 0 ? `+${row.goalsDiff}` : row.goalsDiff}
                </td>
                <td className="px-3 py-2.5 text-center font-bold tabular-nums text-white">{row.points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
