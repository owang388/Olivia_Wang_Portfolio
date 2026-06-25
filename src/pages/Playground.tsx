import { SiteNav, SiteFooter } from "../components/site-nav";

const tiles = [
  { label: "Motion Design", bg: "linear-gradient(180deg, #6b5b95 0%, #a78bc4 60%, #e8c97a 100%)", textClass: "text-white" },
  { label: "BEACON CAPITAL PARTNERS", bg: "linear-gradient(135deg, #142a55 0%, #0d1f3f 100%)", textClass: "text-white" },
  { label: "Subway Photography", bg: "linear-gradient(135deg, #6b5235 0%, #3a2a18 100%)", textClass: "text-white" },
  { label: "Mixed Media Collage", bg: "linear-gradient(135deg, #c9764a 0%, #8a4a3a 100%)", textClass: "text-white" },
  { label: "Laser-cut Sculpture", bg: "linear-gradient(135deg, #d4b48a 0%, #8a6a3a 100%)", textClass: "text-white" },
  { label: "Type & Brand Studies", bg: "linear-gradient(135deg, #0a0a0a 0%, #1f1f1f 100%)", textClass: "text-white" },
];

export default function Playground() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6 pt-16 pb-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl">Playground</h1>
          <p className="mt-6 text-lg">A collection of more creative explorations</p>
        </div>
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {tiles.map((t) => (
            <div
              key={t.label}
              className={`flex aspect-[4/3] items-center justify-center rounded-md p-6 text-center text-lg font-bold tracking-wide transition-transform hover:-translate-y-1 ${t.textClass}`}
              style={{ background: t.bg }}
            >
              {t.label}
            </div>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
