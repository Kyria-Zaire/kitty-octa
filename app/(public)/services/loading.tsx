/**
 * Services Loading Skeleton — Lumi\u00E8re Design System
 *
 * Elegant skeleton with beige/ivory pulses matching the design system.
 */
export default function ServicesLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-48 bg-beige md:h-64" />

      {/* Tab Bar Skeleton */}
      <div className="border-b border-gold/10 bg-ivory">
        <div className="mx-auto flex max-w-7xl gap-1 px-4 py-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="h-10 w-12 rounded-md bg-beige" />
          ))}
        </div>
      </div>

      {/* Card Skeleton */}
      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-md bg-white p-8 shadow-sm">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-14 w-14 rounded-full bg-beige" />
            <div className="flex-1 space-y-2">
              <div className="h-6 w-48 rounded bg-beige" />
              <div className="h-4 w-72 rounded bg-beige/60" />
            </div>
          </div>
          <div className="space-y-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full bg-beige" />
                <div className="h-4 flex-1 rounded bg-beige/60" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
