'use client';

import { ErrorPageProps } from '@/interface/error';
import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error('Error caught by error boundary:', error);
  }, [error]);

  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Something went wrong!</h2>
      <p>{error.message}</p>
      <button onClick={() => reset()} style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Try Again
      </button>
    </div>
  );
}
