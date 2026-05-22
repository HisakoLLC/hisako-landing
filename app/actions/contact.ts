"use server";

import { Resend } from "resend";

export async function sendContactEmail(formData: FormData) {
  // Initialize inside function to prevent build errors when env variable is missing
  const resend = new Resend(process.env.RESEND_API_KEY || "re_dummy");

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { error: "Missing required fields" };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("Missing RESEND_API_KEY environment variable");
    return { error: "Server misconfiguration. Message could not be sent." };
  }

  try {
    const data = await resend.emails.send({
      from: "Hisako System <onboarding@resend.dev>", // By default Resend only allows sending from onboarding@resend.dev to the verified email during development
      to: "hello@hisako.eu", // Replace this with the email you verified on Resend
      replyTo: email,
      subject: `[HISAKO] New Project Brief from ${name}`,
      text: `NAME: ${name}\nEMAIL: ${email}\n\nPROJECT BRIEF:\n${message}`,
    });

    return { success: true, data };
  } catch (error: unknown) {
    console.error("Resend error:", error);
    return { error: "Failed to send message. Please try again." };
  }
}
