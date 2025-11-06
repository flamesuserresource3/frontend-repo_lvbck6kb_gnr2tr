import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Activities from "./components/Activities";
import Contact from "./components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar />
      <main>
        <Hero />
        <section id="tentang" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl font-bold">Tentang Sekolah</h2>
              <p className="mt-3 text-slate-600">
                SMA Cendekia Nusantara adalah lembaga pendidikan yang menekankan keseimbangan
                antara karakter, akademik, dan kreativitas. Dengan tenaga pendidik berpengalaman
                dan fasilitas pembelajaran modern, kami memfasilitasi siswa untuk mencapai potensi terbaiknya.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700 list-disc list-inside">
                <li>Lingkungan belajar aman dan inklusif</li>
                <li>Fasilitas lengkap: perpustakaan, laboratorium, sport center</li>
                <li>Kolaborasi dengan dunia industri dan perguruan tinggi</li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1600&auto=format&fit=crop"
                alt="Fasilitas sekolah"
                className="rounded-xl shadow-lg w-full object-cover"
              />
            </div>
          </div>
        </section>
        <Programs />
        <Activities />
        <Contact />
      </main>
      <footer className="border-t border-slate-200 py-8 mt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>© {new Date().getFullYear()} SMA Cendekia Nusantara. All rights reserved.</p>
          <p>
            Dibuat dengan ❤️ untuk pendidikan Indonesia.
          </p>
        </div>
      </footer>
    </div>
  );
}
