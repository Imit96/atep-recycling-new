'use client'
import { useEffect } from 'react';
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="flex min-h-screen flex-col items-center justify-center gap-4 p-4 text-center">
          <h1 className="text-4xl font-bold">Something went wrong!</h1>
          <p className="text-xl text-muted-foreground max-w-[500px]">
            We apologize for the inconvenience. Our team has been notified and is working to fix the issue.
          </p>
          <Button
            onClick={reset}
            size="lg"
            variant="outline"
          >
            Try again
          </Button>
        </div>
      </body>
    </html>
  );
}
