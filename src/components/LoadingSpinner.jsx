export default function LoadingSpinner() {
  return (
    <div 
      className="min-h-[60vh] flex flex-col items-center justify-center gap-4 py-12"
      role="status"
      aria-label="Loading page content"
    >
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 rounded-full border-4 border-slate-200" />
        <div className="absolute inset-0 rounded-full border-4 border-[#005b94] border-t-transparent animate-spin" />
      </div>
      <span className="text-sm font-medium text-slate-500 tracking-wide">
        Loading...
      </span>
    </div>
  );
}
