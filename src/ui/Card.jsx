// Lightweight class join utility (avoids extra dependency)
function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function Card({
  title,
  description,
  eyebrow,
  img,
  alt = "",
  children,
  className = "",
}) {
  const base =
    "group relative flex flex-col rounded-xl p-5 transition duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#00c4cc]";

  const outline =
    "bg-black/80 border border-[#00c4cc]/25 text-white shadow-[0_0_0_1px_rgba(0,196,204,0.15)] hover:border-[#00c4cc]/60 hover:shadow-[0_0_0_1px_#00c4cc,0_4px_18px_-4px_rgba(0,196,204,0.35)]";

  const titleCls = cx(
    "mb-2 text-lg font-bold leading-snug transition-colors text-white",
    "group-hover:text-[#00c4cc]"
  );
  const bodyCls = cx("mb-4 text-sm leading-relaxed text-white/70");

  return (
    <div className={cx(base, outline, className)}>
      {/* Accent bar */}
      <span className="pointer-events-none absolute inset-x-5 top-0 h-0.5 bg-gradient-to-r from-[#00c4cc] via-white/60 to-[#00c4cc] opacity-70" />

      {img && (
        <div className="mb-4 overflow-hidden rounded-md border border-[#00c4cc]/30">
          <img
            src={img}
            alt={alt}
            className="h-40 w-full object-cover transition duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      )}

      {eyebrow && (
        <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-[#00c4cc]">
          {eyebrow}
        </div>
      )}

      {title && <h3 className={titleCls}>{title}</h3>}

      {description && <p className={bodyCls}>{description}</p>}

      {children && (
        <div className="mt-auto flex flex-wrap gap-2 pt-2">{children}</div>
      )}

      {/* Hover ring accent (subtle) */}
      <span className="pointer-events-none absolute inset-0 rounded-xl ring-0 ring-[#00c4cc]/0 transition duration-300 group-hover:ring-1 group-hover:ring-[#00c4cc]/50" />
    </div>
  );
}

export function CardCarousel({ title, src, alt }) {
  return (
    <div className="ml-5 h-full inline-block leading-0 shrink-0">
      <div className="group border border-[#00c4cc]/25 rounded-xl p-5 w-96">
        {src && (
          <div className="image rounded-xl overflow-hidden">
            <img className="w-full h-auto aspect-square" src={src} alt={alt} />
          </div>
        )}

        {title && (
          <h3 className="text-lg mt-5 text-center font-bold leading-snug transition-colors text-white">
            {title}
          </h3>
        )}
      </div>
    </div>
  );
}
