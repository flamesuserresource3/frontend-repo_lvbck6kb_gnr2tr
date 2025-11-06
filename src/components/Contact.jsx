import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Hubungi Kami</h2>
            <p className="mt-2 text-slate-600">
              Ada pertanyaan seputar pendaftaran atau program belajar? Tim kami siap membantu.
            </p>
            <div className="mt-6 space-y-3 text-slate-700">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-indigo-600"/> (021) 555-1234</p>
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-indigo-600"/> info@smacendekia.sch.id</p>
              <p className="flex items-center gap-2"><MapPin className="h-4 w-4 text-indigo-600"/> Jl. Pendidikan No. 10, Jakarta</p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="rounded-xl border border-slate-200 p-6 bg-slate-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Nama</label>
                <input type="text" required className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-700">Pesan</label>
                <textarea rows="4" required className="mt-1 w-full rounded-md border-slate-300 focus:border-indigo-500 focus:ring-indigo-500" />
              </div>
            </div>
            <button type="submit" className="mt-4 inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-2.5 text-sm font-medium shadow hover:bg-indigo-700">
              {sent ? "Terkirim!" : "Kirim Pesan"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
