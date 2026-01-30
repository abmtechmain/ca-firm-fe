import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    // Handle both JSON and FormData
    const contentType = request.headers.get('content-type') || '';
    let formData: FormData;
    let name: string;
    let email: string;
    let phone: string | undefined;
    let service: string | undefined;
    let position: string | undefined;
    let experience: string | undefined;
    let message: string | undefined;
    let formType: string;
    let resumeFile: File | null = null;

    if (contentType.includes('multipart/form-data')) {
      formData = await request.formData();
      name = formData.get('name') as string;
      email = formData.get('email') as string;
      phone = formData.get('phone') as string | undefined;
      service = formData.get('service') as string | undefined;
      position = formData.get('position') as string | undefined;
      experience = formData.get('experience') as string | undefined;
      message = formData.get('message') as string | undefined;
      formType = formData.get('formType') as string;
      resumeFile = formData.get('resume') as File | null;
    } else {
      const body = await request.json();
      name = body.name;
      email = body.email;
      phone = body.phone;
      service = body.service;
      position = body.position;
      experience = body.experience;
      message = body.message;
      formType = body.formType;
    }

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { success: false, error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Get SMTP configuration from environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = parseInt(process.env.SMTP_PORT || '587');
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const recipientEmail = process.env.RECIPIENT_EMAIL || 'riteshmahale15@gmail.com';

    // Validate SMTP configuration
    if (!smtpHost || !smtpUser || !smtpPassword) {
      console.error('SMTP configuration missing. Please set SMTP_HOST, SMTP_USER, and SMTP_PASSWORD in .env.local');
      return NextResponse.json(
        { success: false, error: 'Email service configuration error' },
        { status: 500 }
      );
    }

    // Create email subject based on form type
    const subject = formType === 'career' 
      ? `Career Application - ${position || 'Position Not Specified'}`
      : formType === 'consultation'
      ? `Consultation Request - ${service || 'Service Inquiry'}`
      : 'Contact Form Submission';

    // Create email body (HTML format)
    let htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #056385; border-bottom: 2px solid #056385; padding-bottom: 10px;">
          New ${formType.toUpperCase()} Form Submission
        </h2>
        
        <div style="margin-top: 20px;">
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          ${phone ? `<p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>` : ''}
          ${service ? `<p><strong>Service Required:</strong> ${service}</p>` : ''}
          ${position ? `<p><strong>Position Applied For:</strong> ${position}</p>` : ''}
          ${experience ? `<p><strong>Experience:</strong> ${experience}</p>` : ''}
          ${resumeFile ? `<p><strong>Resume File:</strong> ${resumeFile.name} (attached)</p>` : ''}
        </div>
        
        ${message ? `
          <div style="margin-top: 20px; padding: 15px; background-color: #f5f5f5; border-left: 4px solid #056385;">
            <h3 style="color: #056385; margin-top: 0;">Message:</h3>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        ` : ''}
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
          <p>This email was sent from the SKMRD & Associates website contact form.</p>
          <p>Submitted on: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
        </div>
      </div>
    `;

    // Create plain text version
    let textBody = `New ${formType.toUpperCase()} Form Submission\n\n`;
    textBody += `Name: ${name}\n`;
    textBody += `Email: ${email}\n`;
    if (phone) textBody += `Phone: ${phone}\n`;
    if (service) textBody += `Service Required: ${service}\n`;
    if (position) textBody += `Position Applied For: ${position}\n`;
    if (experience) textBody += `Experience: ${experience}\n`;
    if (resumeFile) textBody += `Resume File: ${resumeFile.name} (attached)\n`;
    if (message) textBody += `\nMessage:\n${message}\n`;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPassword,
      },
    });

    // Prepare attachments if resume file exists
    const attachments = [];
    if (resumeFile && resumeFile.size > 0) {
      const buffer = Buffer.from(await resumeFile.arrayBuffer());
      attachments.push({
        filename: resumeFile.name,
        content: buffer,
        contentType: resumeFile.type || 'application/pdf',
      });
    }

    // Send email
    const info = await transporter.sendMail({
      from: `"SKMRD & Associates Website" <${smtpUser}>`,
      to: recipientEmail,
      replyTo: email,
      subject: subject,
      text: textBody,
      html: htmlBody,
      attachments: attachments.length > 0 ? attachments : undefined,
    });

    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({
      success: true,
      messageId: info.messageId
    });

  } catch (error: any) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error.message || 'Failed to send email. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
