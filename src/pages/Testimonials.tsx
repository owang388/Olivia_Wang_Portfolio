import { SiteNav, SiteFooter } from "../components/site-nav";

type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  body: React.ReactNode;
};

const testimonials: Testimonial[] = [
  {
    name: "VEDANT DAS SWAIN",
    role: "Assistant Professor @ NYU Tandon School of Engineering",
    avatar: "🧑🏽",
    body: (
      <>
        <p>Olivia already had <strong>excellent UX skills</strong> 📱. The project with us gave her an opportunity to exercise these skills over a full lifecycle: domain research, expert interviews, study design, participant management, study deployment, and co-design.</p>
        <p>Olivia's greatest strengths are in some fundamental qualities. She is <strong>extremely competent in acquiring new specialized knowledge</strong> 🧠, <strong>organizing that knowledge</strong> 🗂️, and then <strong>synthesizing it in a way that other stakeholders can appreciate</strong> 👩🏽‍🏫.</p>
      </>
    ),
  },
  {
    name: "ALANA WONG",
    role: "Senior Product Designer @ Scooter's Coffee",
    avatar: "👩🏻",
    body: <p>Olivia is the kind of designer who makes a team better. She asks the right questions, pushes back thoughtfully, and brings genuine warmth to every project. Her work on the rewards checkout flow saved hours of rework downstream.</p>,
  },
  {
    name: "MARCUS LIN",
    role: "Design Manager @ WillowTree Boston",
    avatar: "🧑🏻",
    body: <p>In nine weeks Olivia shipped polished work for two enterprise clients and still had time to mentor the other interns. Rare combination of craft, speed, and kindness.</p>,
  },
];

export default function Testimonials() {
  return (
    <div className="min-h-screen bg-background">
      <SiteNav />
      <main className="mx-auto max-w-4xl px-6 pt-16 pb-20">
        <div className="text-center">
          <div className="text-4xl">🫶</div>
          <h1 className="mt-4 text-5xl md:text-7xl">Testimonials</h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed">
            Feedback I've received while working with some amazing, talented mentors
          </p>
        </div>
        <div className="mt-20 space-y-16">
          {testimonials.map((t) => (
            <article key={t.name} className="flex flex-col gap-6 md:flex-row md:gap-10">
              <div className="shrink-0">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted text-3xl ring-1 ring-border">
                  {t.avatar}
                </div>
              </div>
              <div className="border-l border-foreground/70 pl-6">
                <p className="text-sm font-bold tracking-wider">{t.name}, {t.role.toUpperCase()}</p>
                <div className="mt-4 space-y-4 leading-relaxed">{t.body}</div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
