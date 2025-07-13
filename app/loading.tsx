export default function LoadingSpinner() {
  return (
    <div className="fixed inset-0 z-[1200] flex items-center justify-center bg-white dark:bg-[#010b24e6] transition-opacity">
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-[#2c7ded] border-t-transparent" />
    </div>
  );
}
