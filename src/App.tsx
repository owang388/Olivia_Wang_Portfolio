import { SiteNav, SiteFooter } from "./components/site-nav";
import About from "./pages/About";
import Testimonials from "./pages/Testimonials";
import Playground from "./pages/Playground";
import BeaconPage from "./pages/Beacon";

type Project = {
  title: string;
  subtitle: string;
  tag: string;
  bg: string;
  textClass?: string;
  to?: string;
};

const projects: Project[] = [
  { title: "BEACON\nCAPITAL PARTNERS", subtitle: "Leading brand execution at a real estate firm", tag: "GRAPHIC DESIGN", bg: "linear-gradient(155deg, #2a4a8c 0%, #1e3a6e 100%)", textClass: "text-white", to: "/beacon-capital-partners" },
  { title: "Asian\nStudent Union", subtitle: "Driving engagement for NEU's Asian American community", tag: "GRAPHIC DESIGN · MOTION DESIGN", bg: "linear-gradient(155deg, #d99aa0 0%, #b86d7a 100%)", textClass: "text-white" },
  { title: "CITY of BOSTON", subtitle: "Developing a first time home-buying guide for Boston residents", tag: "PRODUCT DESIGN", bg: "linear-gradient(155deg, #e8826b 0%, #d65a4a 100%)", textClass: "text-white" },
  { title: "SCOOTER'S\nCOFFEE", subtitle: "Building a reward checkout flow for USA's fifth largest coffee chain", tag: "PRODUCT DESIGN", bg: "linear-gradient(155deg, #c43a2d 0%, #9c2a20 100%)", textClass: "text-white" },
  { title: "Gal", subtitle: "Crafting a digital experience for first-time female gym-goers", tag: "PRODUCT DESIGN", bg: "linear-gradient(155deg, #b9a5e8 0%, #9785d6 100%)", textClass: "text-foreground" },
  { title: "Learnt.", subtitle: "Making learning fun", tag: "PRODUCT DESIGN", bg: "linear-gradient(155deg, #f5a8e0 0%, #e87fd0 100%)", textClass: "text-foreground" },
  { title: "inspira\nFINANCIAL", subtitle: "Optimizing UI/UX for a wealth management website", tag: "GRAPHIC DESIGN", bg: "linear-gradient(155deg, #5a72d6 0%, #3f56b8 100%)", textClass: "text-white" },
  { title: "Motion Design", subtitle: "Animated visual storytelling", tag: "MOTION DESIGN", bg: "linear-gradient(180deg, #6b5b95 0%, #a78bc4 60%, #e8c97a 100%)", textClass: "text-white" },
];

function ProjectCard({ project }: { project: Project }) {
  const content = (
    <div
      className={`relative aspect-square overflow-hidden rounded-md p-6 transition-transform hover:-translate-y-1 ${project.textClass ?? "text-foreground"}`}
      style={{ background: project.bg }}
    >
      <div className="flex h-full flex-col justify-between">
        <div className="flex items-start justify-between gap-3">
          <h3 className="whitespace-pre-line text-xl font-bold leading-tight md:text-2xl">{project.title}</h3>
          <span className="shrink-0 text-right text-[10px] font-bold leading-tight tracking-wider">
            {project.tag.split(" · ").map((t) => <span key={t} className="block">{t}</span>)}
          </span>
        </div>
        <p className="max-w-[80%] text-sm opacity-90">{project.subtitle}</p>
      </div>
    </div>
  );
  if (project.to) return <a href={project.to} className="block">{content}</a>;
  return content;
}

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6">
        <section className="flex flex-col items-center pt-10 pb-14 text-center">
          <div className="mb-3 text-3xl">👩🏻</div>
          <h1 className="text-2xl leading-relaxed md:text-3xl md:leading-relaxed">
            Hi, I'm Olivia!<br />A multi-disciplinary<br />product, graphic, and motion designer.
          </h1>
          <p className="mt-6 text-xs text-muted-foreground">
            I'm currently seeking <span className="underline underline-offset-2">Full-Time Design Roles</span>
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-8 text-xs">
            <span className="font-bold tracking-wider">PREVIOUS CLIENTS</span>
            <span className="text-muted-foreground">◎ NEU</span>
            <span className="font-semibold italic">inspira</span>
            <span className="font-semibold">⌘ HYATT VACATION CLUB</span>
            <span className="font-semibold">CITY <span className="italic">of</span> <span className="underline">BOSTON</span></span>
          </div>
        </section>
        <section className="grid grid-cols-1 gap-5 pb-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => <ProjectCard key={p.title} project={p} />)}
          <a href="/Olivia_Wang_Portfolio/playground" className="group flex aspect-square flex-col items-center justify-center rounded-md text-center transition-transform hover:-translate-y-1">
            <div className="mb-2 text-4xl">🐦</div>
            <span className="text-base underline underline-offset-4 group-hover:opacity-60">Playground</span>
          </a>
        </section>
        <section className="py-20 text-center">
          <p className="text-lg md:text-xl">Thank you so much for your time —<br />I'd love to connect!</p>
          <p className="mt-6 text-xs text-muted-foreground">owang388@gmail.com</p>
          <p className="text-xs text-muted-foreground">484-502-9280</p>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}

const path = window.location.pathname.replace("/Olivia_Wang_Portfolio", "") || "/";

export default function App() {
  if (path === "/about") return <About />;
  if (path === "/testimonials") return <Testimonials />;
  if (path === "/playground") return <Playground />;
  if (path === "/beacon-capital-partners") return <BeaconPage />;
  return <Home />;
}
