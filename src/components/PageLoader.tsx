export default function PageLoader() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="flex flex-col items-center gap-4">
        <div className="h-5 w-5 animate-spin rounded-full border-4 border-slate-200 border-t-violet-600" />

        <p className="text-sm font-medium text-[#FF8F27]">
          Loading...
        </p>
      </div>
    </div>
  );
}