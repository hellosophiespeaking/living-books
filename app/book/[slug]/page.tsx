import { supabase } from '../../lib/supabase'
import ReflectionForm from '../../lib/ReflectionForm'
import BookMap from '../../lib/BookMap'

export default async function BookPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const { data: book } = await supabase
    .from('books')
    .select('*, journeys(*), reflections(*)')
    .eq('slug', slug)
    .single()

  if (!book) return <p>Book not found.</p>

  return (
    <main className="min-h-screen bg-[#FAF8F4]">

      <nav className="flex justify-between items-center px-8 py-6">
        <a href="/" className="font-serif text-xl text-[#2C2C2A]">Living Books</a>
        <a href="/library" className="text-sm text-[#5F5E5A]">Library</a>
      </nav>

      <section className="px-8 py-16 max-w-2xl mx-auto">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-4">A living book</p>
        <h1 className="font-serif text-5xl text-[#2C2C2A] mb-2">{book.title}</h1>
        <p className="text-lg text-[#5F5E5A] mb-12">{book.author}</p>

        {book.cover_url && (
          <img
            src={book.cover_url}
            alt={book.title}
            className="w-32 mb-12 shadow-sm"
          />
        )}

        {book.description && (
          <p className="text-[#5F5E5A] leading-relaxed mb-16">{book.description}</p>
        )}

        <BookMap journeys={book.journeys || []} />

        <h2 className="font-serif text-2xl text-[#2C2C2A] mt-12 mb-8">Stops along the way</h2>
        {book.journeys && book.journeys.length > 0 ? (
          <div className="space-y-6">
            {book.journeys.map((journey: any, index: number) => (
              <div key={journey.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-2 h-2 rounded-full bg-[#888780] mt-1"></div>
                  {index < book.journeys.length - 1 && (
                    <div className="w-px flex-1 bg-[#D3D1C7] mt-2"></div>
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-[#2C2C2A] font-medium">{journey.reader_name}</p>
                  <p className="text-sm text-[#888780]">{journey.location}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-[#888780]">This book's journey is just beginning.</p>
        )}

        {book.reflections && book.reflections.length > 0 && (
          <>
            <h2 className="font-serif text-2xl text-[#2C2C2A] mt-16 mb-8">Reflections</h2>
            <div className="space-y-6">
              {book.reflections.map((reflection: any) => (
                <div key={reflection.id} className="bg-white p-6">
                  <p className="text-[#5F5E5A] leading-relaxed">{reflection.content}</p>
                </div>
              ))}
            </div>
          </>
        )}

        <ReflectionForm bookId={book.id} />

      </section>
    </main>
  )
}