export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Contact Us</h1>
      <p className="text-gray-600 max-w-xl">
        Have a question, suggestion, or want to collaborate? Reach out to us at
        <a
          href="mailto:sangrachna@niet.co.in"
          className="text-blue-500 underline ml-1"
        >
          sangrachna@niet.co.in
        </a>
      </p>
    </div>
  );
}