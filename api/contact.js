// api/contact.js
import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' })
  }

  const { name, email, subject, message } = req.body

  // Create the nodemailer transport using your ENV variables
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST, 
    port: parseInt(process.env.EMAIL_PORT, 10), 
    secure: false, // if using TLS over 587, keep this false
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  // Build the mail content
  const mailOptions = {
    from: `"${name}" <${email}>`, // or just from: process.env.EMAIL_HOST_USER
    to: process.env.CONTACT_EMAIL, // the address to receive the messages
    subject: subject || 'New Contact Form Submission',
    text: `
Name: ${name}
Email: ${email}

Message:
${message}
    `,
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: 'Error sending email', error })
  }
}
