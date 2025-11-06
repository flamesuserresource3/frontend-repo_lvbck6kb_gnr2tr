import { Calendar, Music, Volleyball, Palette } from "lucide-react";

const activities = [
  {
    icon: Volleyball,
    title: "Olahraga",
    items: ["Futsal", "Basket", "Badminton", "Pencak Silat"],
  },
  {
    icon: Music,
    title: "Seni & Musik",
    items: ["Paduan Suara", "Band", "Tari Tradisional", "Teater"],
  },
  {
    icon: Palette,
    title: "Kreasi",
    items: ["Karya Ilmiah Remaja", "Fotografi", "Desain Grafis"],
  },
];

export default function Activities() {
  return (
    <section id="kegiatan" className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 mb-2 text-indigo-600">
          <Calendar className="h-5 w-5" />
          <span className="text-sm font-semibold uppercase tracking-wide">Kegiatan</span>
        </div>
        <h2 className="text-3xl font-bold text-slate-900">Ekstrakurikuler</h2>
        <p className="mt-2 text-slate-600 max-w-2xl">
          Ragam kegiatan untuk mengembangkan minat dan bakat siswa di bidang akademik maupun non-akademik.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {activities.map(({ icon: Icon, title, items }) => (
            <div key={title} className="rounded-xl bg-white border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-semibold text-slate-900">{title}</h3>
              </div>
              <ul className="text-sm text-slate-700 space-y-2 list-disc list-inside">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
