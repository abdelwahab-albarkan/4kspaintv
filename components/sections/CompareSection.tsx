import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

interface ComparisonRow {
  feature: string;
  ourService: string;
  lowQualityIptv: string;
  traditionalCable: string;
}

const COMPARISON_DATA: ComparisonRow[] = [
  {
    feature: 'Calidad de emisión',
    ourService: '4K Ultra HD & 60 FPS sin compresión agresiva',
    lowQualityIptv: '720p / 1080p con altísima compresión',
    traditionalCable: 'HD / 4K limitado a ciertos canales',
  },
  {
    feature: 'Estabilidad en grandes eventos',
    ourService: 'Servidores dedicados anti-congelación (Anti-Freeze 99,9%)',
    lowQualityIptv: 'Cortes frecuentes durante partidos de fútbol',
    traditionalCable: 'Estable pero extremadamente costoso',
  },
  {
    feature: 'Canales y catálogo VOD',
    ourService: '+50.000 canales + 180.000 películas y series',
    lowQualityIptv: 'Listas inestables de pocos canales',
    traditionalCable: 'Paquetes de canales muy limitados',
  },
  {
    feature: 'Compatibilidad multi-dispositivo',
    ourService: 'Firestick, Smart TV (Samsung/LG), Android, iOS, PC, MAG',
    lowQualityIptv: 'Solo reproductores básicos m3u',
    traditionalCable: 'Requiere decodificador físico obligatorio',
  },
  {
    feature: 'Soporte y atención al cliente',
    ourService: 'Soporte 24/7 en español vía WhatsApp y correo',
    lowQualityIptv: 'Sin soporte técnico ni respuesta',
    traditionalCable: 'Líneas saturadas y largas esperas',
  },
  {
    feature: 'Permanencia y compromisos',
    ourService: 'Sin contratos ni permanencia obligatoria',
    lowQualityIptv: 'Sin garantía ni reembolso',
    traditionalCable: 'Permanencia obligatoria de 12 a 24 meses',
  },
];

export default function CompareSection() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <div className="text-center">
        <h2 className="font-display text-3xl font-extrabold text-white md:text-4xl">
          Tabla comparativa de criterios de evaluación
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-gray-400">
          Compara las diferencias fundamentales entre nuestro servicio premium de IPTV, las listas gratuitas inestables y la televisión por cable tradicional.
        </p>
      </div>

      <div className="mt-12 overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-border-subtle bg-surface-card">
              <th className="p-4 font-semibold text-white">Criterio de comparación</th>
              <th className="p-4 font-semibold text-emerald-400 bg-emerald-950/40 border-x border-emerald-500/20">
                4K Spain TV Premium
              </th>
              <th className="p-4 font-semibold text-gray-300">IPTV Gratuito / Barato</th>
              <th className="p-4 font-semibold text-gray-300">Televisión por Cable</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-subtle">
            {COMPARISON_DATA.map((row) => (
              <tr key={row.feature} className="hover:bg-surface-hover/50">
                <td className="p-4 font-medium text-white">{row.feature}</td>
                <td className="p-4 text-gray-200 bg-emerald-950/20 border-x border-emerald-500/20">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{row.ourService}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-400">
                  <div className="flex items-start gap-2">
                    <XCircle className="h-5 w-5 text-rose-500 shrink-0 mt-0.5" />
                    <span>{row.lowQualityIptv}</span>
                  </div>
                </td>
                <td className="p-4 text-gray-400">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="h-5 w-5 text-amber-400 shrink-0 mt-0.5" />
                    <span>{row.traditionalCable}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
