// src/app/memories/page.tsx
'use client';
import { useState } from 'react';

const memories = [
  {
    src: '/memories/mem1.jpg',
    caption: 'Padharo Mhare Desh',
    date: 'Sep 12, 2024',
    insta: 'https://www.instagram.com/p/C_04ONczywB/?img_index=3&igsh=MWc4Nzc5cHVyMXpreQ=='
  },
  {
    src: '/memories/mem2.jpg',
    caption: "Sanskriti'25",
    date: 'April 20, 2025',
    insta: 'https://www.instagram.com/p/DIrOd8IzBwB/?igsh=YTFvbnRweTNyaHhs'
  },
  {
    src: '/memories/mem3.jpg',
    caption: 'Ishe-e-bebasi launch',
    date: 'Feb 14, 2025',
    insta: 'https://www.instagram.com/p/DHAs4IhTBXl/?igsh=MXBmOHlwanFtb3Vneg=='
  },
];

type Memory = {
  src: string;
  caption: string;
  date: string;
  insta: string;
};

export default function MemoriesPage() {
  const [selected, setSelected] = useState<Memory | null>(null);

  const sortedMemories = [...memories].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="min-h-screen px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl font-bold text-center mb-10">Club Memories</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedMemories.map((memory, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-lg shadow bg-[var(--muted)] cursor-pointer"
              onClick={() => setSelected(memory)}
            >
              <img
                src={memory.src}
                alt={memory.caption}
                className="w-full h-60 object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="p-3">
                <p className="text-sm font-semibold">{memory.caption}</p>
                <p className="text-xs opacity-70">{memory.date}</p>
                <a
                  href={memory.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[var(--foreground)] underline block mt-1"
                >
                  View on Instagram ↗
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          <div className="max-w-3xl max-h-[90vh] overflow-hidden">
            <img
              src={selected.src}
              alt={selected.caption}
              className="w-full h-auto object-contain"
            />
            <div className="text-center text-white mt-4">
              <h2 className="text-lg font-semibold">{selected.caption}</h2>
              <p className="text-sm opacity-70">{selected.date}</p>
              <a
                href={selected.insta}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline mt-1 inline-block"
              >
                View on Instagram ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
