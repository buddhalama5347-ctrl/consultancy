'use server';

import { Resend } from 'resend';

if (!process.env.RESEND_API_KEY) {
  console.error('RESEND_API_KEY is not set in environment variables');
} else {
  console.log('RESEND_API_KEY is set (length:', process.env.RESEND_API_KEY.length, ')');
}

const resend = new Resend(process.env.RESEND_API_KEY || '');

console.log('Resend instance created with key:', process.env.RESEND_API_KEY?.substring(0, 10) + '...');

export async function sendContactEmail(formData: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    console.log('Sending email to:', 'Chabahil@exactedunp.com');
    console.log('From:', formData.email);
    console.log('Subject:', `New Contact Form Submission from ${formData.name}`);

    // Send email to your Gmail
    const result = await resend.emails.send({
       from: 'Exact Education <contact@exactedunep.com>',
      to: 'Chabahil@exactedunp.com',
      replyTo: formData.email,
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Form Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${formData.name}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Phone:</strong> ${formData.phone}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">
              ${formData.message}
            </p>
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            This is an automated email from your Exact Education contact form.
          </p>
        </div>
      `,
    });

    console.log('Resend response:', result);

    if (result.error) {
      console.error('Resend error:', result.error);
      throw new Error(result.error.message);
    }

    console.log('Email sent successfully with ID:', result.data?.id);
    return { success: true, message: 'Email sent successfully!', emailId: result.data?.id };
  } catch (error) {
    console.error('Email sending error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
}

export async function sendApplicationEmail(formData: {
  fullname: string;
  address: string;
  mobile: string;
  email: string;
  nationality: string;
  dateOfBirth: string;
  proficiencyType?: string;
  proficiencyScore?: string;
  currentEducation: string;
  desiredEducation?: string;
  instituteName?: string;
  maritalStatus?: string;
  notes?: string;
}) {
  try {
    if (!process.env.RESEND_API_KEY) {
      throw new Error('RESEND_API_KEY is not configured');
    }

    console.log('Sending application email to:', 'Chabahil@exactedunp.com');
    console.log('From:', formData.email);
    console.log('Subject:', `New Online Application from ${formData.fullname}`);

    // Send email to your Gmail
    const result = await resend.emails.send({
      from: 'Exact Education <contact@exactedunep.com>',
      to: 'Chabahil@exactedunp.com',
      replyTo: formData.email,
      subject: `New Online Application from ${formData.fullname}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Online Application Submission</h2>
          
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Full Name:</strong> ${formData.fullname}</p>
            <p><strong>Address:</strong> ${formData.address}</p>
            <p><strong>Mobile Number:</strong> ${formData.mobile}</p>
            <p><strong>Email:</strong> ${formData.email}</p>
            <p><strong>Nationality:</strong> ${formData.nationality}</p>
            <p><strong>Date of Birth:</strong> ${formData.dateOfBirth}</p>
            ${formData.proficiencyType ? `<p><strong>Proficiency Type:</strong> ${formData.proficiencyType}</p>` : ''}
            ${formData.proficiencyScore ? `<p><strong>Proficiency Score:</strong> ${formData.proficiencyScore}</p>` : ''}
            <p><strong>Current Education:</strong> ${formData.currentEducation}</p>
            ${formData.desiredEducation ? `<p><strong>Desired Education:</strong> ${formData.desiredEducation}</p>` : ''}
            ${formData.instituteName ? `<p><strong>Institute Name:</strong> ${formData.instituteName}</p>` : ''}
            ${formData.maritalStatus ? `<p><strong>Marital Status:</strong> ${formData.maritalStatus}</p>` : ''}
            ${formData.notes ? `<p><strong>Notes:</strong></p><p style="white-space: pre-wrap; background-color: white; padding: 15px; border-radius: 4px; border-left: 4px solid #007bff;">${formData.notes}</p>` : ''}
          </div>
          
          <p style="color: #999; font-size: 12px; margin-top: 30px;">
            This is an automated email from your Exact Education online application form.
          </p>
        </div>
      `,
    });

    console.log('Resend response:', result);

    if (result.error) {
      console.error('Resend error:', result.error);
      throw new Error(result.error.message);
    }

    console.log('Application email sent successfully with ID:', result.data?.id);
    return { success: true, message: 'Application submitted successfully!', emailId: result.data?.id };
  } catch (error) {
    console.error('Application email sending error:', error);
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'Failed to submit application' 
    };
  }
}
