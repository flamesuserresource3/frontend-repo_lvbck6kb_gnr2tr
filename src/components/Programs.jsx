import { FlaskConical, Globe2, Trophy, Languages } from "lucide-react";

const programs = [
  {
    icon: Trophy,
    title: "Kelas Olimpiade",
    desc: "Pembinaan intensif untuk matematika, sains, dan komputer menuju kompetisi nasional & internasional.",
  },
  {
    icon: FlaskConical,
    title: "Laboratorium Riset",
    desc: "Fasilitas lab modern untuk eksperimen, proyek sains terapan, dan kegiatan STEM.",
  },
  {
    icon: Languages,
    title: "Bahasa Asing",
    desc: "Program bilingual dan klub bahasa Inggris, Jepang, serta Arab untuk kesiapan global.",
  },
  {
    icon: Globe2,
    title: "Pertukaran Pelajar",
    desc: "Kesempatan mengikuti program internasional dan kolaborasi lintas budaya.",
  },
];

export default function Programs() {
  return (
    <section id="program" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900">Program Unggulan</h2>
          <p className="mt-3 text-slate-600">
            Kurikulum yang relevan dengan kebutuhan masa depan serta penumbuhan karakter dan kreativitas.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition bg-white"
            >
              <div className="h-11 w-11 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
