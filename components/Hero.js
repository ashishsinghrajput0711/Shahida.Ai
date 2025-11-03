export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-32 bg-gradient-to-b from-white to-blue-50">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
        Your AI Partner for <span className="text-blue-600">Content Creation</span>
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl mb-8">
        Botika helps you generate realistic human-like avatars and videos for marketing, education, and entertainment.
      </p>
      <div className="flex space-x-4">
        <button className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition">
          Get Started
        </button>
        <button className="px-6 py-3 border border-gray-300 rounded-full hover:bg-gray-100 transition">
          Watch Demo
        </button>
      </div>
    </section>
  );
}
