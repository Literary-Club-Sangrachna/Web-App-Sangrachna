// src/app/admin/page.tsx
'use client';
import { useState, useEffect } from 'react';

type Memory = {
  src: string;
  caption: string;
  date: string;
  insta: string;
};

export default function AdminPage() {
  const [preview, setPreview] = useState('');
  const [caption, setCaption] = useState('');
  const [date, setDate] = useState('');
  const [insta, setInsta] = useState('');
  const [memories, setMemories] = useState<Memory[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem('memories');
    if (saved) {
      const parsed: Memory[] = JSON.parse(saved);
      parsed.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
      setMemories(parsed);
    }
  }, []);

  const handleImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setPreview(reader.result as string);
    reader.readAsDataURL(file);
  };

  const handleUpload = () => {
    if (!preview || !caption || !date || !insta) return alert('All fields required');
    const newMemory = { src: preview, caption, date, insta };
    const updated = [newMemory, ...memories].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
    );
    setMemories(updated);
    localStorage.setItem('memories', JSON.stringify(updated));
    setPreview(''); setCaption(''); setDate(''); setInsta('');
  };

  const handleDelete = (index: number) => {
    const updated = memories.filter((_, i) => i !== index);
    setMemories(updated);
    localStorage.setItem('memories', JSON.stringify(updated));
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl font-bold mb-8 text-center">Admin Dashboard</h1>

      <div className="max-w-xl mx-auto space-y-4">
        <input type="file" accept="image/*" onChange={handleImage} className="block w-full" />
        <input
          type="text"
          placeholder="Caption"
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
          className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
        />
        <input
          type="url"
          placeholder="Instagram URL"
          value={insta}
          onChange={(e) => setInsta(e.target.value)}
          className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
        />
        <button
          onClick={handleUpload}
          className="w-full bg-[var(--foreground)] text-[var(--background)] font-semibold py-2 rounded hover:opacity-90"
        >
          Upload Memory
        </button>
      </div>

      {memories.length > 0 && (
        <div className="mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {memories.map((mem, i) => (
            <div key={i} className="rounded shadow bg-[var(--muted)] relative">
              <img src={mem.src} alt={mem.caption} className="w-full h-48 object-cover" />
              <div className="p-3">
                <p className="font-semibold text-sm">{mem.caption}</p>
                <p className="text-xs opacity-70">{mem.date}</p>
                <a
                  href={mem.insta}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline"
                >
                  View on Instagram ↗
                </a>
              </div>
              <button
                onClick={() => handleDelete(i)}
                className="absolute top-2 right-2 text-xs bg-red-600 text-white px-2 py-0.5 rounded hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
