// src/app/components/ui/SectionHeader.tsx

// CAMBIO: Usamos la paleta oficial del sitio.
// Así todos los títulos de sección mantienen el mismo color de marca.

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  light?: boolean;
};

export default function SectionHeader({
  eyebrow,
  title,
  description,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
      {eyebrow && (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.22em] sm:text-sm ${
            light ? "text-cyan-100" : "text-brand"
          }`}
        >
          {eyebrow}
        </p>
      )}

      <h2
        className={`text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl ${
          light ? "text-white" : "text-slate-900"
        }`}
      >
        {title}
      </h2>

      {description && (
        <p
          className={`mx-auto mt-4 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${
            light ? "text-sky-50" : "text-brand-muted"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}