export default function About() {
  return (
    <main className="min-h-screen bg-[#FAF8F4]">

      <nav className="flex justify-between items-center px-8 py-6">
        <a href="/" className="font-serif text-xl text-[#2C2C2A]">Living Books</a>
        <a href="/library" className="text-sm text-[#5F5E5A] hover:text-[#2C2C2A] transition-colors">
          Library
        </a>
      </nav>

      <section className="px-8 py-24 max-w-2xl mx-auto">

        <p className="text-xs uppercase tracking-widest text-[#888780] mb-4">Our story</p>
        <h1 className="font-serif text-5xl text-[#2C2C2A] leading-tight mb-16">
          A life beyond the page.
        </h1>

        <div className="space-y-8 text-[#5F5E5A] leading-relaxed text-lg">
          <p>
            In 2018, while travelling through London, South Africa, Italy and Budapest, a book was left behind in each city. Not lost — intentionally released. Placed on a bench, tucked into a hostel bookshelf, left on a café table. Each one carried a small note: read me, then pass me on.
          </p>
          <p>
            That simple act — of giving a book a life beyond its last page — became the seed of Living Books.
          </p>
          <p>
            Living Books is a global community where books travel between readers, carrying stories, experiences and memories with them. Each book is given a unique code. Each reader who finds it logs their experience, leaves a reflection, and releases it back into the world.
          </p>
          <p>
            The book is the main character. Readers are stewards, not owners.
          </p>
          <p>
            This is not a book swap. It is not a marketplace. It is not a review platform. It is a movement — a philosophy about what books are capable of when we stop holding on to them.
          </p>
          <p>
            Every book in the Living Books archive has a life. A journey. A timeline of the hands it has passed through and the places it has been. That history belongs to the book — and to everyone who has ever held it.
          </p>
          <p className="font-serif text-2xl text-[#2C2C2A] italic">
            Books should never sit still.
          </p>
        </div>

        <div className="mt-24 pt-12 border-t border-[#D3D1C7]">
          <p className="text-xs uppercase tracking-widest text-[#888780] mb-6">Our values</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: "Intentional living", body: "Slow, thoughtful participation. Every book released with purpose." },
              { title: "Books as living objects", body: "Books carry memory and identity. They are not static." },
              { title: "Generosity over ownership", body: "Books are shared freely. The gift is in the passing on." },
              { title: "Circular sustainability", body: "Books stay in motion. Nothing sits on a shelf gathering dust." },
              { title: "Community connection", body: "Reading is shared. Every reflection is a thread between strangers." },
            ].map(({ title, body }) => (
              <div key={title} className="border-l-2 border-[#D3D1C7] pl-6 py-1">
                <p className="font-serif text-lg text-[#2C2C2A] mb-2">{title}</p>
                <p className="text-sm text-[#888780] leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 text-center">
          <p className="text-[#5F5E5A] mb-8">Ready to release a book into the world?</p>
          <a href="/submit" className="bg-[#2C2C2A] text-[#FAF8F4] px-8 py-4 text-sm tracking-wide hover:bg-[#444441] transition-colors">
            Release a book
          </a>
        </div>

      </section>

      <footer className="text-center py-12 text-sm text-[#888780]">
        <p className="mb-4">A life beyond the page.</p>
        <a href="https://instagram.com/livingbooksarchive" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#888780] hover:text-[#2C2C2A] transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
            <circle cx="12" cy="12" r="4"/>
            <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
          </svg>
          @livingbooksarchive
        </a>
      </footer>

    </main>
  )
}