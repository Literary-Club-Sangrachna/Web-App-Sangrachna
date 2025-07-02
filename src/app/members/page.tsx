// src/app/members/page.tsx
'use client';
import { useEffect, useState } from 'react';

const members = [
  {
    name: 'Aditya Juyal',
    role: 'President',
    img: '/team/Aditya.png',
  },
  {
    name: 'XYX',
    role: 'Vice President',
    img: '/team/Aditya.png',
  },
  {
    name: 'XYZ2',
    role: 'Content Head',
    img: '/team/Aditya.png',
  },
  {
    name: 'XYX3',
    role: 'Design Lead',
    img: '/team/Aditya.png',
  },
  {
    name: 'XYZ4',
    role: 'Social Media Manager',
    img: '/team/Aditya.png',
  },
  {
    name: 'XYZ5',
    role: 'Content Manager',
    img: '/team/Aditya.png',
  },
];

export default function MembersPage() {
  const president = members.find((m) => m.role === 'President');
  const others = members.filter((m) => m.role !== 'President');

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored) setTheme(stored);
    document.documentElement.classList.toggle('dark', stored === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen px-4 py-10 bg-[var(--background)] text-[var(--foreground)]">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-center w-full">
          Meet Our Members
        </h1>
        
      </div>

      {president && (
        <div className="flex flex-col items-center mb-12">
          <img
            src={president.img}
            alt={president.name}
            className="w-32 h-32 rounded-full object-cover mb-4 shadow-lg"
          />
          <h3 className="text-2xl font-bold">{president.name}</h3>
          <p className="text-md opacity-80">{president.role}</p>
        </div>
      )}

      <div className="flex flex-col items-center gap-8">
        {Array.from({ length: Math.ceil(others.length / 3) }).map((_, rowIndex) => (
          <div key={rowIndex} className="flex flex-wrap justify-center gap-6">
            {others.slice(rowIndex * 3, rowIndex * 3 + 3).map((member, i) => (
              <div
                key={i}
                className="bg-[var(--muted)] text-[var(--foreground)] rounded-xl shadow p-4 text-center w-64"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 mx-auto rounded-full object-cover mb-3"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm opacity-80">{member.role}</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
