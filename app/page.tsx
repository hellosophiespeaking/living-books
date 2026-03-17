export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">

      <nav className="flex justify-between items-center px-8 py-6">
        <span className="font-serif text-xl text-[#2C2C2A]">Living Books</span>
        <a href="/library" className="text-sm text-[#5F5E5A] hover:text-[#2C2C2A] transition-colors">
          Library
        </a>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-8 py-32">
        <p className="text-sm uppercase tracking-widest text-[#888780] mb-6">
          A travelling book community
        </p>
        <h1 className="font-serif text-5xl text-[#2C2C2A] leading-tight mb-8 max-w-3xl">
          Books should never sit still.
        </h1>
        <p className="text-lg text-[#5F5E5A] max-w-md leading-relaxed mb-12">
          A global community where books live full lives — read, experienced, released, and passed forward.
        </p>
        <a href="/library" className="bg-[#2C2C2A] text-[#FAF8F4] px-8 py-4 text-sm tracking-wide hover:bg-[#444441] transition-colors">
          Explore the library
        </a>

        <div className="mt-16 flex flex-col items-center gap-3">
          <p className="text-xs uppercase tracking-widest text-[#888780]">Have a book code?</p>
          <form action="/find" method="GET" className="flex gap-3">
            <input
              name="code"
              placeholder="LB-00001"
              className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors w-36 text-center tracking-widest"
            />
            <button type="submit" className="text-sm text-[#5F5E5A] hover:text-[#2C2C2A] transition-colors">
              Find book
            </button>
          </form>
        </div>
      </section>

      <section className="px-8 py-24 max-w-4xl mx-auto">
        <h2 className="font-serif text-3xl text-[#2C2C2A] text-center mb-16">
          The Living Books way
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center">
          {[
            { step: "01", label: "Read" },
            { step: "02", label: "Experience" },
            { step: "03", label: "Record" },
            { step: "04", label: "Release" },
            { step: "05", label: "Pass forward" },
          ].map(({ step, label }) => (
            <div key={step} className="flex flex-col items-center gap-3">
              <span className="text-xs text-[#888780] tracking-widest">{step}</span>
              <span className="font-serif text-lg text-[#2C2C2A]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center py-12 text-sm text-[#888780]">
        A life beyond the page.
      </footer>

    </main>
  )
}