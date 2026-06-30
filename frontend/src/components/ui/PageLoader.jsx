export default function PageLoader() {
  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-primary">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="h-12 w-12 rounded-full border-2 border-border-dark border-t-accent animate-spin" />
          <div className="absolute inset-0 h-12 w-12 rounded-full border-2 border-transparent border-b-accent-cyan animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
        </div>
        <span className="font-display text-sm font-medium tracking-[0.2em] uppercase text-text-muted">
          Loading
        </span>
      </div>
    </div>
  )
}
