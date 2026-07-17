export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-2 text-center">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-fog-dim">
          &copy; {year} Shadrach Oguejiofor Chukwuemeka — Built with Next.js
          &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
