"use client";

type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  return (
    <div className="bg-primary-bg flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-heading-6 font-semibold">Something went wrong</h1>
      <p className="text-subtitle-color max-w-md text-sm">{error.message}</p>
      <button
        type="button"
        onClick={reset}
        className="bg-primary text-pure-color rounded-full px-5 py-2 text-sm font-medium"
      >
        Try again
      </button>
    </div>
  );
}
