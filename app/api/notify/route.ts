import { NextRequest, NextResponse } from 'next/server'
import { sendNewBookEmail, sendNewReflectionEmail, sendBookRequestEmail } from '../../lib/email'

export async function POST(request: NextRequest) {
  const body = await request.json()

  if (body.type === 'new_book') {
    await sendNewBookEmail(body.title, body.author, body.code, body.yourName, body.email, body.location, body.newsletter)
  }

  if (body.type === 'new_reflection') {
    await sendNewReflectionEmail(body.bookTitle, body.readerName, body.location, body.reflection)
  }

  if (body.type === 'book_request') {
    await sendBookRequestEmail(body.bookTitle, body.bookOwnerEmail, body.requesterName, body.requesterAddress)
  }

  return NextResponse.json({ success: true })
}