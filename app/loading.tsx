export default function Loading() {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-background">
      <div className="h-16 w-16 animate-spin rounded-full border-10 border-red-500 border-t-transparent">
        <h1 className="sr-only">Loading...</h1>
      </div>
    </div>
  );
}