import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  const { bookId, requesterName, requesterEmail, requesterAddress } = await request.json()

  const { data: book, error: bookError } = await supabase
    .from('books')
    .select('*')
    .eq('id', bookId)
    .eq('available_to_send', true)
    .single()

  if (bookError || !book) {
    return NextResponse.json({ error: 'This book is no longer available.' }, { status: 400 })
  }

  const { error: updateError } = await supabase
    .from('books')
    .update({ available_to_send: false })
    .eq('id', bookId)

  if (updateError) {
    return NextResponse.json({ error: 'Something went wrong. Please try again.' }, { status: 500 })
  }

  await supabase.from('book_requests').insert({
    book_id: bookId,
    requester_name: requesterName,
    requester_email: requesterEmail,
    requester_address: requesterAddress,
  })

  await resend.emails.send({
    from: 'Living Books <onboarding@resend.dev>',
    to: book.email,
    subject: `Someone wants your book — ${book.title}`,
    html: `<div style="font-family: monospace; color: #533021; padding: 32px; max-width: 480px;">
      <h1 style="font-size: 24px; margin-bottom: 8px;">Someone claimed your book!</h1>
      <p style="margin-bottom: 16px;"><strong>${book.title}</strong> by ${book.author} has been claimed by ${requesterName}.</p>
      <p style="margin-bottom: 8px;">Please post it to:</p>
      <p style="padding: 16px; background-color: #FAF6EE; border-left: 3px solid #8D3F2F; margin-bottom: 24px; white-space: pre-wrap;">${requesterAddress}</p>
      <p style="margin-bottom: 24px;">Their email is: ${requesterEmail}</p>
      <p style="color: #8D3F2F; font-style: italic;">Thank you for keeping the books travelling.</p>
    </div>`
  })

  await resend.emails.send({
    from: 'Living Books <onboarding@resend.dev>',
    to: requesterEmail,
    subject: `Your book is on its way — ${book.title}`,
    html: `<div style="font-family: monospace; color: #533021; padding: 32px; max-width: 480px;">
      <h1 style="font-size: 24px; margin-bottom: 8px;">Your book is on its way!</h1>
      <p style="margin-bottom: 16px;">Hi ${requesterName}, <strong>${book.title}</strong> by ${book.author} has been claimed and the owner will post it to you shortly.</p>
      <p style="color: #8D3F2F; font-style: italic; margin-bottom: 24px;">"Not lost. Just living."</p>
      <a href="https://livingbooksarchive.com/library" style="background-color: #533021; color: #FAF6EE; padding: 12px 24px; text-decoration: none; font-size: 13px;">View the library</a>
    </div>`
  })

  return NextResponse.json({ success: true })
}