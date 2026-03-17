import { supabase } from '../lib/supabase'
import { redirect } from 'next/navigation'

export default async function FindBook({ searchParams }: { searchParams: { code: string } }) {
  const { code } = await searchParams

  if (!code) redirect('/')

  const { data: book } = await supabase
    .from('books')
    .select('slug')
    .eq('code', code.toUpperCase())
    .single()

  if (book) {
    redirect(`/book/${book.slug}`)
  }

  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center text-center px-8">
      <a href="/" className="font-serif text-xl text-[#2C2C2A] mb-16">Living Books</a>
      <p className="text-xs uppercase tracking-widest text-[#888780] mb-4">Code not found</p>
      <h1 className="font-serif text-3xl text-[#2C2C2A] mb-6">
        This book has not begun its journey yet.
      </h1>
      <p className="text-[#5F5E5A] mb-12">Double check the code inside your book cover.</p>
      <a href="/" className="text-sm text-[#888780] underline hover:text-[#2C2C2A] transition-colors">
        Back home
      </a>
    </main>
  )
}