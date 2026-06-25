export function SiteNav() {
  return (
    <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 pt-8 pb-4">
      <a href="/" className="text-2xl font-medium tracking-tight hover:opacity-70">
        O
      </a>
      <nav className="flex items-center gap-7 text-[15px]">
        <a href="/about" className="underline underline-offset-4 hover:opacity-60">
          About
        </a>
        <a href="/testimonials" className="underline underline-offset-4 hover:opacity-60">
          Testimonials
        </a>
        <a href="#" className="underline underline-offset-4 hover:opacity-60">
          Resume
        </a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mx-auto w-full max-w-6xl px-6 pb-10 pt-16 text-center text-xs text-muted-foreground">
      Designed with ❤️❤️❤️ by Olivia Wang
    </footer>
  );
}
