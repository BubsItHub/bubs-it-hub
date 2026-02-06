export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Bubs IT Hub</h1>
        <p className="text-xl mb-6">Friendly, Reliable Computer Help — Right When You Need It</p>
        <p className="max-w-2xl mx-auto mb-8">
          Local computer repair, setup, and tech support for homes and small businesses in Ontario.
        </p>
        <a href="#contact" className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
          Book a Service
        </a>
      </section>

      {/* Services Section */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-12">
          <img src="https://via.placeholder.com/800x450.png?text=Services+We+Offer" alt="Services We Offer" className="max-w-md w-full rounded-2xl shadow mb-6" />
          <h2 className="text-3xl font-bold text-center flex items-center justify-center gap-2">
            <span>🔧</span>
            Our Services
            <span>🔧</span>
          </h2>
        </div>
        <p className="text-center max-w-2xl mx-auto mb-10 text-lg">
          Every situation is different. We’re happy to review your needs and provide a personalized quote.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Computer Repair</h3>
            <p>Operating system reinstallations, virus removal, slow computer fixes, and troubleshooting.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">New Computer Setup</h3>
            <p>We remove bloatware, install essential software, and get your new device ready to use.</p>
          </div>
          <div className="bg-white rounded-2xl shadow p-6 text-center">
            <h3 className="text-xl font-semibold mb-2">Tech Help & Tutorials</h3>
            <p>One-on-one help to learn your computer, email, backups, or everyday technology.</p>
          </div>
        </div>
      </section>

      {/* Senior Tech Days Section with Pixel Emoji Characters Beside Text */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col items-center mb-6">
            <img src="https://via.placeholder.com/800x450.png?text=Senior+Tech+Day" alt="Senior Tech Day" className="max-w-md w-full rounded-2xl shadow mb-4" />
            <h2 className="text-3xl font-bold flex items-center justify-center gap-4">
              <span className="text-3xl">👴</span>
              Senior Tech Days
              <span className="text-3xl">👵</span>
            </h2>
          </div>
          <p className="text-lg mb-8 max-w-3xl mx-auto">
            We would love to partner with retirement homes, assisted living facilities and senior communities in Cornwall and surrounding areas to provide friendly, hands‑on technology help. Facilities, Organizations and Communities can book our time, allowing seniors to receive support at no cost to them.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold mb-2">✔ One‑on‑One Help</h4>
              <p>Personal assistance with computers, tablets, phones, email, and everyday tech questions.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold mb-2">✔ Friendly & Patient Support</h4>
              <p>No rushing, no pressure — just clear explanations at a comfortable pace.</p>
            </div>
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold mb-2">✔ Fully Mobile</h4>
              <p>We come directly to your facility and spend the day helping residents and seniors where they’re most comfortable.</p>
            </div>
          </div>

          <p className="mt-10 max-w-3xl mx-auto">
            Facilities book us for a half‑day or full‑day visit, providing a scheduled tech support day that residents can access without worrying about cost or transportation.
          </p>

          <a href="#contact" className="inline-block mt-8 bg-blue-600 text-white font-semibold px-6 py-3 rounded-2xl shadow hover:scale-105 transition">
            Book a Senior Tech Day
          </a>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About Bubs IT Hub</h2>
          <p className="text-lg mb-10">
            Bubs IT Hub is a locally owned computer service company focused on honest advice, clear communication,
            and friendly support. We believe technology should work for you — not against you.
          </p>

          <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-semibold mb-2">✔ Local & Trustworthy</h4>
              <p>We’re a Cornwall‑based local business that values honesty, reliability, and clear explanations.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-semibold mb-2">✔ Easy, Plain Language</h4>
              <p>No confusing tech talk. We explain things in a way that you can understand.</p>
            </div>
            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-semibold mb-2">✔ Mobile & Convenient</h4>
              <p>We’re fully mobile — we come to you, so you don’t have to disconnect or transport your devices.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Contact Us for a Quote</h2>
        <p className="mb-4">Tell us what’s going on and we’ll get back to you as soon as possible.</p>
        <p className="mb-8 text-sm text-gray-600">⏱ We typically respond within <strong>8 hours</strong>.</p>

        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-left">
          <form className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input type="text" className="w-full border rounded-xl p-3" placeholder="Your name" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" className="w-full border rounded-xl p-3" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block font-semibold mb-1">How can we help?</label>
              <textarea className="w-full border rounded-xl p-3" rows={4} placeholder="Describe the issue or service you need"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-2xl hover:scale-105 transition">
              Request a Quote
            </button>
          </form>
        </div>

        <p className="mt-10 font-semibold">
          📧 <a href="mailto:bubsithub@outlook.com" className="text-blue-600 hover:underline">bubsithub@outlook.com</a><br />
          💬 <a href="https://www.facebook.com/profile.php?id=61586952975446" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Message us on Facebook</a><br />
          📍 Serving Cornwall and Surrounding Area
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} Bubs IT Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
