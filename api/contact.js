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
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 16px;">
        <div style="text-align: center; margin-bottom: 20px; background: linear-gradient(135deg, #2563eb, #65a30d); padding: 30px 20px; border-radius: 16px;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Memoranta</h1>
          <p style="color: rgba(255, 255, 255, 0.9); margin: 5px 0;">Contact Form Submission</p>
        </div>
        
        <div style="background-color: #f0f7ff; padding: 30px; border-radius: 16px; margin-bottom: 20px;">
          <div style="background: white; padding: 20px; border-radius: 12px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h2 style="color: #2563eb; margin-top: 0; font-size: 20px;">Contact Details</h2>
            <p style="margin: 5px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 5px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></p>
          </div>

          <div style="background: white; padding: 20px; border-radius: 12px; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
            <h2 style="color: #2563eb; margin-top: 0; font-size: 20px;">Message</h2>
            <p style="white-space: pre-wrap; color: #374151;">${message}</p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 20px; background: white; border-radius: 16px;">
          <p style="color: #6b7280; font-size: 14px; margin: 0;">
            Sent from the Memoranta Language Learning Platform
          </p>
          <div style="margin-top: 15px;">
            <a href="${process.env.SITE_URL || 'https://memoranta.com'}" 
               style="display: inline-block; 
                      background: linear-gradient(135deg, #2563eb, #65a30d);
                      color: white;
                      text-decoration: none;
                      padding: 8px 20px;
                      border-radius: 8px;
                      font-size: 14px;">
              Visit Memoranta
            </a>
          </div>
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
