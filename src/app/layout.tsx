"use client";

import { ReactNode } from 'react';
import { ThemeProvider, Container } from '@mui/material';
import theme from '../styles/theme';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>su-fsd</title>
      </head>
      <body>
        <ThemeProvider theme={theme}>
          <Container maxWidth="lg" style={{ minHeight: '100vh' }}>
            {children}
          </Container>
        </ThemeProvider>
      </body>
    </html>
  );
}
