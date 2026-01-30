// Email service using SMTP API
// Make sure to set up SMTP credentials in .env.local

export interface EmailFormData {
  name: string;
  email: string;
  phone?: string;
  service?: string;
  position?: string;
  experience?: string;
  message?: string;
  formType: 'contact' | 'consultation' | 'career';
  resumeFileName?: string;
}

export const sendEmail = async (formData: EmailFormData): Promise<{ success: boolean; error?: string }> => {
  try {
    const response = await fetch('/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      return {
        success: false,
        error: result.error || 'Failed to send email. Please try again later.'
      };
    }

    return { success: true };
  } catch (error: any) {
    console.error('Error sending email:', error);
    return {
      success: false,
      error: error.message || 'Network error. Please check your connection and try again.'
    };
  }
};
