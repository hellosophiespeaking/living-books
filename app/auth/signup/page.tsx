'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function SignUp() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  async function handleSignUp() {
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { full_name: name } }
    })
    if (error) {
      setMessage(error.message)
    } else {
      setMessage('Welcome to Living Books! Check your email to confirm your account.')
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-8">
      <a href="/" className="font-serif text-xl text-[#2C2C2A] mb-16">Living Books</a>
      <div className="w-full max-w-sm">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-2">Join the community</p>
        <h1 className="font-serif text-3xl text-[#2C2C2A] mb-8">Create an account</h1>
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={e => setName(e.target.value)}
            className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
          />
          <input
            type="email"
            placeholder="Email address"
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
          />
          <button
            onClick={handleSignUp}
            className="bg-[#2C2C2A] text-[#FAF8F4] px-8 py-4 text-sm tracking-wide hover:bg-[#444441] transition-colors mt-2"
          >
            Create account
          </button>
        </div>
        {message && (
          <p className="text-sm text-[#5F5E5A] mt-6 leading-relaxed">{message}</p>
        )}
        <p className="text-sm text-[#888780] mt-8">
          Already have an account?{' '}
          <a href="/auth/login" className="text-[#2C2C2A] underline">Sign in</a>
        </p>
      </div>
    </main>
  )
}