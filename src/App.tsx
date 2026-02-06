export default function App() {

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Top Navigation */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">BubsIT Hub</div>
          <nav className="hidden md:flex gap-6 font-medium">
            <a href="#services" className="hover:text-blue-600">Services</a>
            <a href="#seniors" className="hover:text-blue-600">Senior Tech Days</a>
            <a href="#about" className="hover:text-blue-600">About</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
          <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:scale-105 transition">
            Book
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-24 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">BubsIT Hub</h1>
        <p className="text-xl mb-4">Friendly, Reliable Computer Help — Right When You Need It</p>
        <p className="max-w-2xl mx-auto mb-2">
          Local computer repair, setup, and tech support for homes and small businesses.
        </p>
        <p className="max-w-2xl mx-auto mb-8 font-semibold">
          📍 Serving Cornwall & Surrounding Area
        </p>
        <a href="#contact" className="inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
          Get a Quote
        </a>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">Our Services</h2>
        <p className="text-center max-w-2xl mx-auto mb-12 text-lg">
          Every situation is different. We review your needs and provide a clear, personalized quote.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">🔧</div>
            <h3 className="text-xl font-semibold mb-2">Computer Repair</h3>
            <p>OS reinstalls, virus removal, slow computer fixes, and troubleshooting.</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">💻</div>
            <h3 className="text-xl font-semibold mb-2">New Computer Setup</h3>
            <p>Bloatware removal, essential software install, and full device setup.</p>
          </div>

          <div className="bg-white rounded-2xl shadow p-8 text-center hover:shadow-lg transition">
            <div className="text-3xl mb-3">🎓</div>
            <h3 className="text-xl font-semibold mb-2">Tech Help & Training</h3>
            <p>One‑on‑one help with email, backups, devices, and everyday tech.</p>
          </div>
        </div>
      </section>

      {/* Senior Tech Days */}
      <section id="seniors" className="py-20 px-6 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Senior Tech Days</h2>
          <p className="text-lg mb-8">
            We partner with retirement homes and senior communities to provide friendly,
            hands‑on technology help directly on site.
          </p>

          <div className="bg-white rounded-2xl shadow p-8 mb-10">
            <p className="font-semibold text-lg">
              Facilities book the visit — residents receive help at no cost.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold mb-2">✔ One‑on‑One Help</h4>
              <p>Computers, tablets, phones, email, and everyday tech questions.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold mb-2">✔ Patient Support</h4>
              <p>Clear explanations at a comfortable pace — no pressure.</p>
            </div>

            <div className="bg-white rounded-2xl shadow p-6">
              <h4 className="font-semibold mb-2">✔ Fully Mobile</h4>
              <p>We come directly to the facility and help residents where they are.</p>
            </div>
          </div>

          <a href="#contact" className="inline-block mt-10 bg-blue-600 text-white font-semibold px-8 py-3 rounded-2xl shadow hover:scale-105 transition">
            Book a Senior Tech Day
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="bg-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About BubsIT Hub</h2>
          <p className="text-lg mb-10">
            We’re a locally owned computer service company focused on honest advice,
            clear communication, and friendly support. Technology should work for you — not against you.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-semibold mb-2">✔ Local & Trustworthy</h4>
              <p>Cornwall‑area service with honest, reliable support.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-semibold mb-2">✔ Plain Language</h4>
              <p>No confusing tech talk — just clear explanations.</p>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 shadow">
              <h4 className="font-semibold mb-2">✔ Convenient</h4>
              <p>Mobile service — we come to you.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 px-6 text-center bg-gray-100">
        <h2 className="text-3xl font-bold mb-6">Request a Quote</h2>
        <p className="mb-8">We typically respond within 8 hours.</p>

        <div className="max-w-xl mx-auto bg-white rounded-2xl shadow p-8 text-left">
          <form action="https://formspree.io/f/xlgwrzor" method="POST" className="space-y-4">
            <div>
              <label className="block font-semibold mb-1">Name</label>
              <input type="text" name="name" required className="w-full border rounded-xl p-3" />
            </div>
            <div>
              <label className="block font-semibold mb-1">Email</label>
              <input type="email" name="email" required className="w-full border rounded-xl p-3" />
            </div>
            <div>
              <label className="block font-semibold mb-1">How can we help?</label>
              <textarea name="message" required className="w-full border rounded-xl p-3" rows={4}></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-semibold py-3 rounded-2xl hover:scale-105 transition">
              Send Request
            </button>
          </form>
        </div>

        <p className="mt-10 font-semibold">
          📧 bubsithub@outlook.com<br />
          💬 Facebook: BubsIT Hub<br />
          📍 Cornwall & Surrounding Area
        </p>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 text-center py-6">
        <p>© {new Date().getFullYear()} BubsIT Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
