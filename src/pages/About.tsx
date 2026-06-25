import { SiteNav, SiteFooter } from "../components/site-nav";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-5xl px-6 pt-16 pb-20">
        <div className="flex justify-end">
          <div className="h-44 w-44 overflow-hidden rounded-full bg-muted ring-1 ring-border">
            <div className="flex h-full w-full items-center justify-center text-5xl">🙂</div>
          </div>
        </div>
        <h1 className="mt-10 text-4xl leading-tight md:text-6xl md:leading-[1.15]">
          I'm Olivia, and I love iterating, connecting, learning, and emojis ☺️
        </h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed">
          <p>
            Whether it's seeing my designs improve depression (designing and user testing a
            mental health tracker at DYMOND), help users get their sweet fix (collaborating
            with researchers to design a check-out flow for Scooters), or making the
            home-buying process easier to navigate (conducting interviews with Boston
            residents to build a guide for the City of Boston) — I love that design lets me
            learn from people and build for them.
          </p>
          <p>
            I'm currently based in New York, having graduated from Northeastern University
            with a degree in Experience Design. When I'm not designing, you'll catch me
            trying a new coffee shop, sending emoji-laced texts, or planning my next trip.
          </p>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
