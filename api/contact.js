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
    secure: false,
    auth: {
      user: process.env.EMAIL_HOST_USER,
      pass: process.env.EMAIL_HOST_PASSWORD
    },
    tls: {
      rejectUnauthorized: false
    }
  })

  // Build the mail content with better HTML formatting
  const mailOptions = {
    from: `"Memoranta Contact Form" <${process.env.EMAIL_HOST_USER}>`,
    to: process.env.CONTACT_EMAIL,
    subject: `Memoranta Contact: ${subject || 'New Message'}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // Plain text fallback
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #3b82f6; margin: 0;">Memoranta</h1>
          <p style="color: #666; margin: 5px 0;">New Contact Form Submission</p>
        </div>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h2 style="color: #1e40af; margin-top: 0;">Contact Details</h2>
          <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #3b82f6;">${email}</a></p>
        </div>

        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px;">
          <h2 style="color: #1e40af; margin-top: 0;">Message</h2>
          <p style="white-space: pre-wrap; color: #374151;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px;">This email was sent from the Memoranta contact form.</p>
        </div>
      </div>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    return res.status(200).json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return res.status(500).json({ message: 'Error sending email', error })
  }
}
