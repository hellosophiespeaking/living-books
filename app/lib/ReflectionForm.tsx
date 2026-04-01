'use client'
import { useState } from 'react'
import { supabase } from './supabase'

async function getCoordinates(location: string) {
  const token = process.env.NEXT_PUBLIC_MAPBOX_TOKEN
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${token}&limit=1`
  )
  const data = await response.json()
  if (data.features && data.features.length > 0) {
    const [longitude, latitude] = data.features[0].center
    return { latitude, longitude }
  }
  return null
}

export default function ReflectionForm({ bookId }: { bookId: string }) {
  const [content, setContent] = useState('')
  const [location, setLocation] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit() {
    const coords = await getCoordinates(location)

    const { error: journeyError, data: journey } = await supabase
      .from('journeys')
      .insert({
        book_id: bookId,
        reader_name: name,
        location,
        latitude: coords?.latitude,
        longitude: coords?.longitude
      })
      .select()
      .single()

    if (journeyError) {
      setMessage('Something went wrong. Please try again.')
      return
    }

    const { error: reflectionError } = await supabase
      .from('reflections')
      .insert({ book_id: bookId, journey_id: journey.id, content })

    if (reflectionError) {
      setMessage('Something went wrong. Please try again.')
      return
    }

    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-16 border-t border-[#D3D1C7] pt-12">
        <p className="font-serif text-xl text-[#2C2C2A]">Thank you for your reflection.</p>
        <p className="text-[#888780] mt-2">The book journeys on.</p>
      </div>
    )
  }

  return (
    <div className="mt-16 border-t border-[#D3D1C7] pt-12">
      <p className="text-xs uppercase tracking-widest text-[#888780] mb-2">Your turn</p>
      <h2 className="font-serif text-2xl text-[#2C2C2A] mb-8">Leave a reflection</h2>
      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={e => setName(e.target.value)}
          className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
        />
        <input
          type="text"
          placeholder="Your location (e.g. Melbourne, Australia)"
          value={location}
          onChange={e => setLocation(e.target.value)}
          className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors"
        />
        <textarea
          placeholder="What did this book mean to you?"
          value={content}
          onChange={e => setContent(e.target.value)}
          rows={5}
          className="border border-[#D3D1C7] bg-transparent px-4 py-3 text-sm text-[#2C2C2A] placeholder-[#888780] outline-none focus:border-[#2C2C2A] transition-colors resize-none"
        />
        <button
          onClick={handleSubmit}
          className="bg-[#2C2C2A] text-[#FAF8F4] px-8 py-4 text-sm tracking-wide hover:bg-[#444441] transition-colors"
        >
          Submit reflection
        </button>
      </div>
      {message && (
        <p className="text-sm text-[#5F5E5A] mt-6">{message}</p>
      )}
    </div>
  )
}