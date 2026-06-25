import { SiteNav, SiteFooter } from "../components/site-nav";

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-mono text-xs font-bold tracking-wider">{label}</div>
      <div className="mt-2 text-sm">{value}</div>
    </div>
  );
}

function SectionHeading({ title, body }: { title: string; body: string }) {
  return (
    <header className="mb-10">
      <h2 className="font-mono text-2xl">{title}</h2>
      <p className="mt-3 max-w-3xl text-sm text-muted-foreground">{body}</p>
    </header>
  );
}

export default function BeaconPage() {
  return (
    <div className="min-h-screen bg-[#f3f1ec] text-foreground">
      <SiteNav />
      <main className="mx-auto max-w-6xl px-6 pb-24">

        {/* Title */}
        <section className="pt-12 pb-16 text-center">
          <h1 className="font-mono text-4xl md:text-6xl">Beacon Capital Partners</h1>
          <p className="mt-4 font-mono text-base md:text-lg">A 6-month graphic design co-op</p>
        </section>

        {/* Meta grid */}
        <section className="grid grid-cols-2 gap-8 border-t border-border/60 pt-8 md:grid-cols-4">
          <MetaItem label="CLIENT" value="Beacon Capital Partners" />
          <MetaItem label="SKILLS" value="Graphic design, Illustrator, InDesign, Photoshop, Microsoft Suite" />
          <MetaItem label="ROLE" value="Designer" />
          <MetaItem label="TIMELINE" value="26 Weeks" />
        </section>

        {/* Intro */}
        <section className="mt-20 border-l-2 border-[#1e3a6e] pl-6">
          <h2 className="text-2xl">Spaces That Inspire Your Best Work</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed">
            Located next to Faneuil Hall in the heart of Boston, Beacon Capital Partners is an American real estate investment firm. As Creative Lead, I spearheaded efforts in designing collateral for different Beacon properties.
          </p>
        </section>

        {/* Event Invitations */}
        <section className="mt-24">
          <SectionHeading
            title="Event Invitations"
            body="Using the existing Beacon Brand, I curated creative invitations for a diverse range of Beacon events."
          />
          <div className="grid grid-cols-1 gap-1 md:grid-cols-3">

            {/* Breakfast invite */}
            <div className="aspect-[3/4] bg-[#f3ecdc] p-8 text-[#1c2a55]">
              <p className="font-serif text-2xl italic">Join Us For</p>
              <p className="font-serif text-4xl font-semibold">Breakfast</p>
              <p className="mt-4 text-xs">
                Come meet Beacon Capital Partners<br />and enjoy coffee and pastries
              </p>
              <div className="mt-10 flex justify-end">
                <div className="text-right text-[10px] leading-snug">
                  <p className="underline">8:30 AM - 9:30 AM</p>
                  <p className="underline">April 25, 2023</p>
                  <p className="mt-2">2nd Floor Lobby</p>
                  <p>Located at the Top</p>
                  <p>of the Escalators</p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-4 gap-2">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="aspect-square rounded-full"
                    style={{
                      background: i === 1 ? "#e26d6a" : i === 3 ? "#cfcfcf" : i === 5 ? "#7b95c9" : i === 6 ? "#cfcfcf" : "#fff",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Women's initiative */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#d97e7a] p-8 text-white">
              <div className="absolute -top-6 left-1/2 h-44 w-44 -translate-x-1/2 rounded-full bg-[#7b95c9]" />
              <div className="absolute top-6 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full bg-[#f3ecd0]" />
              <div className="absolute top-16 left-[55%] h-7 w-7 rotate-45 bg-[#e0a847]" />
              <div className="relative mt-48 text-center">
                <p className="text-xs">You're invited to the</p>
                <p className="mt-2 font-serif text-2xl leading-tight">
                  Beacon's Women Initiative<br />Group Breakfast
                </p>
                <p className="mt-2 text-xs">the morning after the holiday party</p>
                <div className="mt-6 space-y-1 text-[11px]">
                  <p className="underline">8:30 AM - 10:00 AM</p>
                  <p className="underline">Thursday, November 16th, 2023</p>
                  <p className="mt-3 font-semibold">Fin Point Oyster Bar & Grill</p>
                  <p>89 Broad Street, Boston</p>
                </div>
              </div>
            </div>

            {/* Holiday party */}
            <div className="relative aspect-[3/4] overflow-hidden bg-[#7a8a4e] p-8 text-white">
              <div className="absolute top-4 left-4 grid grid-cols-3 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-4 w-4 rounded-full bg-[#e8867a]" />
                ))}
              </div>
              <div className="absolute bottom-4 left-4 grid grid-cols-3 gap-1">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="h-4 w-4 rounded-full bg-[#e8867a]" />
                ))}
              </div>
              <div className="relative ml-auto max-w-[60%] text-right">
                <p className="text-xs">You are cordially invited to the</p>
                <p className="mt-2 font-serif text-2xl leading-tight">
                  Beacon Capital<br />Partners 2023<br />Holiday Party
                </p>
                <p className="mt-6 text-[11px] underline">Wednesday, November 15, 2023</p>
                <p className="mt-3 text-[11px]">The festivities will take place at Southline Boston.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Signage */}
        <section className="mt-24">
          <SectionHeading
            title="Signage"
            body="In addition to invites, I developed cohesive signage for Beacon's external properties."
          />
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="flex aspect-[4/3] items-center justify-center bg-[#d7c7a8]">
              <div className="relative w-40 rounded-sm bg-[#fdf6e9] p-4 shadow-md">
                <div className="absolute inset-y-2 right-0 flex w-3 flex-col gap-1">
                  <span className="block h-3 bg-[#1c2a55]" />
                  <span className="block h-3 bg-[#e0a847]" />
                  <span className="block h-3 bg-[#7a8a4e]" />
                  <span className="block h-3 bg-[#7b95c9]" />
                </div>
                <div className="text-center text-2xl">🥣</div>
                <p className="mt-2 text-center font-mono text-[10px] font-bold tracking-wider">
                  FRESH FRUIT<br />PLEASE ENJOY
                </p>
              </div>
            </div>
            <div className="flex aspect-[4/3] items-center justify-center bg-[#cdcdcd]">
              <div className="flex h-56 w-40 flex-col items-center justify-center rounded-t-full bg-[#1a1a1a] p-4 text-center text-white">
                <p className="font-mono text-2xl font-bold">HUNGRY?</p>
                <div className="my-3 flex gap-1">
                  <span className="h-1 w-4 bg-white" />
                  <span className="h-1 w-4 bg-[#7a8a4e]" />
                  <span className="h-1 w-4 bg-[#e0a847]" />
                </div>
                <p className="font-mono text-xl leading-tight">
                  Refuel<br />at Base<br />Camp
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Wayfinding */}
        <section className="mt-24">
          <SectionHeading
            title="Wayfinding"
            body="As Beacon built their Dynamic One, the team needed help devising a map that could help direct newcomers through the space. This was designed with Dynamic One's branding in mind."
          />
          <div className="bg-[#f3ecdc] p-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
              <div className="aspect-[4/3] rounded-sm bg-[#fbf6e9] p-6">
                <div className="grid h-full grid-cols-3 grid-rows-3 gap-3 text-[10px] font-mono text-[#7a8a4e]">
                  <div className="col-span-2 row-span-2 rounded-sm bg-[#e8e0c8]/60 p-2">DYNAMIC ONE</div>
                  <div className="rounded-sm bg-[#e8e0c8]/60 p-2">BAYLOR MEDICINE</div>
                  <div className="rounded-sm bg-[#7a8a4e]/40 p-2 text-white">VAUGHN</div>
                  <div className="rounded-sm bg-[#e8e0c8]/60 p-2">SURFACE PARKING LOT</div>
                  <div className="rounded-sm bg-[#e8e0c8]/60 p-2">OLD SPANISH TRAIL</div>
                </div>
              </div>
              <div className="space-y-4 text-xs">
                <div>
                  <p className="font-semibold">For Uber Address Use Institute of Forensic Science:</p>
                  <p className="text-muted-foreground">1861 Old Spanish Trail, Houston TX 77030</p>
                </div>
                <ol className="space-y-3">
                  <li><span className="font-semibold">1.</span> Arrive using entrance/exit off of Bertner Ave</li>
                  <li><span className="font-semibold">2.</span> Turn on street just North of the Institute of Forensic Science building</li>
                  <li><span className="font-semibold">3.</span> Come to second set of construction trailers</li>
                  <li><span className="font-semibold">4.</span> Parking is available immediately outside Dynamic One Marketing Pavilion</li>
                </ol>
              </div>
            </div>
            <div className="mt-8 flex items-end justify-between">
              <div>
                <p className="font-serif text-2xl">Map to Dynamic One</p>
                <p className="mt-1 font-mono text-[10px] tracking-widest text-[#7a8a4e]">MARKETING PAVILION</p>
              </div>
              <p className="font-mono text-sm font-bold tracking-widest">BEACON</p>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </div>
  );
}
