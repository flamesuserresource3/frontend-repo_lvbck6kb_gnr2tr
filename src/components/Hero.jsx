import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 -right-20 h-72 w-72 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-purple-200/40 blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-white shadow px-3 py-1 text-xs font-medium text-slate-600 mb-4">
            <Star className="h-3 w-3 text-yellow-500" /> Sekolah Unggulan Nasional
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Membangun Generasi Berkarakter, Cerdas, dan Berprestasi
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            SMA Cendekia Nusantara berkomitmen menghadirkan pengalaman belajar yang
            holistik dengan fasilitas modern, kurikulum inovatif, dan lingkungan
            yang inspiratif.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a
              href="#daftar"
              className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-5 py-3 text-sm font-semibold shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Daftar Sekarang <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#tentang"
              className="inline-flex items-center gap-2 rounded-md bg-white text-slate-900 px-5 py-3 text-sm font-semibold shadow border border-slate-200 hover:bg-slate-50"
            >
              Pelajari Lebih Lanjut
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=1600&auto=format&fit=crop"
            alt="Siswa belajar di kelas modern"
            className="rounded-xl shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
