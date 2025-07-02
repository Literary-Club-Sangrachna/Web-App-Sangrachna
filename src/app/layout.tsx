// src/app/layout.tsx
import './globals.css';
import { ReactNode } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Sangrachna Club',
  description: 'Official Website of Our Editorial Club',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <nav className="flex items-center justify-between p-4 bg-[var(--muted)] text-[var(--foreground)] shadow-md">
          <div className="text-lg font-bold">Sangrachna Club</div>
          <ul className="hidden md:flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/memories">Memories</Link></li>
            <li><Link href="/members">Members</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="https://college-library-system.onrender.com/"
              target="_blank"
              className="hidden md:inline-block bg-[var(--foreground)] text-[var(--background)] px-4 py-1 rounded font-semibold hover:opacity-90"
            >
              Kitabgarh
            </Link>
          </div>
          <div className="md:hidden">
            <button>☰</button>
          </div>
        </nav>
        <main className="p-4">{children}</main>
      </body>
    </html>
  );
}
