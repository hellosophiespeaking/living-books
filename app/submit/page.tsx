'use client'
import { useState } from 'react'
import { supabase } from '../lib/supabase'

async function generateCode() {
  const { data } = await supabase
    .from('books')
    .select('code')
    .order('created_at', { ascending: false })
    .limit(1)

  if (!data || data.length === 0) return 'LB-00001'

  const last = data[0].code
  const num = parseInt(last.replace('LB-', '')) + 1
  return `LB-${String(num).padStart(5, '0')}`
}

export default function SubmitBook() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [description, setDescription] = useState('')
  const [yourName, setYourName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [code, setCode] = useState('')

  async function handleSubmit() {
    if (!title || !author || !yourName) {
      setMessage('Please fill in all required fields.')
      return
    }

    const newCode = await generateCode()
    const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

    const { error } = await supabase
      .from('books')
      .insert({
        title,
        author,
        description,
        slug,
        code: newCode,
      })

    if (error) {
      setMessage('Something went wrong. Please try again.')
      return
    }

    setCode(newCode)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-8">
        <a href="/" className="font-serif text-xl text-[#2C2C2A] mb-16">Living Books</a>
        <div className="w-full max-w-sm text-center">
          <p className="text-xs uppercase tracking-widest text-[#888780] mb-4">Your book is registered</p>
          <h1 className="font-serif text-4xl text-[#2C2C2A] mb-6">{title}</h1>
          <p className="text-[#5F5E5A] mb-12">Write this code inside the front cover of your book before releasing it into the world.</p>
          <div className="border border-[#D3D1C7] py-8 px-12 mb-12">
            <p className="text-xs uppercase tracking-widest text-[#888780] mb-3">Your book code</p>
            <p className="font-serif text-4xl text-[#2C2C2A] tracking-widest">{code}</p>
          </div>
          <a href="/library" className="text-sm text-[#888780] underline hover:text-[#2C2C2A] transition-colors">
            View the library
          </a>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-8">
      <a href="/" className="font-serif text-xl text-[#2C2C2A] mb-16">Living Books</a>
      <div className="w-full max-w-sm">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-2">Release a book</p>
        <h1 className="font-serif text-3xl text-[#2C2C2A] mb-4">Submit a book</h1>
        <p className="text-sm text-[#888780] mb-8 leading-relaxed">
          Every book submitted becomes part of the Living Books library. You will receive a unique code to write inside the cover before releasing it.
        </p>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Book title *"
            value={title}
            onChange={e => setTitle(e.target.value)}
            className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
          />
          <input
            type="text"
            placeholder="Author *"
            value={author}
            onChange={e => setAuthor(e.target.value)}
            className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
          />
          <textarea
            placeholder="A short description of the book"
            value={description}
            onChange={e => setDescription(e.target.value)}
            rows={4}
            className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors resize-none"
          />
          <input
            type="text"
            placeholder="Your name *"
            value={yourName}
            onChange={e => setYourName(e.target.value)}
            className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
          />
          <button
            onClick={handleSubmit}
            className="bg-[#2C2C2A] text-[#FAF8F4] px-8 py-4 text-sm tracking-wide hover:bg-[#444441] transition-colors mt-2"
          >
            Submit book
          </button>
        </div>
        {message && (
          <p className="text-sm text-[#5F5E5A] mt-6">{message}</p>
        )}
      </div>
    </main>
  )
}