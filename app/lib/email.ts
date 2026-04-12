import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendNewBookEmail(title: string, author: string, code: string) {
  await resend.emails.send({
    from: 'Living Books <onboarding@resend.dev>',
    to: 'hello@hellosopshiespeaking.com',
    subject: `New book submitted: ${title}`,
    html: `
      <div style="font-family: monospace; color: #533021; padding: 32px;">
        <h1 style="font-size: 24px; margin-bottom: 8px;">New book submitted</h1>
        <p style="margin-bottom: 4px;"><strong>${title}</strong></p>
        <p style="margin-bottom: 4px;">${author}</p>
        <p style="margin-bottom: 24px; color: #8D3F2F;">${code}</p>
        <a href="https://livingbooksarchive.com/admin" style="background-color: #533021; color: #FAF6EE; padding: 12px 24px; text-decoration: none; font-size: 13px;">
          Review in admin
        </a>
      </div>
    `
  })
}

export async function sendNewReflectionEmail(bookTitle: string, readerName: string, location: string, reflection: string) {
  await resend.emails.send({
    from: 'Living Books <onboarding@resend.dev>',
    to: 'hello@hellosopshiespeaking.com',
    subject: `New reflection on ${bookTitle}`,
    html: `
      <div style="font-family: monospace; color: #533021; padding: 32px;">
        <h1 style="font-size: 24px; margin-bottom: 8px;">New reflection</h1>
        <p style="margin-bottom: 4px;"><strong>${bookTitle}</strong></p>
        <p style="margin-bottom: 4px;">${readerName} — ${location}</p>
        <p style="margin-top: 24px; padding: 16px; background-color: #FAF6EE; border-left: 3px solid #C6D8FF;">${reflection}</p>
      </div>
    `
  })
}