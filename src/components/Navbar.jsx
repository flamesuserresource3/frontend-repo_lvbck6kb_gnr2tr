import { GraduationCap, BookOpen } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-slate-200/60">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 font-semibold text-slate-900">
          <GraduationCap className="h-6 w-6 text-indigo-600" />
          <span>SMA Cendekia Nusantara</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">
          <a href="#tentang" className="hover:text-slate-900 transition">Tentang</a>
          <a href="#program" className="hover:text-slate-900 transition">Program</a>
          <a href="#kegiatan" className="hover:text-slate-900 transition">Kegiatan</a>
          <a href="#kontak" className="hover:text-slate-900 transition">Kontak</a>
        </div>
        <a
          href="#daftar"
          className="inline-flex items-center gap-2 rounded-md bg-indigo-600 text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          <BookOpen className="h-4 w-4" /> Pendaftaran
        </a>
      </nav>
    </header>
  );
}
