"use server";

import { Resend } from "resend";

export interface ContactSubmission {
  name: string;
  organization?: string;
  email: string;
  phone?: string;
  helpCategory?: string;
  projectDescription: string;
  budgetRange?: string;
  timeline?: string;
}

export async function sendContactEmail(submission: ContactSubmission) {
  const { name, organization, email, phone, helpCategory, projectDescription, budgetRange, timeline } = submission;

  if (!name || !email || !projectDescription) {
    return { error: "Missing required fields." };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Missing RESEND_API_KEY environment variable");
    return {
      error: "Message service is currently unconfigured. Please email us directly at hello@hisako.eu.",
    };
  }

  const resend = new Resend(apiKey);

  const formattedText = `
NEW PROJECT INQUIRY — HISAKO WEBSITE

Client Details:
- Name: ${name}
- Organization: ${organization || "Not specified"}
- Email: ${email}
- Phone: ${phone || "Not specified"}

Project Scope:
- Category: ${helpCategory || "General Software Inquiry"}
- Budget Range: ${budgetRange || "Not specified"}
- Target Timeline: ${timeline || "Not specified"}

Project Description:
${projectDescription}

Sent via hisako.eu contact portal
`.trim();

  try {
    const fromAddress = process.env.RESEND_FROM_EMAIL || "Hisako Contact <onboarding@resend.dev>";
    const recipientEmail = "hello@hisako.eu";

    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: recipientEmail,
      replyTo: email,
      subject: `[HISAKO] Project Inquiry: ${name}${organization ? ` (${organization})` : ""}`,
      text: formattedText,
    });

    if (error) {
      console.error("Resend delivery failed:", error);
      return { error: error.message || "Failed to deliver email. Please try again." };
    }

    return { success: true, data };
  } catch (err: unknown) {
    console.error("Resend error:", err);
    return { error: "An unexpected error occurred while sending your message. Please reach out to hello@hisako.eu directly." };
  }
}
