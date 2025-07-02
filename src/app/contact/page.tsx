// src/app/contact/page.tsx
'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '',
    college: '',
    roll: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:sangrachna@niet.co.in?subject=Query from ${form.name}&body=` +
      `College: ${form.college}%0D%0A` +
      `Roll No: ${form.roll}%0D%0A` +
      `Email: ${form.email}%0D%0A` +
      `Message: ${form.message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen px-4 py-12 bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-3xl font-bold text-center mb-10">Contact Us</h1>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
        <div>
          <label className="block text-sm font-semibold mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">College</label>
          <input
            type="text"
            name="college"
            value={form.college}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">University Roll Number</label>
          <input
            type="text"
            name="roll"
            value={form.roll}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Official Email ID</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-1">Issue / Message</label>
          <textarea
            name="message"
            rows={5}
            value={form.message}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-[var(--highlight)] rounded bg-transparent"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="block w-full bg-[var(--foreground)] text-[var(--background)] py-2 rounded font-semibold hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
