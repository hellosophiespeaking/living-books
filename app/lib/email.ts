import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const AUDIENCE_ID = 'be080464-c071-4644-97d5-07315d57b949'

export async function sendNewBookEmail(title: string, author: string, code: string, yourName: string, userEmail: string, location: string, newsletter: boolean) {
 if (newsletter) {
    try {
      const contact = await resend.contacts.create({
        email: userEmail,
        firstName: yourName,
        audienceId: AUDIENCE_ID,
        unsubscribed: false,
      })
      console.log('Contact result:', JSON.stringify(contact))
    } catch (err) {
      console.error('Contact error:', JSON.stringify(err))
    }
  }

  await resend.emails.send({
    from: 'Living Books <onboarding@resend.dev>',
    to: 'hello@hellosophiespeaking.com',
    subject: `New book registered: ${title}`,
    html: `<div style="font-family: monospace; color: #533021; padding: 32px;"><h1 style="font-size: 24px; margin-bottom: 8px;">New book registered</h1><p style="margin-bottom: 4px;"><strong>${title}</strong> by ${author}</p><p style="margin-bottom: 4px;">Registered by ${yourName} in ${location}</p><p style="margin-bottom: 4px;">Email: ${userEmail}</p><p style="margin-bottom: 4px;">Newsletter opt-in: ${newsletter ? 'Yes' : 'No'}</p><p style="margin-bottom: 24px; color: #8D3F2F;">${code}</p></div>`
  })

  await resend.emails.send({
    from: 'Living Books <onboarding@resend.dev>',
    to: userEmail,
    subject: `Your book is registered — ${code}`,
    html: `<div style="font-family: monospace; color: #533021; padding: 32px; max-width: 480px;"><h1 style="font-size: 24px; margin-bottom: 8px;">Your book is registered</h1><p style="margin-bottom: 16px;">Hi ${yourName}, <strong>${title}</strong> by ${author} is now part of the Living Books archive.</p><p style="margin-bottom: 8px;">Your book code is:</p><p style="font-size: 32px; letter-spacing: 0.1em; color: #8D3F2F; margin-bottom: 24px;"><strong>${code}</strong></p><p style="margin-bottom: 8px;">Write this inside the front cover of your book before releasing it into the world:</p><p style="font-style: italic; color: #8D3F2F; margin-bottom: 32px; padding: 16px; border-left: 3px solid #8D3F2F;">"I am not lost — I am living. Track my journey at livingbooksarchive.com using code ${code}"</p><a href="https://livingbooksarchive.com/library" style="background-color: #533021; color: #FAF6EE; padding: 12px 24px; text-decoration: none; font-size: 13px;">View the library</a></div>`
  })
}

export async function sendNewReflectionEmail(bookTitle: string, readerName: string, location: string, reflection: string) {
  await resend.emails.send({
    from: 'Living Books <onboarding@resend.dev>',
    to: 'hello@hellosophiespeaking.com',
    subject: `New reflection on ${bookTitle}`,
    html: `<div style="font-family: monospace; color: #533021; padding: 32px;"><h1 style="font-size: 24px; margin-bottom: 8px;">New reflection</h1><p style="margin-bottom: 4px;"><strong>${bookTitle}</strong></p><p style="margin-bottom: 4px;">${readerName} — ${location}</p><p style="margin-top: 24px; padding: 16px; background-color: #FAF6EE; border-left: 3px solid #C6D8FF;">${reflection}</p></div>`
  })
}