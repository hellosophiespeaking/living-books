import { supabase } from '../lib/supabase'
import Link from 'next/link'

export default async function Library() {
  const { data: books } = await supabase.from('books').select('*')

  return (
    <main className="min-h-screen bg-[#FAF8F4]">

      <nav className="flex justify-between items-center px-8 py-6">
        <a href="/" className="font-serif text-xl text-[#2C2C2A]">Living Books</a>
        <span className="text-sm text-[#5F5E5A]">Library</span>
      </nav>

      <section className="px-8 py-16 max-w-5xl mx-auto">
        <h1 className="font-serif text-4xl text-[#2C2C2A] mb-4">The library</h1>
        <p className="text-[#5F5E5A] mb-16">Every book here is alive. Each one is on a journey.</p>

        {books && books.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {books.map((book) => (
              <Link key={book.id} href={`/book/${book.slug}`}>
                <div className="bg-white p-6 hover:shadow-md transition-shadow cursor-pointer">
                  <h2 className="font-serif text-xl text-[#2C2C2A] mb-1">{book.title}</h2>
                  <p className="text-sm text-[#888780]">{book.author}</p>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="text-[#888780] text-center py-24 font-serif text-xl">
            The first book is yet to begin its journey.
          </p>
        )}
      </section>

    </main>
  )
}