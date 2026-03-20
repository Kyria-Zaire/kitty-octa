/**
 * Portfolio Loading Skeleton — Lumi\u00E8re Design System
 *
 * Elegant skeleton with beige/ivory pulses matching the design system.
 */
export default function PortfolioLoading() {
  return (
    <div className="animate-pulse">
      {/* Hero Skeleton */}
      <div className="h-48 bg-beige md:h-64" />

      {/* Filter Bar Skeleton */}
      <div className="bg-ivory py-8">
        <div className="mx-auto flex max-w-7xl justify-center gap-2 px-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className="h-9 w-20 rounded-md bg-beige" />
          ))}
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="overflow-hidden rounded-md">
              <div className="aspect-[4/3] bg-beige" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
