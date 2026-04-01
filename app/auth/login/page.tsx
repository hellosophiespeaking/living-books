'use client'
import { useState } from 'react'
import { supabase } from '../../lib/supabase'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  async function handleLogin() {
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMessage(error.message)
    } else {
      window.location.href = '/'
    }
  }

  return (
    <main className="min-h-screen bg-[#FAF8F4] flex flex-col items-center justify-center px-8">
      <a href="/" className="font-serif text-xl text-[#2C2C2A] mb-16">Living Books</a>

      <div className="w-full max-w-sm">
        <p className="text-xs uppercase tracking-widest text-[#888780] mb-2">Welcome back</p>
        <h1 className="font-serif text-3xl text-[#2C2C2A] mb-8">Sign in</h1>

        <div className="flex flex-col gap-4">
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
            onClick={handleLogin}
            className="bg-[#2C2C2A] text-[#FAF8F4] px-8 py-4 text-sm tracking-wide hover:bg-[#444441] transition-colors mt-2"
          >
            Sign in
          </button>
        </div>

        {message && (
          <p className="text-sm text-[#5F5E5A] mt-6">{message}</p>
        )}

        <p className="text-sm text-[#888780] mt-8">
          New to Living Books?{' '}
          <a href="/auth/signup" className="text-[#2C2C2A] underline">Create an account</a>
        </p>
      </div>
    </main>
  )
}