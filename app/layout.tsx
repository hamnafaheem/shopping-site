import './globals.css';
import { ReactNode } from 'react';
import { CartProvider } from './context/CartContext';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
