const events = [
  {
    title: 'AI Hackathon 2025',
    date: '2025-07-20',
    description: 'A 36-hour AI coding sprint.',
    link: 'https://example.com/register-ai',
  },
  {
    title: 'Alumni Meetup 2025',
    date: '2025-06-15',
    description: 'An evening of memories and networking.',
    link: 'https://example.com/register-alumni',
  },
  {
    title: 'Tech Talk: Future of Web3',
    date: '2025-08-10',
    description: 'Explore Web3 and Blockchain.',
    link: 'https://example.com/register-web3',
  },
];

function isUpcoming(date: string) {
  return new Date(date) > new Date();
}

export default function EventsPage() {
  const upcoming = events.filter((e) => isUpcoming(e.date));
  const past = events.filter((e) => !isUpcoming(e.date));

  return (
    <div className="space-y-10">
      <section>
        <h2 className="text-2xl font-semibold mb-4">Upcoming Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {upcoming.map((event, i) => (
            <div key={i} className="border p-4 rounded shadow bg-white">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2">{event.description}</p>
              <a
                href={event.link}
                target="_blank"
                className="inline-block mt-3 bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700"
              >
                Register
              </a>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Past Events</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {past.map((event, i) => (
            <div key={i} className="border p-4 rounded shadow bg-gray-50">
              <h3 className="text-xl font-bold">{event.title}</h3>
              <p className="text-sm text-gray-500">{event.date}</p>
              <p className="mt-2">{event.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
